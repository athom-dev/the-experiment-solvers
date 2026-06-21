import { Prose } from "@/components/ui/prose";
import { Heading } from "@chakra-ui/react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function NotFound() {
  const md = `
  ### Page not found`
  
  return (
    <>
      <Prose minW="unset" w="auto" maxW="unset">
        <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {md}
        </Markdown>
      </Prose>
    </>
  )
}