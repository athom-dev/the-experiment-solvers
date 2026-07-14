import { Box, Container, Stack } from "@chakra-ui/react";

export default function Section({children}:{children?: React.ReactNode}) {
  return (
    <Box as="section" pb={16}>
      <Container my="auto" maxW="5xl">
        <Stack gap={8}>
          {children}
        </Stack>
      </Container>
    </Box>
  )
}