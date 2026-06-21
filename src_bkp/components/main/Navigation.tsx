import { Box, Heading, HStack, Drawer, Button, Text, Stack, Portal, CloseButton, IconButton } from "@chakra-ui/react"
import { FaRegFolderOpen } from "react-icons/fa";
import SolverList from "./SolversTree.tsx"
import { Link } from "react-router";
import { useState } from "react";

import { useColorMode, ColorModeIcon } from "../ui/color-mode.tsx"
const Athom = () => {
  return (
    <>
      <img className="only-light-mode" width="46" src="/the-experiment-solvers/assets/athom-black-0bg.png"></img>
      <img className="only-dark-mode" width="46" src="/the-experiment-solvers/assets/athom-white-0bg.png"></img>
    </>
  )
}

function Navigation() {
  const colorMode = useColorMode()
  const [open, setOpen] = useState(false)
    return (
      <>
        <nav>
            <Box pb="5" >
                <HStack justifyContent="space-between" gap="5">
                    <Link to="/the-experiment-solvers">
                      <HStack w="100%" gap="3" justifyContent="center">
                          <Athom/>
                          <Stack gap={0}>
                            <Heading as="h1" size="md">The Experiment Solvers</Heading>
                            <Text color="fg.subtle" mt="-1" fontSize="sm"></Text>
                          </Stack>
                      </HStack>
                    </Link>

                    <HStack pe={{base:0, md:4}}>
                      <IconButton onClick={() => colorMode.toggleColorMode()} variant="outline">
                        <ColorModeIcon/>
                      </IconButton>
                      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                        <Drawer.Trigger asChild>
                          <IconButton className="hide-desktop" variant="subtle" size="md">
                            <FaRegFolderOpen/>
                          </IconButton>
                        </Drawer.Trigger>
                        <Portal>
                          <Drawer.Backdrop />
                          <Drawer.Positioner>
                            <Drawer.Content>
                              <Drawer.Header>
                                <Drawer.Title>Solvers and helpers</Drawer.Title>
                              </Drawer.Header>
                              <Drawer.Body onClickCapture={() => setOpen(false)}>
                                <SolverList/>
                              </Drawer.Body>
                              <Drawer.Footer>
                                <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
                              </Drawer.Footer>
                              <Drawer.CloseTrigger asChild>
                                <CloseButton size="md" />
                              </Drawer.CloseTrigger>
                            </Drawer.Content>
                          </Drawer.Positioner>
                        </Portal>
                      </Drawer.Root>
                    </HStack>
                </HStack >

            </Box>
            {/* Navigation content */}
        </nav>
      </>
    );
}

export default Navigation;