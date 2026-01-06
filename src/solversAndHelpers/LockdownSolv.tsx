import { RadioCard, Stack, Heading, HStack, Box, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const keys: Record<string, string> = {
  '1KL': 'OOCWP',
  '1KS': 'CCGPO',
  '1ST': 'CWGOO',
  '1PS': 'CCCGO',
  '1TS': 'WPOCG',
  '1YT': 'GOPCW',

  '2KL': 'PGOWC',
  '2KS': 'OOOOO',
  '2PS': 'OPOWW',
  '2ST': 'OPGWC',
  '2TS': 'CCPCO',
  '2YT': 'PCPPW', 

  '3KL': 'GGGPC',
  '3KS': 'GOPPC',
  '3PS': 'WWCOP',
  '3ST': 'WWOOO',
  '3TS': 'GWPGG',
  '3YT': 'GOWWC',
  
  '4KL': 'PWOCO',
  '4KS': 'POOPC',
  '4PS': 'COPGW',
  '4ST': 'POGOP',
  '4TS': 'OPGCO',
  '4YT': 'CCGCC',

  '5KL': 'GPWWC',
  '5KS': 'GOGPC',
  '5PS': 'WGPOC',
  '5ST': 'GGWOO',
  '5TS': 'GOOOC',
  '5YT': 'OCOPG',
}

const colors: Record<string, string> = {
  'C': '#00FFFF', // Cyan
  'O': '#EEA500', // Orange
  'P': '#FF00FF', // Pink
  'G': '#00AA00', // Green
  'W': '#CCCCCC', // White
}

const colorIndexes: Record<string, number> = {
  'C': 1,
  'O': 2,
  'P': 3,
  'G': 4,
  'W': 5
}

function convertKeyToColorSequence(key: string): [string[], number[]] | null {
  const sequence = keys[key];
  if (!sequence) {
    return null; // Invalid key
  }
  return [
    sequence.split('').map(color => colors[color]),
    sequence.split('').map(color => colorIndexes[color])
  ];
}

const Demo = () => {
  const [selectedNumber, setSelectedNumber] = useState("1")
  const [selectedLetter, setSelectedLetter] = useState("KL")
  const [colorSequence, setColorSequence] = useState<[string[], number[]] | null>(null)

  const handleFormChange = (field: string, value: string | null) => {
    if (!value) return;
    if (field === "number") {
      setSelectedNumber(value)
    } else if (field === "letter") {
      setSelectedLetter(value)
    }
  }

  useEffect(() => {
    const key = selectedNumber + selectedLetter
    const result = convertKeyToColorSequence(key)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColorSequence(result)
    console.log('Key:', key, 'Result:', result)
  }, [selectedNumber, selectedLetter])

  return (
    <form action="">
        <Stack gap="8" w="100%">
            <Box>
                <Heading  mb={1}>Trials: Lockdown Color Helper</Heading>
                <Text color="fg.muted">Use this helper to select the correct lockdown colors while in the trials.</Text>    
            </Box>
            <RadioCard.Root 
              value={selectedNumber} 
              onValueChange={(e) => handleFormChange("number", e.value)}
              w="100%"
            >
                <RadioCard.Label>Number</RadioCard.Label>
                <HStack align="stretch" w="100%">
                    {numberItems.map((item) => (
                    <RadioCard.Item key={item.value} value={item.value}>
                        <RadioCard.ItemHiddenInput />
                            <RadioCard.ItemControl>
                                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                            <RadioCard.ItemIndicator />
                        </RadioCard.ItemControl>
                    </RadioCard.Item>
                    ))}
                </HStack>
            </RadioCard.Root>
            <RadioCard.Root 
              value={selectedLetter} 
              onValueChange={(e) => handleFormChange("letter", e.value)}
              w="100%"
            >
                <RadioCard.Label>Letters</RadioCard.Label>
                <HStack align="stretch" w="100%">
                    {letterItems.map((item) => (
                    <RadioCard.Item key={item.value} value={item.value}>
                        <RadioCard.ItemHiddenInput />
                            <RadioCard.ItemControl>
                                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                            <RadioCard.ItemIndicator />
                        </RadioCard.ItemControl>
                    </RadioCard.Item>
                    ))}
                </HStack>
            </RadioCard.Root>
            <Box>
                <Heading mb={1}>Result</Heading>
                <HStack align="stretch" w="100%">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <Box 
                        key={index}
                        w="100%" 
                        p={5} 
                        aspectRatio="1/1" 
                        color="black"
                        rounded={10} 
                        borderColor="border" 
                        borderWidth={1}
                        bg={colorSequence?.[0][index] || 'transparent'}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="5xl"
                        fontWeight="normal"
                      >
                        {colorSequence?.[1][index] || ''}
                      </Box>
                    ))}
                </HStack>
            </Box>
        </Stack>
    </form>
  )
}

const numberItems = [
  { value: "1", title: "1" },
  { value: "2", title: "2" },
  { value: "3", title: "3" },
  { value: "4", title: "4" },
  { value: "5", title: "5" },
]
const letterItems = [
  { value: "KL", title: "KL" },
  { value: "KS", title: "KS" },
  { value: "PS", title: "PS" },
  { value: "ST", title: "ST" },
  { value: "TS", title: "TS" },
  { value: "YT", title: "YT" },
]

function LockdownSolv() {
    return (
        <Box w="100%">
        <Demo/>
        </Box>
    );
}

export default LockdownSolv;