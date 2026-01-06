import { Heading, Text } from "@chakra-ui/react";

function Error404() {
  return (
    <>
      <Heading>Error: Page not found</Heading>
      <Text>The requested page could not be found. Please check the URL and try again.</Text>
    </>
  )
}

export default Error404