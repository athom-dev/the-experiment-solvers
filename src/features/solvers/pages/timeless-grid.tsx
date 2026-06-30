import { Prose } from "@/components/ui/prose"
import { GridGenerator, updateItem, obtainItem } from "@/utils/GridGenerator"
import { MarkdownViewer } from "@/utils/Markdown"
import { Box, Button, HStack, RadioCard, Stack } from "@chakra-ui/react"
import { memo, useEffect, useMemo, useRef, useState } from "react"

const variations = [
  <Box opacity=".1"></Box>,
  <Box>1</Box>,
  <Box>+</Box>,
  <Box>X</Box>,
  <Box h="75%" w="75%" border="3px solid var(--chakra-colors-red-fg)" rounded="full" bg="red.solid"></Box>,
  <Box h="75%" w="75%" border="3px solid var(--chakra-colors-yellow-fg)" rounded="full" bg="yellow.solid"></Box>,
  <Box h="75%" w="75%" border="3px solid var(--chakra-colors-blue-fg)" rounded="full" bg="blue.solid"></Box>,
]

const solverAssets = [
  <Box h="25%" w="100%" bg="yellow.solid"></Box>,
  <Box h="100%" w="25%" bg="yellow.solid"></Box>,
]

export default function TimelessGridSolver() {
  const [debugMode, setDebugMode] = useState(false)
  const [selectedValue, setSelectedValue] = useState(0)
  const selectedValueRef = useRef(selectedValue)

  useEffect(() => {
    selectedValueRef.current = selectedValue
  }, [selectedValue])
  const ItemOverlay = ({ children }: { children: React.ReactNode }) => {
    return (
      <Box zIndex={-1} position="absolute" top={0} left={0} w="full" h="full" display='flex' alignItems="center" justifyContent="center">
        {children}
      </Box>
    )
  }
  const Item = useMemo(
    () =>
      memo(({ row, col, ...props }: { row: number; col: number;[key: string]: any }) => {
        const [value, setValue] = useState(obtainItem(row, col))
        const result = [
          [4, 6],
        ]

        function updateValue(value: number) {
          updateItem(row, col, value)
          setValue(value)
        }

        return (
          <Button
            m={0}
            fontSize="2rem"
            fontFamily="monospace"
            colorPalette={
              value == 4 ? "red" : value == 5 ? "yellow" : value == 6 ? "blue" : "gray"
            }
            borderWidth={0}
            p={0}
            variant="plain"
            bg="white"
            rounded="0"
            h="100%"
            w="100%"
            {...props}
            onClick={() => {
              updateValue(selectedValueRef.current)
            }}
          >
            {row == result[0][0] &&
              <ItemOverlay>
                {solverAssets[0]}
              </ItemOverlay>
            }

            {col == result[0][1] &&
              <ItemOverlay>
                {solverAssets[1]}
              </ItemOverlay>
            }
            {variations[value]}
          </Button>
        )
      }),
    []
  )

  const Toolbar = () => {
    return (
      <RadioCard.Root
        orientation="horizontal"
        align="center"
        justify="center"
        maxW="lg"
        defaultValue={`${selectedValue}`}
        onValueChange={(e) => {
          setSelectedValue(Number(e.value ?? "0"))
        }}
      >
        <RadioCard.Label>Options</RadioCard.Label>
        <HStack align="stretch">
          {variations.map((item, index) => (
            <RadioCard.Item w="50px" h="50px" key={index} value={`${index}`}>
              <RadioCard.ItemHiddenInput />
              <RadioCard.ItemControl p={0} fontFamily="monospace">
                <Box
                  fontSize="2rem"
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  p={0}
                  w="full"
                  h="full"
                  color="fg.subtle"
                >
                  {item}
                </Box>
              </RadioCard.ItemControl>
            </RadioCard.Item>
          ))}
        </HStack>
      </RadioCard.Root>
    )
  }

  const grid = useMemo(
    () => (
      <Box w="400px" aspectRatio="1/1" position="relative">
        <GridGenerator.Root w="100%" h="100%" labelGrid bg="gray.200" gap="2px" p="3px" x={8} y={8}>
          <GridGenerator.Repeat item={Item} />
        </GridGenerator.Root>
      </Box>
    ),
    [Item]
  )

  return (
    <Box className="container-fluid">
      <HStack h="100%" justifyContent="center" alignItems="start">
        <Prose maxW="sm">
          <MarkdownViewer
            markdownContent={`
  ### Timeless: Grid
  This puzzle solution is designed to give you the correct pattern to be inserted on the first machine of the Timeless room (close to the computer).

  To get the correct result, make sure to mirror the same pattern shown in-game.
            `}
          />
        </Prose>

        <Stack>
          {grid}
          <Toolbar />
        </Stack>
      </HStack>
    </Box>
  )
}
