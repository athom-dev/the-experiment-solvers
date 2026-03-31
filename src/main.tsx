import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import { Container, Separator, HStack, Box, ScrollArea } from "@chakra-ui/react"
import { Provider } from "@/components/ui/provider"


import Navigation from "./components/main/Navigation.tsx"
import SolverList from "./components/main/SolversTree.tsx"

import "../public/style.css"
import App from "./pages/App"
import Error404 from "./pages/Error404"

import LockdownSolv from "./components/solvers-and-helpers/LockdownSolv.tsx"
import EnergyContainerBoardSolv from "./components/solvers-and-helpers/EnergyContainerBoardSolv.tsx"
import LetterToNumberSolv from "./components/solvers-and-helpers/LetterToNumberSolv.tsx"
import BatteriesPuzzleSolv from "./components/solvers-and-helpers/BatteriesPuzzleSolv.tsx"
import UnknownSignalPuzzleSolv from "./components/solvers-and-helpers/UnknownSignalPuzzleSolv.tsx"
import XorGatesPuzzleSolv from "./components/solvers-and-helpers/XorGatesPuzzleSolv.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Container display="flex" flexDirection="column" py="4" h="100%" maxW="6xl" px="4">
          <Navigation />
          <Box overflow={"hidden"} boxSizing="border-box" flexGrow="1" pb={8}>
            <HStack h="100%" alignItems="start" gap="4">
              
              <Box className="hide-mobile">
                <SolverList showTitle={true}/>
              </Box>
              <Separator className="hide-mobile" h="100%" mx={4} orientation="vertical" />
              <ScrollArea.Root size="xs">
                <ScrollArea.Viewport>
                  <ScrollArea.Content className="scrollArea" >
                    <Box className="pe-md-0" flexGrow={1} h="100%" overflow="auto" ps={1} pe={4}>
                      <Routes>
                        <Route path="the-experiment-solvers">
                          <Route index element={<App />} />
                          {/* <Route element={<App />} /> */}
                          <Route path="lockdown.solv" element={<LockdownSolv />} />
                          <Route path="energy-container-puzzle.solv" element={<EnergyContainerBoardSolv />} />
                          <Route path="unknown-signal-puzzle.solv" element={<UnknownSignalPuzzleSolv />} />
                          <Route path="batteries-puzzle.solv" element={<BatteriesPuzzleSolv />} />
                          <Route path="letter-to-number.solv" element={<LetterToNumberSolv />} />
                          <Route path="xor-gates-puzzle.solv" element={<XorGatesPuzzleSolv />} />
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