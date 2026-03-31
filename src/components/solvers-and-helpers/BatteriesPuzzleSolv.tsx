import { useState, useEffect } from "react";
import { Heading, Field, Box, Text, HStack, Separator, Stack, Editable, Input } from "@chakra-ui/react";

function BatteriesPuzzleSolv() {
    const [batteryOneOffsetValue, setBatteryOneOffsetValue] = useState("+4");
    const [batteryOneValue, setBatteryOneValue] = useState("16");

    const [batteryTwoOffsetValue, setBatteryTwoOffsetValue] = useState("+3");
    const [batteryTwoValue, setBatteryTwoValue] = useState("37");
    
    const [batteryThreeOffsetValue, setBatteryThreeOffsetValue] = useState("-7");
    const [batteryThreeValue, setBatteryThreeValue] = useState("...");

    useEffect(() => {
        setBatteryThreeValue(String(
            Number(((Number(batteryOneOffsetValue) + Number(batteryOneValue)) + (Number(batteryTwoOffsetValue) + Number(batteryTwoValue))) / 2 - Number(batteryThreeOffsetValue))
        ));
    }, [batteryOneOffsetValue, batteryThreeOffsetValue, batteryTwoValue, batteryTwoOffsetValue, batteryOneValue])
    return (
        <Stack className="app-page" h="100%" gap="8">
            <Box>
                <Heading mb={1}>batteries-puzzle.solv</Heading>
                <Text color="fg.muted">Use this solver to get the correct value of BATTERY 3 at Laboratory #9.</Text>
            </Box>
            <HStack flexDirection={{base: 'column', sm: 'row'}} gap={{base: 8, sm: 0}} fontFamily="monospace">
                <Stack gap={1} alignItems="center" w="100%" flexGrow={1} p="2">
                    <Heading mb={0} textAlign="center" size="sm">Battery 1</Heading>
                    <Editable.Root mx="auto" onValueChange={(e) => setBatteryOneOffsetValue(e.value)} defaultValue={batteryOneOffsetValue} w="40px"  fontSize={20} textAlign='center'>
                        <Editable.Preview h="40px" w="40px"  justifyContent={'center'}/>
                        <Editable.Input h="40px" w="40px"  textAlign='center' />
                    </Editable.Root>
                    <Input textAlign="center" onChange={(e) => setBatteryOneValue(e.target.value)} fontSize="30px" p={0} w="5rem" value={batteryOneValue} size="xl" />
                </Stack>
                <Separator className="hide-mobile" h="100%" mx={4} orientation="vertical" />
                <Stack gap={1} alignItems="center" w="100%" flexGrow={1} p="2">
                    <Heading mb={0} textAlign="center" size="sm">Battery 2</Heading>
                    <Editable.Root onValueChange={(e) => setBatteryTwoOffsetValue(e.value)} defaultValue={batteryTwoOffsetValue} w="40px" fontSize={20} textAlign='center'>
                        <Editable.Preview h="40px" w="40px"  justifyContent={'center'}/>
                        <Editable.Input h="40px" w="40px"  textAlign='center' />
                    </Editable.Root>
                    <Field.Root w="5rem" invalid={batteryTwoValue === ""}>
                        <Input textAlign="center" onChange={(e) => setBatteryTwoValue(e.target.value)} fontSize="30px" p={0} w="5rem" value={batteryTwoValue} size="xl" />
                    </Field.Root>
                </Stack>
                <Separator className="hide-mobile" h="100%" mx={4} orientation="vertical" />
                <Stack gap={1} alignItems="center" w="100%" flexGrow={1} p="2">
                    <Heading mb={0} textAlign="center" size="sm">Battery 3</Heading>
                    <Editable.Root mx="auto" onValueChange={(e) => setBatteryThreeOffsetValue(e.value)} defaultValue={batteryThreeOffsetValue} w="40px"  fontSize={20} textAlign='center'>
                        <Editable.Preview h="40px" w="40px"  justifyContent={'center'}/>
                        <Editable.Input h="40px" w="40px"  textAlign='center' />
                    </Editable.Root>
                    <Field.Root w="5rem">
                        <Input variant="subtle" readOnly={true} textAlign="center" fontSize="30px" p={0} w="5rem" value={batteryThreeValue} size="xl" />
                    </Field.Root>
                </Stack>
            </HStack>
        </Stack>
    )
}

export default BatteriesPuzzleSolv;