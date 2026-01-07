import { Box } from "@chakra-ui/react"
import { Link } from "react-router";
import { TreeView, createTreeCollection } from "@chakra-ui/react"
import { LuFile, LuFolder, LuExternalLink } from "react-icons/lu"
import { useState } from "react"

function Navigation(props: {showTitle?: boolean}) {
    const [expandedValue, setExpandedValue] = useState<string[]>(["solvers", "more"]);
    return (
      <Box w={200}>
          <TreeView.Root

            collection={collection}
            maxW="sm"
            size="sm"
            expandedValue={expandedValue}
            onExpandedChange={(e) => setExpandedValue(e.expandedValue)}
          >
            {(props.showTitle == true) ?
            (<TreeView.Label>Solvers and Helpers</TreeView.Label>): ''}
            <TreeView.Tree >
              <TreeView.Node
                indentGuide={<TreeView.BranchIndentGuide />}
                render={({ node, nodeState }) =>
                  nodeState.isBranch ? (
                    <TreeView.BranchControl>
                      <LuFolder />
                      <TreeView.BranchText>{node.name}</TreeView.BranchText>
                    </TreeView.BranchControl>
                  ) : (
                    <TreeView.Item asChild>
                        {node.disabled ? (
                          <Box title={node.name + ": Currently unavailable"}>
                            <LuFile />
                            <TreeView.ItemText textWrap="nowrap" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{node.name}</TreeView.ItemText>
                            {node.href?.startsWith("http") && (
                              <LuExternalLink size={12} />
                            )}
                          </Box>
                        ) : (
                          <Link to={"/the-experiment-solvers/" + node.href} title={node.name}>
                            <LuFile />
                            <TreeView.ItemText textWrap="nowrap" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">{node.name}</TreeView.ItemText>
                            {node.href?.startsWith("http") && (
                              <LuExternalLink size={12} />
                            )}
                          </Link>
                        )}
                    </TreeView.Item>
                  )
                }
              />
            </TreeView.Tree>
          </TreeView.Root>
      </Box>
    );
}

interface Node {
  id: string
  href?: string
  disabled?: boolean
  name: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "solvers",
        name: "Solvers",
        children: [     
          { disabled: true, href: "grid-puzzle.solv", id: "grid-puzzle.solv", name: "grid-puzzle.solv" },
          { disabled: true, href: "math-puzzle.solv", id: "math-puzzle.solv", name: "math-puzzle.solv" },
          { disabled: true, href: "chess-puzzle.solv", id: "chess-puzzle.solv", name: "chess-puzzle.solv" },
          { href: "energy-container-puzzle.solv", id: "energy-container-puzzle.solv", name: "energy-container-puzzle.solv" },
          { disabled: true, href: "xor-gates-puzzle.solv", id: "xor-gates-puzzle.solv", name: "xor-gates-puzzle.solv" },
          { disabled: true, href: "batteries-puzzle.solv", id: "batteries-puzzle.solv", name: "batteries-puzzle.solv" },
          { disabled: true, href: "unknown-signal-puzzle.solv", id: "unknown-signal-puzzle.solv", name: "unknown-signal-puzzle.solv" },
        ],
      },
      {
        id: "more",
        name: "Helpers",
        children: [
          { href: 'lockdown.solv', id: "lockdown.solv", name: "lockdown.solv" },
          { disabled: true, href: 'letter-to-number.solv', id: "letter-to-number.solv", name: "letter-to-number.solv" },
        ],
      },
    ],
  },
})

export default Navigation;