import { Container, Heading, Box, Text, Stack, Button, Icon, HStack } from "@chakra-ui/react";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import Section from "@/components/layout/Section"
export default function NotFound() {
  return (
    <Section>
      <Stack mx="auto" maxW="lg" textAlign="center" gap={4}>
        <HStack mx="auto">
          <Icon>
            <TriangleAlert />
          </Icon>
          <Heading>
            Page not found
          </Heading>
        </HStack>
        <Text fontSize="sm" color="fg.muted">The server couldn't find any route that matches to the requested URL. If this was caused by a button or link inside the directory, please report to any developer or contributor of the directory.</Text>
        <Button onClick={() => {history.back()}} mx="auto" rounded="full" variant="plain"><ArrowLeft /> Return to the previous page</Button>
      </Stack>
    </Section>
  )
}