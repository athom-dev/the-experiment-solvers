import { Box, Stack, Heading, Text, Grid, GridItem, AbsoluteCenter, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

interface SolverButtonProps {
    grid: number;
    index: number;
    value: number;
}

interface SafeButtonProps {
    index: number;
}

function UnknownSignalPuzzleSolv () {
    const solverWidth = "1px";
    const solverColor = "border";
    const resultOffColor = "#c5b495";

    let grids = [];
    grids = [
        [
            0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0
        ],
        [
            1,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
        ],
        [
            2,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
            0,0,0,0,
        ],
        [
            3,
            0,1,0,0,
            0,1,0,0,
            1,0,0,0,
            0,0,0,1,
        ],
    ];

    const [gridsState, setGridsState] = useState(grids);

    const updateGrid = (gridIndex: number, index: number, value: number) => {
        const newGrids = gridsState.map((grid, i) => 
            i === gridIndex ? [...grid.slice(0, index), value, ...grid.slice(index + 1)] : grid
        );
        setGridsState(newGrids);
    }
    const SolverButton = (props: SolverButtonProps) => {
        return (
            <Button onClick={() => {updateGrid(props.grid, props.index, (props.value == 0) ? 1 : 0)}} w="100%" h="100%" id={(props.grid.toString() + props.index.toString())} variant="ghost" rounded={0} size="sm">
                <AbsoluteCenter fontSize="20px">{props.value}</AbsoluteCenter>
            </Button>
        )
    }

    const SafeButton = (props: SafeButtonProps) => {
        return (
            <GridItem borderWidth="6px" borderColor="#ad987b" bg={(gridsState[0][props.index] != gridsState[1][props.index] && gridsState[2][props.index] == 1) ? "#fff" : resultOffColor} aspectRatio="1/1" w="100%"></GridItem>
        )
    }

    return (
        <Stack className="app-page" gap='8'>
            <Box>
                <Heading mb={1}>xor-gates-puzzle.solv</Heading>
                <Text color="fg.muted">Use this solver to get the correct pattern to solve the puzzle at Laboratory #9 and unlock the safe at New Office Complex 1.</Text>
            </Box>

            <HStack gap="8" flexWrap="wrap">
                {
                    gridsState.map((grid, index) => {
                        if (index == 3) {
                            return (
                                <Box minW="100px" mx="auto" maxW="200px" w="100%">
                                    <Heading mb="1" color="fg.subtle" size="xs">{(index == 3) ? `Result ` : `Grid ` + (index+1)}</Heading>
                                    <Grid borderWidth="2px" borderColor="#cdc0ad" bg="#e3d4bf" p="6px" gap="8px" templateColumns="repeat(4, 1fr)" w="100%" maxW="300px" fontFamily='monospace'>
                                        <SafeButton index={1} />
                                        <SafeButton index={2} />
                                        <SafeButton index={3} />
                                        <SafeButton index={4} />

                                        <SafeButton index={5} />
                                        <SafeButton index={6} />
                                        <SafeButton index={7} />
                                        <SafeButton index={8} />
                                        
                                        <SafeButton index={9} />
                                        <SafeButton index={10} />
                                        <SafeButton index={11} />
                                        <SafeButton index={12} />

                                        <SafeButton index={13} />
                                        <SafeButton index={14} />
                                        <SafeButton index={15} />
                                        <SafeButton index={16} />
                                        
                                    </Grid>
                                </Box>
                            )

                        } else {
                            return (
                                <Box minW="100px" mx="auto" maxW="200px" w="100%">
                                    <Heading mb="1" color="fg.subtle" size="xs">{(index == 3) ? `Result ` : `Grid ` + (index+1)}</Heading>
                                    <Grid templateColumns="repeat(4, 1fr)" w="100%" maxW="300px" gap="0" fontFamily='monospace'>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={1} value={gridsState[index][1]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={2} value={gridsState[index][2]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={3} value={gridsState[index][3]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={4} value={gridsState[index][4]}/>
                                        </GridItem>

                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor}position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={5} value={gridsState[index][5]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor}position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={6} value={gridsState[index][6]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor}position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={7} value={gridsState[index][7]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={8} value={gridsState[index][8]}/>
                                        </GridItem>

                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={9} value={gridsState[index][9]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={10} value={gridsState[index][10]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={11} value={gridsState[index][11]}/>
                                        </GridItem>
                                        <GridItem borderBottomWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={12} value={gridsState[index][12]}/>
                                        </GridItem>

                                        <GridItem borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={13} value={gridsState[index][13]}/>
                                        </GridItem>
                                        <GridItem borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={14} value={gridsState[index][14]}/>
                                        </GridItem>
                                        <GridItem borderRightWidth={solverWidth} borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={15} value={gridsState[index][15]}/>
                                        </GridItem>
                                        <GridItem borderColor={solverColor} position="relative" aspectRatio="1/1" w="100%">
                                            <SolverButton grid={grid[0]} index={16} value={gridsState[index][16]}/>
                                        </GridItem>
                                    </Grid>
                                </Box>
                            )
                        }
                    })
                }
                
            </HStack>
        </Stack>
        
    )
}

export default UnknownSignalPuzzleSolv;