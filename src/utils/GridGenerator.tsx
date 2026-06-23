import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { type AllHTMLAttributes } from "react";

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
function Root({x, y, children, ...props}:{x:number, y: number, children: React.ReactNode}) {
  gridSettings.numOfItems = x * y
  gridSettings.numOfRows = x
  gridSettings.numOfCols = y
  
  for (let index = 0; index < gridSettings.numOfRows; index++) {
    const cols = []
    for (let index2 = 0; index2 < gridSettings.numOfCols; index2++) {
      cols[index2] = 0;
    }
    gridSettings.items[index] = cols
  }
  return (
    <Grid {...props} templateColumns={`repeat(${x}, 1fr)`} templateRows={`repeat(${x}, 1fr)`}>
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