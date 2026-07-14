import { Box, Container, Text, Stack, Grid, GridItem, Heading } from "@chakra-ui/react";
import Anchor from "@/components/Anchor"
import settings from "@/app/settings";
export default function Footer () {
  return (
    <>
      <Box mt="auto" bg="rgb(6,6,8)" as="footer">
        <Container my="auto" maxW="5xl">
          <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}>
            <GridItem>
              <Stack>
                <Heading color="fg.muted" size="lg">Directory</Heading>

                <Anchor fontSize="sm" to={`${settings.base}/articles`}>
                  Articles
                </Anchor>

                <Anchor fontSize="sm" to={`${settings.base}/about`}>
                  About
                </Anchor>
                
                <Anchor fontSize="sm" to={`${settings.base}/changelog`}>
                  Changelog
                </Anchor>
                
                <Anchor fontSize="sm" to={`${settings.base}/credits-and-contributors`}>
                  Credits & Contributors
                </Anchor>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack>
                <Heading color="fg.muted" size="lg">Community</Heading>

                <Anchor fontSize="sm" to={`${settings.base}/articles`}>
                  Discord
                </Anchor>

                <Anchor fontSize="sm" to={`${settings.base}/about`}>
                  Roblox
                </Anchor>
                
              </Stack>
            </GridItem>
            <GridItem>
              e
            </GridItem>
          </Grid>
        </Container>
      </Box>
        
      <Box bg="rgb(6,6,8)" py={1}>
        <Container my="auto" maxW="5xl">
          <Text textAlign="center" fontSize="xs" opacity=".2">@athom.guy</Text>
        </Container>
      </Box>
    </>
  )
}