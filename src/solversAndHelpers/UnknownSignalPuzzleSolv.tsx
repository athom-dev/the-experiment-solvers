import { Box, Stack, Heading, Text, Grid, GridItem, AbsoluteCenter, Editable } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function UnknownSignalPuzzleSolv () {
    const solverWidth = "2px";
    const solverColor = "fg.muted";

    const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const [topLeftInputValue, setTopLeftInputValue] = useState("11");
    const [topRightInputValue, setTopRightInputValue] = useState("3");
    const [bottomLeftInputValue, setBottomLeftInputValue] = useState("12");
    const [bottomRightInputValue, setBottomRightInputValue] = useState("4");
    const [veryTopInputValue, setVeryTopInputValue] = useState("-5");
    const [middleInputValue, setMiddleInputValue] = useState("30");

    function solve(TL: number, TR: number, BL: number, BR: number, VT: number, M: number) {
        const x1 = TL - TR + VT;
        const x2 = Math.abs(x1 - TR);
        const x3 = Math.abs(x2 - BR);
        const x4 = Math.abs(x3 - BL);
        const numberSequence = x1.toString() + x2.toString() + x3.toString() + x4.toString();
        const letter = M - (x1 + x2 + x3 + x4);
        return [numberSequence, letter.toString()]
    }

    const [resultNumberSequence, resultLetter] = useMemo(() => {
        const result = solve(
            parseInt(topLeftInputValue), 
            parseInt(topRightInputValue), 
            parseInt(bottomLeftInputValue), 
            parseInt(bottomRightInputValue), 
            parseInt(veryTopInputValue), 
            parseInt(middleInputValue)
        );
        return [result[0], alphabet[parseInt(result[1])]];
    }, [topLeftInputValue, topRightInputValue, bottomLeftInputValue, bottomRightInputValue, veryTopInputValue, middleInputValue, alphabet]);

    return (
        <Stack gap='8'>
            <Box>
                <Heading mb={1}>unknown-signal-puzzle.solv</Heading>
                <Text color="fg.muted">Use this solver to get the correct input for the Unknown Signal badge.</Text>
            </Box>
            
            <Grid mx="auto" templateColumns="repeat(3, 1fr)" w="100%" maxW="300px" gap="0" fontFamily='monospace'>
                <GridItem colSpan={1}>
                    <Box position='relative'>
                        <Box rotate={'150deg'} position={'absolute'} top='5' right={5}>
                            <FaArrowLeftLong size={20} />
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} textAlign='center'>
                    <Editable.Root onValueChange={(e) => setVeryTopInputValue(e.value)} defaultValue={veryTopInputValue} w="40px"  fontSize={30} textAlign='center'>
                        <Editable.Preview w="40px"  justifyContent={'center'}/>
                        <Editable.Input  w="40px"  textAlign='center' />
                    </Editable.Root>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box position='relative'>
                        <Box rotate={'30deg'} position={'absolute'} top='5' left={4}>
                            <FaArrowLeftLong size={20} />
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} borderRightWidth={solverWidth} w="100%">
                        <AbsoluteCenter textAlign={'center'}>
                            <Editable.Root onValueChange={(e) => setTopLeftInputValue(e.value)} defaultValue={topLeftInputValue} w="40px"  fontSize={30} textAlign='center'>
                                <Editable.Preview w="40px"  justifyContent={'center'}/>
                                <Editable.Input  w="40px"  textAlign='center' />
                            </Editable.Root>
                        </AbsoluteCenter>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} w="100%">
                        <AbsoluteCenter>
                            <Text fontSize={30}>)-(</Text>
                        </AbsoluteCenter>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} borderLeftWidth={solverWidth} w="100%">
                        <AbsoluteCenter textAlign={'center'}>
                            <Editable.Root onValueChange={(e) => setTopRightInputValue(e.value)} defaultValue={topRightInputValue} w="40px"  fontSize={30} textAlign='center'>
                                <Editable.Preview w="40px"  justifyContent={'center'}/>
                                <Editable.Input  w="40px"  textAlign='center' />
                            </Editable.Root>
                        </AbsoluteCenter>
                    </Box>
                </GridItem>

                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} borderRightWidth={solverWidth} w="100%">
                        
                        <AbsoluteCenter rotate={'90deg'} position={'absolute'} left={3}>
                            <FaArrowLeftLong size={20} />
                        </AbsoluteCenter>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} w="100%">
                        <Box top={1} position={'absolute'} w="100%" textAlign={'center'}>1</Box>
                        <AbsoluteCenter textAlign={'center'}>
                            <Text display='inline' fontSize={30}>(</Text>
                            <Editable.Root onValueChange={(e) => setMiddleInputValue(e.value)} defaultValue={middleInputValue} w="40px"  fontSize={30} textAlign='center'>
                                <Editable.Preview w="40px"  justifyContent={'center'}/>
                                <Editable.Input  w="40px"  textAlign='center' />
                            </Editable.Root>
                            <Text display='inline' fontSize={30}>)</Text>
                        </AbsoluteCenter>
                        <Box bottom={1} position={'absolute'} w="100%" textAlign={'center'}>3</Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderBottomWidth={solverWidth} borderLeftWidth={solverWidth} w="100%">
                        
                        <AbsoluteCenter rotate={'270deg'} position={'absolute'} left="auto" right={0}>
                            <FaArrowLeftLong size={20} />
                        </AbsoluteCenter>
                    </Box>
                </GridItem>

                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderRightWidth={solverWidth} w="100%">
                        <AbsoluteCenter textAlign={'center'}>
                            <Editable.Root onValueChange={(e) => setBottomLeftInputValue(e.value)} defaultValue={bottomLeftInputValue} w="40px"  fontSize={30} textAlign='center'>
                                <Editable.Preview w="40px"  justifyContent={'center'}/>
                                <Editable.Input  w="40px"  textAlign='center' />
                            </Editable.Root>
                        </AbsoluteCenter>
                    </Box>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} w="100%" />
                </GridItem>
                <GridItem colSpan={1}>
                    <Box aspectRatio="1/1" position={'relative'} borderColor={solverColor} borderLeftWidth={solverWidth} w="100%">
                        <AbsoluteCenter textAlign={'center'}>
                            <Editable.Root onValueChange={(e) => setBottomRightInputValue(e.value)} defaultValue={bottomRightInputValue} w="40px"  fontSize={30} textAlign='center'>
                                <Editable.Preview w="40px"  justifyContent={'center'}/>
                                <Editable.Input  w="40px"  textAlign='center' />
                            </Editable.Root>
                        </AbsoluteCenter>
                    </Box>
                </GridItem>

                <GridItem colSpan={3}>
                    <Box mt={8} fontSize={20} textAlign={'center'}>
                        <Text display={'inline'} color={"fg.subtle"}>RESULT:</Text> <Text display={'inline'}>{resultLetter}</Text>-<Text display={'inline'}>{resultNumberSequence}</Text>
                    </Box>
                </GridItem>
            </Grid>


        </Stack>
        
    )
}

export default UnknownSignalPuzzleSolv;