import { Outlet } from "react-router";
import { Box, Container, HStack, Stack } from "@chakra-ui/react";
import Sidebar from "./sidebar"
import Header from "./Header";

export default function AppLayout () {
  return (
      <HStack h="100%" w="100%" alignItems="start" justifyContent="center">
        <Sidebar />
        <Stack as="main">
          <Header />
          <Container className="container" h="100%" w="3xl">
            <Outlet />
          </Container>
        </Stack>
      </HStack>
  )
}