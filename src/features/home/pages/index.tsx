
import settings from "@/app/settings";
import { Button, Text, Heading, HStack, Stack, Image, Grid, GridItem } from "@chakra-ui/react";
import Section from "@/components/layout/Section"
import { Link } from "react-router"

export default function HomePage() {
  const Card = ({image, href, title, description}:{image: string, href: string, title: string, description: string}) => {
    return (
      <GridItem w="100%" rounded="lg" border="2px solid" borderColor="border" p={4}>
        <Stack h="100%">
          <HStack>
            <Image rounded="full" h="100px" src={image} />
          </HStack>
          <Heading>{title}</Heading>
          <Text pb={2} lineClamp="4" color="fg.muted" fontSize="xs">{description}</Text>
          <Button asChild mt="auto" variant="subtle">
            <Link to={href}>View solver</Link>
          </Button>
        </Stack>
      </GridItem>
    )
  }
  return (
    <>
      <Section>
        <Heading>Relevant Solvers</Heading>
        <Grid gap={4} gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}>
          <Card 
            title="Timeless: Math Puzzle Solver" 
            image={`${settings.base}/assets/timeless.png`}
            description="With this puzzle solution, you can solve the Math puzzle in less than 2 minutes."
            href={`${settings.base}/timeless`}
          />
          <Card 
            title="From The Unknown" 
            image={`${settings.base}/assets/from-the-unknown.png`}
            description="This solves the unkwown signal foundable at Service Shaft."
            href={`${settings.base}/timeless`}
          />
          <Card 
            title="Timeless: Math Puzzle Solver" 
            image={`${settings.base}/assets/timeless.png`}
            description="With this puzzle solution, you can solve the Math puzzle in less than 2 minutes."
            href={`${settings.base}/timeless`}
          />
        </Grid>
      </Section>

          
      <Section>
        <Heading>What is this website? </Heading>
        <Text color="fg.muted" fontSize="sm">This directory was developed with the goal of offering a high-quality and efficient website, centralizing all The Experiment content in a single location, which refers to puzzle solutions, guides to difficult achievements, images of the game and much more! Aware of the existence of The Experiment Wiki available on Fandom, this website is conceived to replace the Fandom usage and provide a proper user experience and interface. Most of the pages and interfaces were designed to be faithful to what it is illustrated in The Experiment. However, in some cases, it was necessary to diverge from these standards, as this is a website that prioritizes user experience (UX).</Text>

        <Text color="fg.muted" fontSize="sm">Currently in July, 2026, most of the website is still in development — mainly the guides, achievement guides and stuff. But don't worry, this website is reiciving daily attention by developers and writers so it can finally have all the needed content.</Text>
      </Section>
    </>
  )
}