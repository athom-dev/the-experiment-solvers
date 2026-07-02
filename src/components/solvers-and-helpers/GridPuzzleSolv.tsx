import { GridGenerator, gridSettings, obtainItem, updateItem } from "@/utils/GridGenerator"
import { Box, Button, HStack, RadioCard, Switch } from "@chakra-ui/react"
import { memo, useEffect, useMemo, useRef, useState, type ReactNode } from "react"

type GridCellProps = {
  row: number
  col: number
  [key: string]: unknown
}

type Position = [number, number]
type GridCell = { row: number; col: number; value: number }
type SolverMode = 0 | 1 | 2 | 3

const GRID_SIZE = 8
// const DEFAULT_CROSS_POSITION: Position = [0, 0]
// const DEFAULT_VERTEX_POSITIONS: [Position, Position, Position] = [
//   [0, 0],
//   [7, 7],
//   [0, 7],
// ]

const variationRenderers = [
  <Box key="empty" opacity=".1" />,
  <Box key="one">1</Box>,
  <Box key="plus">+</Box>,
  <Box key="x">X</Box>,
  <Box key="red" h="75%" w="75%" border="3px solid var(--chakra-colors-red-fg)" rounded="full" bg="red.solid" />,
  <Box key="yellow" h="75%" w="75%" border="3px solid var(--chakra-colors-yellow-fg)" rounded="full" bg="yellow.solid" />,
  <Box key="blue" h="75%" w="75%" border="3px solid var(--chakra-colors-blue-fg)" rounded="full" bg="blue.solid" />,
]

const solverAssets = [
  <Box key="horizontal" h="25%" w="100%" bg="yellow.solid" />,
  <Box key="vertical" h="100%" w="25%" bg="yellow.solid" />,
]

const triangleBorderColor = "rgb(255, 105, 180)"
const triangleBorderWidth = .25

const ItemOverlay = ({ children }: { children: ReactNode }) => (
  <Box
    position="absolute"
    inset={0}
    zIndex={-1}
    opacity=".5"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
)

const getCellColorPalette = (value: number) => {
  if (value === 4) return "red"
  if (value === 5) return "yellow"
  if (value === 6) return "blue"
  return "gray"
}

const isAligned = (a: Position, b: Position) => a[0] === b[0] || a[1] === b[1]
const isDiagonal = (a: Position, b: Position) => Math.abs(a[0] - b[0]) === Math.abs(a[1] - b[1])

const flattenGrid = (): GridCell[] =>
  gridSettings.items.flatMap((row, rowIndex) =>
    row.map((value, colIndex) => ({ row: rowIndex, col: colIndex, value })),
  )

const getSolverMode = (cells: GridCell[]): SolverMode => {
  const hasRednOnes = cells.some((cell) => cell.value === 4) && cells.some((cell) => cell.value === 1)
  const hasBlue = cells.some((cell) => cell.value === 6)
  const hasYellow = cells.some((cell) => cell.value === 5)
  const hasPlus = cells.some((cell) => cell.value === 2)

  if (hasBlue) return 3
  if (hasYellow || hasPlus) return 2
  if (hasRednOnes) return 1
  return 0
}

const analyzeGrid = () => {
  const cells = flattenGrid()
  return {
    cells,
    ones: cells.filter((cell) => cell.value === 1),
    pluses: cells.filter((cell) => cell.value === 2),
    reds: cells.filter((cell) => cell.value === 4),
    yellows: cells.filter((cell) => cell.value === 5),
    blues: cells.filter((cell) => cell.value === 6),
    xs: cells.filter((cell) => cell.value === 3)
  }
}

const isCrossValid = (
  cross: Position,
  reds: GridCell[],
  yellows: GridCell[],
  blues: GridCell[],
  mode: SolverMode,
) => {
  if (reds.some((red) => isAligned(cross, [red.row, red.col]))) return false
  if (mode >= 2 && yellows.some((yellow) => isAligned(cross, [yellow.row, yellow.col]))) return false
  if (mode === 3 && blues.some((blue) => (isDiagonal(cross, [blue.row, blue.col]) || isAligned(cross, [blue.row, blue.col])))) return false
  return true
}

const isVertexValid = (
  vertex: Position,
  reds: GridCell[],
  yellows: GridCell[],
  blues: GridCell[],
  pluses: GridCell[],
  cross: Position,

  mode: SolverMode,
) => {
  if (cross[0] === vertex[0] && cross[1] === vertex[1]) return false
  if (reds.some((red) => red.row === vertex[0] && red.col === vertex[1])) return false
  if (mode >= 2 && yellows.some((yellow) => isAligned(vertex, [yellow.row, yellow.col]))) return false
  if (mode === 3 && blues.some((blue) => isDiagonal(vertex, [blue.row, blue.col]))) return false
  if (pluses.some((plus) => plus.row === vertex[0] && plus.col === vertex[1])) return false
  return true
}

const computeCrossCandidates = (
  reds: GridCell[],
  yellows: GridCell[],
  blues: GridCell[],
  mode: SolverMode,
) => {
  const candidates: Position[] = []

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let col = 0; col < GRID_SIZE; col += 1) {
      const position: Position = [row, col]
      if (isCrossValid(position, reds, yellows, blues, mode)) {
        candidates.push(position)
      }
    }
  }

  return candidates.length > 0 ? candidates : ([[4, 6]] as Position[])
}

const buildVertexCandidates = (
  reds: GridCell[],
  yellows: GridCell[],
  blues: GridCell[],
  pluses: GridCell[],
  mode: SolverMode,
) => {
  const candidates: { position: Position; score: number }[] = []

  flattenGrid().forEach((cell) => {
    const position: Position = [cell.row, cell.col]
    if (!isVertexValid(position, reds, yellows, blues, pluses, [-1,-1],  mode)) return
    candidates.push({ position, score: cell.value === 1 ? 10 : cell.value === 2 ? 5 : 1 })
  })

  return candidates
    .sort((a, b) => b.score - a.score || a.position[0] - b.position[0] || a.position[1] - b.position[1])
    .slice(0, 18)
    .map((candidate) => candidate.position)
}

const getVertexCombinations = (candidates: Position[]): [Position, Position, Position][] => {
  const triples: [Position, Position, Position][] = []

  for (let i = 0; i < candidates.length; i += 1) {
    for (let j = i + 1; j < candidates.length; j += 1) {
      for (let k = j + 1; k < candidates.length; k += 1) {
        triples.push([candidates[i], candidates[j], candidates[k]])
      }
    }
  }

  return triples
}

const countCoveredOnes = (ones: GridCell[], cross: Position, vertices: Position[]) =>
  ones.filter((one) => one.row === cross[0] || one.col === cross[1] || vertices.some((vertex) => vertex[0] === one.row && vertex[1] === one.col)).length

const plusAlignmentSatisfied = (pluses: GridCell[], vertices: Position[]) =>
  pluses.every((plus) => vertices.some((vertex) => vertex[0] === plus.row || vertex[1] === plus.col))
const xsAlignmentSatisfied = (xs: GridCell[], vertices: Position[]) => 
  xs.every((x) => vertices.some((vertex) => isDiagonal(vertex, [x.row, x.col])))
const yellowAlignmentValid = (yellows: GridCell[], cross: Position, vertices: Position[]) =>
  yellows.every((yellow) =>
    yellow.row !== cross[0] &&
    yellow.col !== cross[1] &&
    vertices.every((vertex) => vertex[0] !== yellow.row && vertex[1] !== yellow.col),
  )

const blueDiagonalValid = (blues: GridCell[], cross: Position, vertices: Position[]) =>
  blues.every((blue) =>
    !isDiagonal(cross, [blue.row, blue.col]) &&
    vertices.every((vertex) => !isDiagonal(vertex, [blue.row, blue.col])),
  )

const evaluateSolution = (
  cross: Position,
  vertices: [Position, Position, Position],
  ones: GridCell[],
  xs: GridCell[],
  pluses: GridCell[],
  reds: GridCell[],
  yellows: GridCell[],
  blues: GridCell[],
  mode: SolverMode,
) => {
  if (!isCrossValid(cross, reds, yellows, blues, mode)) return Number.NEGATIVE_INFINITY
  if (!isVertexValid(vertices[0], reds, yellows, blues, pluses, cross, mode)) return Number.NEGATIVE_INFINITY
  if (!isVertexValid(vertices[1], reds, yellows, blues, pluses, cross, mode)) return Number.NEGATIVE_INFINITY
  if (!isVertexValid(vertices[2], reds, yellows, blues, pluses, cross, mode)) return Number.NEGATIVE_INFINITY

  const onesCovered = countCoveredOnes(ones, cross, vertices)
  const plusRule = plusAlignmentSatisfied(pluses, vertices)
  const xsRule = xsAlignmentSatisfied(xs, vertices)
  const yellowRule = mode >= 2 ? yellowAlignmentValid(yellows, cross, vertices) : true
  const blueRule = mode === 3 ? blueDiagonalValid(blues, cross, vertices) : true

  let score = onesCovered * 20
  score += plusRule ? 30 : -20
  score += xsRule ? 30 : -20
  score += yellowRule ? 30 : -40
  score += blueRule ? 30 : -40

  if (onesCovered === ones.length) score += 40
  if (pluses.length > 0 && plusRule) score += 20
  if (xs.length > 0 && xsRule) score += 20
  console.log(xs)
  if (yellows.length > 0 && yellowRule) score += 20
  if (blues.length > 0 && blueRule) score += 20

  const yellowPenalties = yellows.reduce((penalty, yellow) => {
    if (yellow.row === cross[0] || yellow.col === cross[1]) return penalty + 10
    if (vertices.some((vertex) => vertex[0] === yellow.row || vertex[1] === yellow.col)) return penalty + 10
    return penalty
  }, 0)

  const bluePenalties = blues.reduce((penalty, blue) => {
    if (isDiagonal(cross, [blue.row, blue.col])) return penalty + 10
    if (vertices.some((vertex) => isDiagonal(vertex, [blue.row, blue.col]))) return penalty + 10
    return penalty
  }, 0)

  return score - yellowPenalties - bluePenalties
}
const buildTrianglePath = ([first, second, third]: [Position, Position, Position]) =>
  `M ${first[1] + 0.5} ${first[0] + 0.5} L ${second[1] + 0.5} ${second[0] + 0.5} L ${third[1] + 0.5} ${third[0] + 0.5} Z`

export default function TimelessGridSolver() {
  const [selectedValue, setSelectedValue] = useState(0)
  const [crossPosition, setCrossPosition] = useState<Position>()
  const [triangleVertices, setTriangleVertices] = useState<[Position, Position, Position]>()
  const [solverMessage, setSolverMessage] = useState<string>("")
  const selectedValueRef = useRef(selectedValue)

  const [autoSolve, setAutoSolve] = useState(true)

  useEffect(() => {
    selectedValueRef.current = selectedValue
  }, [selectedValue])

  const Item = useMemo(
    () =>
      memo(({ row, col, ...props }: GridCellProps) => {
        const [value, setValue] = useState(obtainItem(row, col))

        const updateValue = (nextValue: number) => {
          updateItem(row, col, nextValue)
          setValue(nextValue)
          autoSolve ? solveGrid() : null
        }

        const isCrossRow = row === crossPosition?.[0]
        const isCrossCol = col === crossPosition?.[1]

        return (
          <Button
            m={0}
            p={0}
            h="100%"
            w="100%"
            bg="bg"
            rounded="0"
            borderWidth={0}
            fontSize="2rem"
            fontFamily="monospace"
            colorPalette={getCellColorPalette(value)}
            variant="plain"
            {...props}
            onClick={() => {
              updateValue(selectedValueRef.current)
            }}
          >
            {isCrossRow && <ItemOverlay>{solverAssets[0]}</ItemOverlay>}
            {isCrossCol && <ItemOverlay>{solverAssets[1]}</ItemOverlay>}
            {variationRenderers[value]}
          </Button>
        )
      }),
    [crossPosition],
  )

  const Toolbar = () => (
    <RadioCard.Root
      orientation="horizontal"
      align="center"
      justify="center"
      h="350px"
      defaultValue={`${selectedValue}`}
      onValueChange={(event) => {
        setSelectedValue(Number(event.value ?? "0"))
      }}
    >
      {/* <RadioCard.Label>Options</RadioCard.Label> */}
      <HStack h="100%" align="stretch" flexDirection="column">
        {variationRenderers.map((item, index) => (
          <RadioCard.Item aspectRatio="1/1" key={index} value={`${index}`} w="43px">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl p={0} fontFamily="monospace">
              <Box
                display="flex"
                alignItems="center"
                flexDirection={'column'}
                justifyContent="center"
                w="full"
                h="full"
                p={0}
                fontSize="2rem"
                color="fg.subtle"
                aria-keyshortcuts={`${index}`}
              >
                {item}
              </Box>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )

  const solveGrid = () => {
    const { cells, ones, pluses, reds, yellows, blues, xs } = analyzeGrid()
    const mode = getSolverMode(cells)

    const crossCandidates = computeCrossCandidates(reds, yellows, blues, mode)
    const vertexCandidates = buildVertexCandidates(reds, yellows, blues, pluses, mode)
    const vertexTriples = getVertexCombinations(vertexCandidates)

    let bestScore = Number.NEGATIVE_INFINITY
    let bestSolution: { cross: Position; vertices: [Position, Position, Position] } | null = null

    for (const cross of crossCandidates) {
      for (const vertices of vertexTriples) {
        const score = evaluateSolution(cross, vertices, ones, xs, pluses, reds, yellows, blues, mode)
        if (score > bestScore) {
          bestScore = score
          bestSolution = { cross, vertices }
        }
      }
    }

    if (!bestSolution) {
      setSolverMessage("No solution available")
      return
    }

    setCrossPosition(bestSolution.cross)
    setTriangleVertices(bestSolution.vertices)
    setSolverMessage(
      `${["Bruh", "First", "Second", "Third"][mode] || "Athom"} phase.`,
    )
  }

  const trianglePath = useMemo(
    () => (triangleVertices ? buildTrianglePath(triangleVertices) : ""),
    [triangleVertices],
  )

  const grid = useMemo(
    () => (
      <Box w="350px" aspectRatio="1/1" position="relative">
        <svg
          viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE}`}
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
        >
          <path
            d={trianglePath}
            fill="none"
            stroke={triangleBorderColor}
            strokeWidth={triangleBorderWidth}
            opacity=".5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <GridGenerator.Root w="100%" h="100%" labelGrid bg="gray.subtle" gap="2px" p="3px" x={GRID_SIZE} y={GRID_SIZE}>
          <GridGenerator.Repeat item={Item} />
        </GridGenerator.Root>
      </Box>
    ),
    [Item, trianglePath],
  )

  return (
    <Box p={4} h="100%" className="app-page">
      <HStack h="100%" justifyContent="center" alignItems="start">
        <Box display="grid" gap={2}>
          {grid}
          <Button colorScheme="pink" onClick={solveGrid}>
            Solve puzzle
          </Button>
          
          <Switch.Root size="sm" checked={autoSolve} onCheckedChange={(e) => setAutoSolve(e.checked)}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Auto solve</Switch.Label>
          </Switch.Root>
          {solverMessage && (
            <Box color="fg.subtle" fontSize="sm">
              {solverMessage}
            </Box>
          )}
        </Box>
        <Toolbar />
      </HStack>
    </Box>
  )
}
