import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Navigation.tsx"
import SolverList from "./components/SolverList.tsx"
import { Container, Separator, HStack, Box } from "@chakra-ui/react"

import App from "./App"
import LockdownSolv from "./solversAndHelpers/LockdownSolv.tsx"
import Error404 from "./Error404"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Container display="flex" flexDirection="column" py="8" h="100vh" maxW="5xl" px="2">
          <Navigation />
          <Box boxSizing="border-box" h="100%">
            <HStack h="100%" alignItems="start" gap="4">
              
              <Box>
                <SolverList/>
              </Box>
              <Separator h="100%" orientation="vertical" />
              <Box flexGrow={1}>
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="*" element={<Error404 />} />
                  <Route path="/lockdown.solv" element={<LockdownSolv />} />
                </Routes>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)