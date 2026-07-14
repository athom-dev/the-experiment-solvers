import Section from "@/components/layout/Section";
import { Heading, List, Text, Stack } from "@chakra-ui/react";

export default function ChangelogPage() {
  return (
    <Section>
      <Heading>Changelog</Heading>
      <Stack>
        <Heading size="md">v1.0 — 08 July 2026 </Heading>
        <Text fontSize="sm">These are the recent additions and changes to the directory:</Text>
        <List.Root gap={.5} fontSize="sm" color="fg.muted" ps={5}>
          <List.Item>Redesigned the whole layout of the website to provide a proper user experience and interfaces.</List.Item>
          <List.Item>Created an individual page to display the changelogs.</List.Item>
          <List.Item>Modified the routes of the website for better usage.</List.Item>
          <List.Item>Minor bug fixes and changes.</List.Item>
        </List.Root>
      </Stack>
    </Section>
  )
}