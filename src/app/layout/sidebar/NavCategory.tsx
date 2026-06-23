import { Button, Collapsible, Icon, Stack } from "@chakra-ui/react"
import { ChevronRight } from "lucide-react"

interface NavCategoryProps {
  title: string,
  hidden?: boolean,
  children: React.ReactNode
}
export default function NavCategory({title, hidden, children}:NavCategoryProps) {
  return (
    (!hidden) && <Collapsible.Root  defaultOpen>
      <Collapsible.Trigger
        w="100%"
        asChild
        paddingTop="3"
        paddingBottom="1"
        display="flex"
        cursor="pointer"
        fontSize="sm"
        className="concealable"
        alignItems="center"
      >
        <Button
          justifyContent="start"
          gap={1}
          h="auto"
          px={2.5}
          color="fg.subtle"
          variant="plain"
        >
          {title}
          <Collapsible.Indicator
            transition="transform 0.1s"
            scale={.65}
            _open={{ transform: "rotate(90deg)" }}
          >
            <ChevronRight />
          </Collapsible.Indicator>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap={0}>
          {children}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}