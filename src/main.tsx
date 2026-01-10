import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Navigation.tsx"
import SolverList from "./components/SolverList.tsx"
import { Container, Separator, HStack, Box, ScrollArea } from "@chakra-ui/react"

import App from "./App"
import LockdownSolv from "./solversAndHelpers/LockdownSolv.tsx"
import EnergyContainerBoardSolv from "./solversAndHelpers/EnergyContainerBoardSolv.tsx"
import LetterToNumberSolv from "./solversAndHelpers/LetterToNumberSolv.tsx"
import UnknownSignalPuzzleSolv from "./solversAndHelpers/UnknownSignalPuzzleSolv.tsx"
import Error404 from "./Error404"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Container display="flex" flexDirection="column" py="8" h="100vh" maxW="5xl" px="2">
          <Navigation />
          <Box overflow={"hidden"} boxSizing="border-box" flexGrow="1" pb={8}>
            <HStack h="100%" alignItems="start" gap="4">
              
              <Box>
                <SolverList showTitle={true}/>
              </Box>
              <Separator h="100%" mx={4} orientation="vertical" />
              <ScrollArea.Root size="xs">
                <ScrollArea.Viewport>
                  <ScrollArea.Content>
                    <Box flexGrow={1} h="100%" overflow="auto" ps={1} pe={8}>
                      <Routes>
                        <Route path="the-experiment-solvers">
                          <Route index element={<App />} />
                          {/* <Route element={<App />} /> */}
                          <Route path="lockdown.solv" element={<LockdownSolv />} />
                          <Route path="energy-container-puzzle.solv" element={<EnergyContainerBoardSolv />} />
                          <Route path="unknown-signal-puzzle.solv" element={<UnknownSignalPuzzleSolv />} />
                          <Route path="letter-to-number.solv" element={<LetterToNumberSolv />} />
                        </Route>
                        <Route path="*" element={<Error404 />} />
                      </Routes>
                    </Box>
                  </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </HStack>
          </Box>
        </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)