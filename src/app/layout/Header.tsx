import settings from "@/app/settings" 
import { Box, Container, HStack, Icon, IconButton, Stack, Input, Button, createIcon } from "@chakra-ui/react";
import { Search, TextAlignJustify } from "lucide-react";
import { Link } from "react-router";
const Discord = createIcon(
  {
    displayName: "DiscordIcon",
    path: (
      <>
        <svg version="1.1" x="0" y="0" viewBox="0 0 16 16">
          <path d="M12.85 3.55C11.95 3.15 11 2.85 10 2.65l-0.05 0c-0.1 0.2 -0.25 0.5 -0.35 0.75 -1.1 -0.15 -2.15 -0.15 -3.2 0 -0.1 -0.25 -0.25 -0.5 -0.35 -0.75l-0.05 0c-1 0.15 -1.95 0.45 -2.85 0.9C1.35 6.25 0.85 8.9 1.1 11.5l0 0.05c1.2 0.9 2.35 1.4 3.5 1.75l0.05 0c0.25 -0.35 0.5 -0.75 0.7 -1.15l0 -0.05c-0.4 -0.15 -0.75 -0.3 -1.1 -0.5 -0.05 0 -0.05 -0.05 0 -0.05 0.05 -0.05 0.15 -0.1 0.2 -0.15l0.05 0c2.3 1.05 4.75 1.05 7.05 0l0.05 0c0.05 0.05 0.15 0.1 0.2 0.15 0.05 0 0 0.05 0 0.05 -0.35 0.2 -0.7 0.4 -1.1 0.5 0 0 -0.05 0.05 0 0.05 0.2 0.4 0.45 0.8 0.7 1.15l0.05 0c1.15 -0.35 2.3 -0.9 3.5 -1.75l0 -0.05c0.3 -3 -0.5 -5.6 -2.1 -7.95zM5.7 9.95c-0.7 0 -1.25 -0.65 -1.25 -1.4s0.55 -1.4 1.25 -1.4 1.25 0.65 1.25 1.4c0 0.75 -0.55 1.4 -1.25 1.4zm4.65 0c-0.7 0 -1.25 -0.65 -1.25 -1.4s0.55 -1.4 1.25 -1.4 1.25 0.65 1.25 1.4c0 0.75 -0.55 1.4 -1.25 1.4z" fill="currentColor" stroke-width="0.5"></path>
        </svg>
      </>
    )
  }
)

const Roblox = createIcon(
  {
    displayName: "RobloxIcon",
    path: (
      <>
        <svg role="img" viewBox="0 0 24 24">
          <path d="M18.926 23.998 0 18.892 5.075 0.002 24 5.108ZM15.348 10.09l-5.282 -1.453 -1.414 5.273 5.282 1.453z" fill="currentColor" stroke-width="1"></path>
        </svg>
      </>
    )
  }
)

export default function Header() {
  return (
    <>
    <Box className="app-nav">
      <Container maxW="5xl">
        <HStack py={2}>
          <Button asChild color='fg.muted' _hover={{color: "fg"}} px={0} gap={3} variant="plain">
            <Link to={`${settings.base}`}>
              <Icon>
                <TextAlignJustify />
              </Icon>
              The Experiment Directory
            </Link>
          </Button>
          <HStack gap={1} ms="auto">
            <Button asChild color="fg.muted" _hover={{color: "fg"}} px={0} variant="plain">
              <Link target="_blank" to={`https://discord.com/invite/AF2JRtJnTm`}>
                <Icon size="lg">
                  <Discord />
                </Icon>
              </Link>
            </Button>
            <Button asChild color="fg.muted" _hover={{color: "fg"}} px={0} variant="plain">
              <Link target="_blank" to={`https://www.roblox.com/games/3682000105/The-Experiment`}>
                <Icon>
                  <Roblox />
                </Icon>
              </Link>
            </Button>
          </HStack>
        </HStack> 
      </Container>
    </Box>
    
      <HStack pt="32" pb="12" as="header">
        <Container my="auto" maxW="3xl">
            <Stack gap={16}>
              <img src={`${settings.base}/assets/img/the-experiment-directory.svg`} alt="The Experiment Directory" color="white" />
              <HStack>
                <Input variant="subtle" placeholder="Search for a solver..."></Input>
                <IconButton variant="subtle">
                  <Icon>
                    <Search />
                  </Icon>
                </IconButton>
              </HStack>
            </Stack>
        </Container>
      </HStack>
    </>
  )
}