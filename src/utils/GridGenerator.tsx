import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const GridGenerator: any = []

interface gridSettingsInterface {
  items: any[][],
  numOfItems: number,
  numOfRows: number,
  numOfCols: number,
}
export const gridSettings: gridSettingsInterface = {
  items: [],
  numOfItems: 0,
  numOfRows: 0,
  numOfCols: 0
}

export function updateItem(row: number, col: number, value: number) {
  gridSettings.items[row][col] = value
}
export function obtainItem(row: number, col: number) {
  return gridSettings.items[row][col]
}

const itemList: any[] = []
function Root({x, y, labelGrid, children, ...props}:{x:number, y: number, labelGrid: boolean | null, children: React.ReactNode}) {
  const shouldInitializeGrid =
    gridSettings.numOfRows !== x ||
    gridSettings.numOfCols !== y ||
    gridSettings.items.length === 0

  gridSettings.numOfItems = x * y
  gridSettings.numOfRows = x
  gridSettings.numOfCols = y

  if (shouldInitializeGrid) {
    gridSettings.items = Array.from({ length: x }, () => Array.from({ length: y }, () => 0))
  }
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const colsLetters = []
  for (let index = 0; index < gridSettings.numOfCols; index++) {
    colsLetters[index] = letters[index]
  }
  const rowsNum = []
  for(let index = 0; index < gridSettings.numOfCols; index++) {
    rowsNum[index] = index
  }
  return (
    <Grid {...props} templateColumns={`repeat(${x}, 1fr)`} templateRows={`repeat(${x}, 1fr)`} position="relative">
      { labelGrid &&
      <>
      <Grid opacity=".5" w="100%" templateColumns={`repeat(${x}, 1fr)`} top="-1em" transform="translateY(-25%)" position="absolute" h="1em">
        {colsLetters.map((value) => <GridItem key={value} textAlign="center" color="fg.subtle">{value}</GridItem>)}
      </Grid>
      <Grid opacity=".5" h="100%" w="1em" top="0" templateRows={`repeat(${y}, 1fr)`} left="-1em" position="absolute">
        {rowsNum.map((value) => <GridItem key={value} textAlign="center" display="flex" alignItems="center" justifyContent="center" color="fg.subtle">{value + 1}</GridItem>)}
      </Grid>
      </>
      }
      {children}
    </Grid>
  )

}

function Repeat({ item: Item, ...props }: { item: React.ElementType; [key: string]: any }) {
  return (
    <>
      {gridSettings.items.map((row, rowIndex) =>
        row.map((_cell, colIndex) => (
          <GridItem key={`${rowIndex}-${colIndex}`} {...props} aspectRatio="1/1" h="min-content">
            <Box h="100%">
              <Item row={rowIndex} col={colIndex} />
            </Box>
          </GridItem>
        ))
      )}
    </>
  )
}

GridGenerator.items = itemList
GridGenerator.Root = Root
GridGenerator.Repeat = Repeat