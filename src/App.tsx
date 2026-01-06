import { Heading, Text, Box, Grid, Button, Card, Badge, Image, Stack, Separator } from "@chakra-ui/react"
import { Link } from "react-router"
function App() {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      
      <Heading size="xl">The Experiment Solvers</Heading>
      <Text fontSize="sm">This directory was developed with the goal of offering a high-quality and efficient website, centralizing all The Experiment Solvers in a single location (currently not yet fully functional on mobile devices). User experience (UX) was prioritized to ensure practicality and ease of interaction, taking into account the most efficient ways of use.</Text>
      <Text fontSize="sm">Aware of the existence of Solvers already made available by other developers, this directory was conceived to centralize them in one place, facilitating access and providing intuitive navigation. Some of the Solvers available here include a feature for sharing their solutions, and the interaction for this functionality was also designed with different user usage patterns in mind.</Text>
      <Text fontSize="sm">Regarding the interface of each Solver, they were developed to be faithful to what is illustrated in The Experiment. However, in some cases, it was necessary to diverge from these standards, as this is a website that prioritizes user experience (UX).</Text>
      <Separator my={4} />
      <Stack>
        <Heading size="xl">Available Solvers and Helpers</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          <Card.Root maxW="sm" gap={0} overflow="hidden">
            <Image
              src="assets/lockdown.png"
              alt="Green double couch with wooden legs"
            />
            <Card.Header pt={4} px={4}>
              <Card.Title>lockdown.solv<br></br> <Badge variant="surface">Helpers</Badge></Card.Title>
            </Card.Header>
            <Card.Footer pt={0} p={4} justifyContent="flex-end">
              <Link to="/lockdown.solv">
                  <Button size="xs" variant="solid">View solver</Button>
              </Link>
            </Card.Footer>
          </Card.Root>
          <Box></Box>
          <Box></Box>
        </Grid>
      </Stack>
    </Box>
  )
}

export default App