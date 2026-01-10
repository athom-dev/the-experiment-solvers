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
    
      <Heading size="xl">10th January 2026 — Changelog <Badge>v2.0</Badge></Heading>
      <Text fontSize="sm">These are the recent additions and changes to the directory:</Text>
      <List.Root ps={6}>
        <List.Item fontSize="sm">New solver <strong>unknown-signal-puzzle.solv</strong> available;</List.Item>
        <List.Item fontSize="sm">New helper <strong>letter-to-number.solv</strong> available;</List.Item>
      </List.Root>
  </>
)

const SolverHelperItem = (props: {title: string, link: string, image: string, tag: string}) => (
  <>
    <Card.Root maxW="sm" gap={0} overflow="hidden">
        <Image
          aspectRatio={16 / 9}
          objectFit="cover"
          src={"/the-experiment-solvers/assets/"+props.image}
        />
        <Card.Header pt={4} px={4}>
          <Card.Title textOverflow="ellipsis" whiteSpace="nowrap" width="100%" overflow="hidden"title="{props.title}">{props.title}<br></br> <Badge variant="surface">{props.tag}</Badge></Card.Title>
        </Card.Header>
        <Card.Footer pt={0} p={4} justifyContent="flex-end">
          <Link to={"/the-experiment-solvers/"+props.link}>
              <Button size="xs" variant="solid">View solver</Button>
          </Link>
        </Card.Footer>
      </Card.Root>
  </>
)

const SolversAndHelpers = () => (
  <>
      <Stack>
        <Heading size="xl">Available Solvers and Helpers</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gapY="6" gapX="6">
          <SolverHelperItem title="lockdown.solv" link="lockdown.solv" image="lockdown.png" tag="Helpers"/>
          <SolverHelperItem title="energy-container-puzzle.solv" link="energy-container-puzzle.solv" image="lab9.png" tag="Solvers"/>
          <SolverHelperItem title="letter-to-number.solv" link="letter-to-number.solv" image="control-room.png" tag="Helpers"/>
          <SolverHelperItem title="unknown-signal-puzzle.solv" link="unknown-signal-puzzle.solv" image="control-room.png" tag="Solvers"/>
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