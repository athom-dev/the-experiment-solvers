import { HStack, Icon, IconButton, Heading } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useRef } from "react"

export default function NavHeader () {
  const toggleAside = () => {
    document.querySelector("aside")?.classList.toggle("hidden")
  }

  return (
    <HStack  pe={2} gap={0} as="header">
      <IconButton onClick={toggleAside} size="md" variant="subtle">
        <Icon>
          <Menu />
        </Icon>
      </IconButton>
      <Heading className="concealable" size="xs">The Experiment Solvers</Heading>
    </HStack>
  )
}