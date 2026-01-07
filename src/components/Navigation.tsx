import { Avatar, Box, Heading, HStack } from "@chakra-ui/react"
import { Link } from "react-router";
const Athom = () => {
  return (
    <Avatar.Root size="sm">
      <Avatar.Fallback name="Athom" />
      <Avatar.Image src="/the-experiment-solvers/assets/athom.png" />
    </Avatar.Root>
  )
}

function Navigation() {
    return (
        <nav>
            <Box pb="5" >
              <Link to="/the-experiment-solvers">
                <HStack gap="5">
                    <HStack w="100%" gap="3" justifyContent="center">
                        <Athom/>
                        <Heading size="lg">@athom.guy</Heading>
                    </HStack>
                </HStack >
              </Link>
            </Box>
            {/* Navigation content */}
        </nav>
    );
}

export default Navigation;