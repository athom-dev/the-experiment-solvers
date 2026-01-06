import { Avatar, Box, Heading, HStack } from "@chakra-ui/react"

const Athom = () => {
  return (
    <Avatar.Root size="sm">
      <Avatar.Fallback name="Athom" />
      <Avatar.Image src="assets/athom.png" />
    </Avatar.Root>
  )
}

function Navigation() {
    return (
        <nav>
            <Box pb="5" >
                <HStack gap="5">
                    <HStack w="100%" gap="3" justifyContent="center">
                        <Athom/>
                        <Heading size="lg">@athom.guy</Heading>
                    </HStack>
                </HStack >
            </Box>
            {/* Navigation content */}
        </nav>
    );
}

export default Navigation;