import { Box } from "@chakra-ui/react"
import { Link } from "react-router";
import { TreeView, createTreeCollection } from "@chakra-ui/react"
import { LuFile, LuFolder, LuExternalLink } from "react-icons/lu"
import { useState } from "react"

function Navigation(props: {showTitle?: boolean}) {
    const [expandedValue, setExpandedValue] = useState<string[]>(["solvers", "more"]);
    return (
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
          { disabled: true, href: "grid-puzzle.solv", id: "grid-puzzle.solv", name: "Timeless: Grid" },
          { disabled: true, href: "math-puzzle.solv", id: "math-puzzle.solv", name: "Timeless: Math" },
          { disabled: true, href: "chess-puzzle.solv", id: "chess-puzzle.solv", name: "Timeless: Chess" },
          { href: "energy-container-puzzle.solv", id: "energy-container-puzzle.solv", name: "Timeless: Energy Container" },
          { href: "xor-gates-puzzle.solv", id: "xor-gates-puzzle.solv", name: "Timeless: XOR Gates" },
          { href: "batteries-puzzle.solv", id: "batteries-puzzle.solv", name: "Timeless: Batteries" },
          { href: "unknown-signal-puzzle.solv", id: "unknown-signal-puzzle.solv", name: "Unknown Signal" },
        ],
      },
      {
        id: "more",
        name: "Helpers",
        children: [
          { href: 'lockdown.solv', id: "lockdown.solv", name: "Lockdown" },
          { href: 'letter-to-number.solv', id: "letter-to-number.solv", name: "Decoder" },
        ],
      },
    ],
  },
})

export default Navigation;