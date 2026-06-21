import { Heading, HStack, Icon, IconButton } from "@chakra-ui/react";
import { Info, Newspaper } from "lucide-react";

export default function Header () {
  return(
    <HStack as="header" pe={1}>
      <Heading size="sm">Welcome</Heading>
      <HStack gap={1} ms="auto">
        <IconButton rounded="full" variant="ghost">
          <Icon>
            <Newspaper />
          </Icon>
        </IconButton>
        <IconButton rounded="full" variant="ghost">
          <Icon>
            <Info />
          </Icon>
        </IconButton>
      </HStack>
    </HStack>
  )
}