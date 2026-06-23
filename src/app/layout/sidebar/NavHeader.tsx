import { HStack, Icon, IconButton, Heading } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useRef } from "react"

export default function NavHeader () {
  const toggleAside = () => {
    document.querySelector("aside")?.classList.toggle("hidden")
  }

  return (
    <HStack  pe={2} gap={0} as="header">
      <Heading mx="auto" className="concealable" size="sm">The Experiment Solvers</Heading>
    </HStack>
  )
}