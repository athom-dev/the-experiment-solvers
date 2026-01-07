import { Heading, Alert, Text, Box, Grid, List, Button, Card, Badge, Image, Stack, Separator } from "@chakra-ui/react"
import { Link } from "react-router"

const GreetingsText = () => (
  <>
      <Heading size="xl">The Experiment Solvers</Heading>
      <Text fontSize="sm">This directory was developed with the goal of offering a high-quality and efficient website, centralizing all The Experiment Solvers in a single location (currently not yet fully functional on mobile devices). User experience (UX) was prioritized to ensure practicality and ease of interaction, taking into account the most efficient ways of use.</Text>
      <Text fontSize="sm">Aware of the existence of Solvers already made available by other developers, this directory was conceived to centralize them in one place, facilitating access and providing intuitive navigation. </Text>
      <Text fontSize="sm">Regarding the interface of each Solver, they were developed to be faithful to what is illustrated in The Experiment. However, in some cases, it was necessary to diverge from these standards, as this is a website that prioritizes user experience (UX).</Text>
  </>
)

const Changelog = () => (
  <>
    
      <Heading size="xl">7th January 2026 — Changelog <Badge>v1.0</Badge></Heading>
      <Text fontSize="sm">This is the first changelog of The Experiment Solvers. These are the recent additions and changes to the directory:</Text>
      <List.Root ps={6}>
        <List.Item fontSize="sm">New solver <strong>energy-container-puzzle.solv</strong> available;</List.Item>
        <List.Item fontSize="sm">New solver available:
          <List.Root ps="5">
            <List.Item><Text display={'inline'} color="fg.muted">energy-container-puzzle.solv</Text></List.Item>
          </List.Root>
        </List.Item>
        <List.Item fontSize="sm">Added this section (changelog) to the <strong>initial page</strong>;</List.Item>
        <List.Item fontSize="sm">Added a new items to the <strong>Solvers and Helpers</strong> list:
          <List.Root ps="5">
            <List.Item><Text display={'inline'} color="fg.muted">the-unknown-puzzle.solv</Text></List.Item>
            <List.Item><Text display={'inline'} color="fg.muted">letter-to-number.solv</Text></List.Item>
          </List.Root>
        </List.Item>
        
      </List.Root>
  </>
)

const SolversAndHelpers = () => (
  <>
      <Stack>
        <Heading size="xl">Available Solvers and Helpers</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gapX="6">
          <Card.Root maxW="sm" gap={0} overflow="hidden">
            <Image
              aspectRatio={16 / 9}
              objectFit="cover"
              src="/the-experiment-solvers/assets/lockdown.png"
            />
            <Card.Header pt={4} px={4}>
              <Card.Title textOverflow="ellipsis" whiteSpace="nowrap" width="100%" overflow="hidden"title="lockdown.solv">lockdown.solv<br></br> <Badge variant="surface">Helpers</Badge></Card.Title>
            </Card.Header>
            <Card.Footer pt={0} p={4} justifyContent="flex-end">
              <Link to="/the-experiment-solvers/lockdown.solv">
                  <Button size="xs" variant="solid">View solver</Button>
              </Link>
            </Card.Footer>
          </Card.Root>
          <Card.Root maxW="sm" gap={0} overflow="hidden">
            <Image
              aspectRatio={16 / 9}
              objectFit="cover"
              src="/the-experiment-solvers/assets/lab9.png"
            />
            <Card.Header pt={4} px={4}>
              <Card.Title textOverflow="ellipsis" whiteSpace="nowrap" width="100%" overflow="hidden"title="energy-container-puzzle.solv">energy-container-puzzle.solv<br></br> <Badge variant="surface">Solvers</Badge></Card.Title>
            </Card.Header>
            <Card.Footer pt={0} p={4} justifyContent="flex-end">
              <Link to="/the-experiment-solvers/energy-container-puzzle.solv">
                  <Button size="xs" variant="solid">View solver</Button>
              </Link>
            </Card.Footer>
          </Card.Root>
          <Box></Box>
          <Box></Box>
        </Grid>
      </Stack>
  </>
)

function App() {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      
      <Alert.Root status="info">
        <Alert.Indicator />
        <Alert.Title>
          Website under development — more solvers and helpers coming soon!
        </Alert.Title>
      </Alert.Root>



      <GreetingsText/>
      <Separator my={4} />

      <SolversAndHelpers/>

      <Separator my={4} />
      <Changelog/>
    </Box>
  )
}

export default App