import { Prose } from "@/components/ui/prose"
import { GridGenerator, updateItem, obtainItem } from "@/utils/GridGenerator"
import { MarkdownViewer } from "@/utils/Markdown"
import { Box, Button, HStack, Stack } from "@chakra-ui/react"
import { useState } from "react"

export default function TimelessGridSolver() {
  const [debugMode, setDebugMode] = useState(true)
  const Item = ({...props}) => {  
    const [value, setValue] = useState(obtainItem(props.row, props.col))

    function updateValue (value: number) {
      updateItem(props.row, props.col, value)
      setValue(value)
    }
    return(
        <Button m={0} fontSize="2rem" fontFamily="monospace" colorPalette={(value == 3 ? "red" : (value == 4 ? "yellow" : (value == 5 ? "blue": "gray")))} borderWidth={0} p={0} variant="plain" bg="white" rounded="0" h="100%" w="100%" {...props} onClick={() => updateValue(
          value == 0 ? 1 :
          (value == 1 ? 2 :
          (value == 2 ? 3 :
          (value == 3 ? 4 : 
          (value == 4 ? 5 : 0))))
          )}>
          {
            (value == 0) && <Box opacity=".1">{debugMode && value}</Box> ||
            (value == 1) && <Box>{value}</Box> ||
            (value == 2) && <Box>+</Box> ||
            <Box h="75%" w="75%" border="3px solid var(--chakra-colors-color-palette-fg)" rounded="full" bg="colorPalette.solid" display="flex" alignItems="center"justifyContent="center">{debugMode && value}</Box>
          }
        </Button>
    )
  }

  return (
    <Box className="container-fluid">
      <HStack h="100%" alignItems="start">
        <Prose maxW="sm" ms="auto">
          <MarkdownViewer markdownContent={`
### Timeless: Grid
This puzzle solution is designed to give you the correct pattern to be inserted on the first machine of the Timeless room (close to the computer).

To get the correct result, make sure to mirror the same pattern shown in-game.
          `} />
        </Prose>
        
        <GridGenerator.Root aspectRatio="1/1" me="auto" w="400px" bg="gray.200" gap="2px" p="3px" x={8} y={8}>
          <GridGenerator.Repeat item={Item}/>
        </GridGenerator.Root>
      </HStack>
    </Box>
  )
}