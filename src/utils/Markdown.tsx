import React, { type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {TriangleAlert} from "lucide-react"
import {Box, Icon} from "@chakra-ui/react"
interface CalloutBannerProps {
  type: 'warning';
  children: ReactNode;
}

const CalloutBanner: React.FC<CalloutBannerProps> = ({ children }) => {
  return (
    <Box style={{
      backgroundColor: 'var(--chakra-colors-yellow-subtle)',
      borderLeft: '3px solid var(--chakra-colors-yellow-solid)',
      color: 'var(--chakra-colors-yellow-fg)',
      padding: '1rem',
      paddingBottom: '.5rem',
      marginBottom: '1.5rem',
      borderRadius: '4px',
    }}>
      <Box style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <Icon size="md"><TriangleAlert /></Icon> Warning
      </Box>
      <Box style={{ color: '#78350f', lineHeight: '1.5' }}>{children}</Box>
    </Box>
  );
};

interface MarkdownViewerProps {
  markdownContent: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownContent }) => {
  
  // Função que corrige problemas de sintaxe comuns do Markdown antes do parse do HTML
  const preProcessMarkdown = (rawText: string): string => {
    if (!rawText) return '';

    return rawText
      // Cenário A: Corrige casos onde o > está colado no texto (Ex: `>[!warning]` vira `> [!warning]`)
      .replace(/^>(\[!warning\])/gm, '> $1')
      
      // Cenário B: Caso o input não tenha o `>` de citação por erro de digitação, 
      // mas comece a linha com [!warning], nós injetamos o `> ` para forçar a citação.
      .replace(/^(\[!warning\])/gm, '> $1');
  };

  const formattedMarkdown = preProcessMarkdown(markdownContent);

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
      components={{
        blockquote: ({ children }) => {
          // Varre os nós em busca da tag de identificação do Obsidian
          const childrenArray = React.Children.toArray(children);
          
          const findAndCleanText = (nodes: any[]): { hasTag: boolean; cleanNodes: any[] } => {
            let hasTag = false;
            
            const mapped = nodes.map((node) => {
              if (typeof node === 'string' && node.trim().startsWith('[!warning]')) {
                hasTag = true;
                return node.replace('[!warning]', '').trim();
              }
              if (node?.props?.children) {
                const subChildren = React.Children.toArray(node.props.children);
                const result = findAndCleanText(subChildren);
                if (result.hasTag) {
                  hasTag = true;
                  return React.cloneElement(node, {}, ...result.cleanNodes);
                }
              }
              return node;
            });

            return { hasTag, cleanNodes: mapped };
          };

          const { hasTag, cleanNodes } = findAndCleanText(childrenArray);

          if (hasTag) {
            return <CalloutBanner type="warning">{cleanNodes}</CalloutBanner>;
          }

          // Mantém as citações normais intactas (como a seção "Disclaimer")
          return (
            <blockquote style={{ borderLeft: '4px solid #cbd5e1', paddingLeft: '16px', color: '#475569', margin: '16px 0', fontStyle: 'italic' }}>
              {children}
            </blockquote>
          );
        }
      }}
    >
      {formattedMarkdown}
    </ReactMarkdown>
  );
};
