import { Button, ButtonGroup, EmptyState, VStack  } from "@chakra-ui/react";
import { GoAlert } from "react-icons/go";
import { Link } from "react-router";

function Error404() {
  // return (
  //   <>
  //     <Heading>Error: Page not found</Heading>
  //     <Text>The requested page could not be found. Please check the URL and try again.</Text>
  //   </>
  // )
  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>
          <GoAlert />
        </EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>Error: Page not found</EmptyState.Title>
          <EmptyState.Description>
            The requested page could not be found. Please check the URL and try again.
          </EmptyState.Description>
        </VStack>
        <ButtonGroup>
          <Link to="/the-experiment-solvers">
            <Button size="xs">Initial page</Button>
          </Link>
          {/* <Button size="xs" variant="outline">Is this a mistake?</Button> */}
        </ButtonGroup>
      </EmptyState.Content>
    </EmptyState.Root>
  )
}

export default Error404