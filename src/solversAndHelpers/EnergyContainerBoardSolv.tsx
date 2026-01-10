import { Stack, Heading, HStack, Box, Text, Grid, Editable, IconButton, Avatar, Select, createListCollection, useSelectContext,  } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { LuCheck, LuPencilLine } from "react-icons/lu"

const SelectColorValue = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Array<{ name: string; color: string }>
  const { name } = items[0]
  return (
    <Select.ValueText placeholder="Select member" >
      <HStack fontSize="lg">
        <Avatar.Root bg={items[0].color} shape="rounded" size="2xs">
          <Avatar.Image alt={name} />
          <Avatar.Fallback name={' '} />
        </Avatar.Root>
        {name}
      </HStack>
    </Select.ValueText>
  )
}
const SelectValue = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Array<{ name: string; }>
  const { name } = items[0]
  return (
    <Select.ValueText placeholder="Select member" >
      <HStack fontWeight="bold" fontFamily="monospace" fontSize="lg">
        {name}
      </HStack>
    </Select.ValueText>
  )
}

// const MyArray = [
//     ["R", "G", "B", "G", "G", "B", "B"],
// ]

const colorsEncoding: Record<(string | number), number> = {
  'p4': 1,
  'z2': 2,
  'v5': 3,

  'c': 1,
  'm': 2,
  'y': 3,

  '18': 1,
  '7': 2,
  '2': 3,
}

function decodeBoard(math1: string, math2: string, color1: string, color2: string, letter1: string, letter2: string, number1: string): number[] {
  function evaluateMathExpression(expression: string): number {
    try {
      // Use Function constructor to safely evaluate mathematical expressions
      // This is safer than eval() for mathematical expressions only
      const result = Function('"use strict"; return (' + expression + ')')();
      console.log(result)
      return typeof result === 'number' && (result == 1 || result == 2 || result == 3) ? (result) : 0;
    } catch {
      return 0;
    }
  }

  const math1Value = evaluateMathExpression(math1);
  const math2Value = evaluateMathExpression(math2);
  const color1Value = colorsEncoding[color1];
  const color2Value = colorsEncoding[color2];
  const letter1Value = colorsEncoding[letter1];
  const letter2Value = colorsEncoding[letter2];
  const number1Value = colorsEncoding[number1];

  return [math1Value, math2Value, color1Value, color2Value, letter1Value, letter2Value, number1Value];
}



const Demo = () => {
  const [inputOne, setInputOne] = useState("15 + 8 - 22")
  const [inputTwo, setInputTwo] = useState("(3 * 5 - 5) / 5")
  const [inputThree, setInputThree] = useState("c")
  const [inputFour, setInputFour] = useState("m")
  const [inputFive, setInputFive] = useState("v5")
  const [inputSix, setInputSix] = useState("v5")
  const [inputSeven, setInputSeven] = useState("7")

  const [colorSequence, setColorSequence] = useState(decodeBoard(inputOne, "(3 * 5 - 5) / 5", "C", "M", "z2", "z2", "7"));

  function handleFormChange(field: string, value: string | null) {
    if (!value) return;
    if (field === "inputOne") {
      setInputOne(value)
    }
    if (field === "inputTwo") {
      setInputTwo(value)
    }
    if (field === "inputThree") {
      setInputThree(value)
    }
    if (field === "inputFour") {
      setInputFour(value)
    }
    if (field === "inputFive") {
      setInputFive(value)
    }
    if (field === "inputSix") {
      setInputSix(value)
    }
    if (field === "inputSeven") {
      setInputSeven(value)
    }
  }

  useEffect(() => {
    const result = decodeBoard(inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColorSequence(result)
    console.log('Inputs:', inputOne, inputTwo, 'Result:', result)
  }, [inputOne, inputTwo, inputThree, inputFour, inputFive, inputSix, inputSeven])

  // const colorSequence = decodeBoard("2", "(3 * 5 - 5) / 5", "C", "M", "z2", "z2", "7");
  console.log(colorSequence);
  const colorsIndexes = ['?', 'red', 'lime', 'blue'];
  const colorblindIndexes = ['?', 'R', 'G', 'B'];
  return (
    <form action="">
        <Stack gap="8" w="100%">
            <Box>
                <Heading mb={1}>energy-container-puzzle.solv</Heading>
                <Text color="fg.muted">Use this solver to select the correct energy container colors while for the Timeless ending.</Text>    
            </Box>
            <Box border="3px solid" borderColor="border" borderRadius="md" px='8' py="8" aspectRatio="2/1">
              <Grid templateColumns="repeat(10, 5fr)" gap="8" h="100%">
                <Stack gridArea="1 / 1 / 7 / 5">
                  <Box>
                    <Editable.Root onValueChange={(e) => handleFormChange("inputOne", e.value)} defaultValue={inputOne}>
                      <Editable.Label fontSize="lg" fontFamily="monospace" fontWeight="bold">1)</Editable.Label>
                      <Editable.Preview fontFamily="monospace" fontSize="md" />
                      <Editable.Input fontFamily="monospace" fontSize="md" />
                      <Editable.Control>
                        <Editable.EditTrigger asChild>
                          <IconButton variant="ghost" size="md">
                            <LuPencilLine />
                          </IconButton>
                        </Editable.EditTrigger>
                        <Editable.SubmitTrigger asChild>
                          <IconButton variant="outline" size="md">
                            <LuCheck />
                          </IconButton>
                        </Editable.SubmitTrigger>
                      </Editable.Control>
                    </Editable.Root>
                  </Box>
                  <Box>
                    <Editable.Root onValueChange={(e) => handleFormChange("inputTwo", e.value)} defaultValue={inputTwo}>
                      <Editable.Label fontSize="lg" fontWeight="bold" fontFamily="monospace">2)</Editable.Label>
                      <Editable.Preview fontFamily="monospace" fontSize="md" />
                      <Editable.Input fontFamily="monospace" fontSize="md" />
                      <Editable.Control>
                        <Editable.EditTrigger asChild>
                          <IconButton variant="ghost" size="md">
                            <LuPencilLine />
                          </IconButton>
                        </Editable.EditTrigger>
                        <Editable.SubmitTrigger asChild>
                          <IconButton variant="outline" size="md">
                            <LuCheck />
                          </IconButton>
                        </Editable.SubmitTrigger>
                      </Editable.Control>
                    </Editable.Root>
                  </Box>
                </Stack>
                <Stack gridArea="1 / 5 / 7 / 8">
                  <HStack>
                    <Text fontWeight="bold" fontSize="lg" fontFamily="monospace">3)</Text>
                    <Select.Root
                      onValueChange={(e) => handleFormChange("inputThree", e.value[0])}
                      defaultValue={[inputThree]}
                      collection={colors}
                      size="md"
                      positioning={{ sameWidth: true }}
                    >
                      <Select.HiddenSelect />
                      <Select.Control overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                        <Select.Trigger 
                      borderRadius="lg"px={1} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                          <SelectColorValue/>
                        </Select.Trigger>
                        <Select.IndicatorGroup >
                          <Select.Indicator  />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Select.Positioner >
                        <Select.Content>
                          {colors.items.map((item) => (
                            <Select.Item item={item} key={item.id} justifyContent="flex-start">
                              <Avatar.Root bg={item.color} shape="rounded" size="2xs">
                                <Avatar.Image src='...' alt={item.name} />
                                <Avatar.Fallback name=' ' />
                              </Avatar.Root>
                              {item.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Select.Root>
                  </HStack>
                  
                  <HStack>
                    <Text fontWeight="bold" fontSize="lg" fontFamily="monospace">4)</Text>
                    <Select.Root
                      onValueChange={(e) => handleFormChange("inputFour", e.value[0])}
                      defaultValue={[inputFour]}
                      collection={colors}
                      size="md"
                      positioning={{ sameWidth: true }}
                    >
                      <Select.HiddenSelect />
                      <Select.Control overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                        <Select.Trigger 
                      borderRadius="lg"px={1} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                          <SelectColorValue/>
                        </Select.Trigger>
                        <Select.IndicatorGroup >
                          <Select.Indicator  />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Select.Positioner >
                        <Select.Content>
                          {colors.items.map((item) => (
                            <Select.Item px={1} item={item} key={item.id} justifyContent="flex-start">
                              <Avatar.Root bg={item.color} shape="rounded" size="2xs">
                                <Avatar.Image src='...' alt={item.name} />
                                <Avatar.Fallback name=' ' />
                              </Avatar.Root>
                              {item.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Select.Root>
                  </HStack>
                </Stack>
                <Stack gridArea="1 / 8 / 7 / 11">
                  <HStack>
                    <Text fontWeight="bold" fontSize="lg" fontFamily="monospace">5)</Text>
                    <Select.Root
                      defaultValue={[inputFive]}
                      onValueChange={(e) => handleFormChange("inputFive", e.value[0])}
                      collection={letters}
                      size="md"
                      positioning={{ sameWidth: true }}
                    >
                      <Select.HiddenSelect />
                      <Select.Control overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                        <Select.Trigger 
                      borderRadius="lg"px={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                          <SelectValue/>
                        </Select.Trigger>
                        <Select.IndicatorGroup >
                          <Select.Indicator  />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Select.Positioner >
                        <Select.Content>
                          {letters.items.map((item) => (
                            <Select.Item item={item} key={item.id} justifyContent="flex-start">
                              {item.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Select.Root>
                  </HStack>
                  <HStack>
                    <Text fontWeight="bold" fontSize="lg" fontFamily="monospace">6)</Text>
                    <Select.Root
                      onValueChange={(e) => handleFormChange("inputSix", e.value[0])}
                      defaultValue={[inputSix]}
                      collection={letters}
                      size="md"
                      positioning={{ sameWidth: true }}
                    >
                      <Select.HiddenSelect />
                      <Select.Control overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                        <Select.Trigger 
                      borderRadius="lg"px={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                          <SelectValue/>
                        </Select.Trigger>
                        <Select.IndicatorGroup >
                          <Select.Indicator  />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Select.Positioner >
                        <Select.Content>
                          {letters.items.map((item) => (
                            <Select.Item item={item} key={item.id} justifyContent="flex-start">
                              {item.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Select.Root>
                  </HStack>
                  
                  <HStack>
                    <Text fontWeight="bold" fontSize="lg" fontFamily="monospace">7)</Text>
                    <Select.Root
                      onValueChange={(e) => handleFormChange("inputSeven", e.value[0])}
                      defaultValue={[inputSeven]}
                      collection={number}
                      size="md"
                      positioning={{ sameWidth: true }}
                    >
                      <Select.HiddenSelect />
                      <Select.Control overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                        <Select.Trigger 
                      borderRadius="lg"px={3} overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" textWrap="nowrap">
                          <SelectValue/>
                        </Select.Trigger>
                        <Select.IndicatorGroup >
                          <Select.Indicator  />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Select.Positioner >
                        <Select.Content>
                          {number.items.map((item) => (
                            <Select.Item item={item} key={item.id} justifyContent="flex-start">
                              {item.name}
                              <Select.ItemIndicator />
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Positioner>
                    </Select.Root>
                  </HStack>
                </Stack>
                <HStack gridArea="8 / 1 / 10 / 11" justifyContent="center">
                  {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                      <Box 
                        key={index}
                        h="100%"
                        p={5} 
                        aspectRatio="1/1" 
                        color="black"
                        rounded={10} 
                        borderColor="border" 
                        borderWidth={1}
                        bg={colorsIndexes[colorSequence[index]] || 'transparent'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="3xl"
                        fontWeight="normal"
                      >
                        {colorblindIndexes[colorSequence[index]] || ''}
                      </Box>
                    ))}
                </HStack>
              </Grid>
            </Box>
        </Stack>
    </form>
  )
}

const colors = createListCollection({
  items: [
    {
      name: "Cyan",
      color: "cyan.400",
      id: "c",
    },
    {
      name: "Magenta",
      color: "pink.400",
      id: "m",
    },
    {
      name: "Yellow",
      color: "yellow.400",
      id: "y",
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
})

const letters = createListCollection({
  items: [
    {
      name: "p4",
      id: "p4",
    },
    {
      name: "z2",
      id: "z2",
    },
    {
      name: "v5",
      id: "v5",
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
})

const number = createListCollection({
  items: [
    {
      name: "18",
      id: "18",
    },
    {
      name: "7",
      id: "7",
    },
    {
      name: "2",
      id: "2",
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
})

function EnergyContainerBoardSolv() {
    return (
        <Box w="100%">
        <Demo/>
        </Box>
    );
}

export default EnergyContainerBoardSolv;