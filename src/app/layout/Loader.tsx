import { Box, Center, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface AppLoaderProps {
  isLoading: boolean;
}

export default function AppLoader({ isLoading }: AppLoaderProps) {
  const [isBooting, setIsBooting] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 250);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const shouldShow = isLoading || isBooting;

    if (shouldShow) {
      setIsVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setIsVisible(false), 180);
    return () => window.clearTimeout(timer);
  }, [isLoading, isBooting]);

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      bg="blackAlpha.700"
      opacity={isLoading || isBooting ? 1 : 0}
      transition="opacity 180ms ease"
      pointerEvents="all"
    >
      <Center h="100%">
        <Stack align="center" gap={4}>
          <Spinner animationDuration=".5s" size="xl"/>
        </Stack>
      </Center>
    </Box>
  );
}
