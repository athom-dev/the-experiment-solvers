import { Heading, Stack, HStack, Box, Editable, Text, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { LuCheck, LuPencilLine } from "react-icons/lu"

function LetterToNumberSolv() {
    const [inputValue, setInputValue] = useState("ZPLY");
    const [resultValue, setResultValue] = useState("1982");

    const LettersAndNumbers: Record<string, string> = {
        "🎄": "💢",
        "🐙": "🍣",
        "🥚": "🐢",
        "🚰": "🐈",
        "🤖": "🧱",
        "🎀": "⏳",
        "👁": "🔇",
        "🪐": "💢💢💢",
        "X": "0",
        "Z": "1",
        "Y": "2",
        "V": "3",
        "W": "4",
        "N": "5",
        "D": "6",
        "M": "7",
        "L": "8",
        "P": "9",
        "1": "Z",
        "2": "Y",
        "3": "V",
        "4": "W",
        "5": "N",
        "6": "D",
        "7": "M",
        "8": "L",
        "9": "P",
        "0": "X"
    }

    const handleInputChange = (value: string) => {
        let result = "";
        setInputValue(value);
        for (const char of value) {
            if (LettersAndNumbers[char]) {
                result += LettersAndNumbers[char];
            } else {
                result += char; // Keep the character unchanged if not found
            }
            setResultValue(result);
            console.log(value);
        }
    }

    return (
        <Stack gap="8">
            <Box>
                <Heading mb={1}>letter-to-number.solv</Heading>
                <Text color="fg.muted">Use this helper to decode encrypted keys without needing to access the Control Room.</Text>    
            </Box>
            <Editable.Root onValueChange={(e) => handleInputChange(e.value)} defaultValue={inputValue}>
                <Editable.Label fontSize="lg" fontFamily="monospace" fontWeight="bold">Decode:</Editable.Label>
                <Editable.Preview fontFamily="monospace" fontSize="lg" />
                <Editable.Input fontFamily="monospace" fontSize="lg" />
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
            <HStack>
                <Text fontSize="lg" fontFamily="monospace" fontWeight="bold">Result:</Text>
                <Text fontSize="lg" fontFamily="monospace">{resultValue}</Text>
            </HStack>
        </Stack>
    )
}

export default LetterToNumberSolv;