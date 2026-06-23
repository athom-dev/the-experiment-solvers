import { Button, Icon, Stack } from "@chakra-ui/react";
import { House, Info, Newspaper, Puzzle } from "lucide-react"
import NavButton from "./NavButton";
import NavHeader from "./NavHeader";
import NavCategory from "./NavCategory";

export default function Sidebar() {
  return (
      <Stack className="hidden" gap={0} as="aside" px={2}>
        <NavHeader />
        
        <Stack gap={1}>
          <NavButton icon={<House/>} label="Welcome" to="/the-experiment-solvers/" />

          <NavCategory hidden title="Overview">
            <NavButton label="Introduction" to="/the-experiment-solvers/overview/introduction" />
            <NavButton label="User Interface & Controls" to="/the-experiment-solvers/overview/user-interface" />
            <NavButton label="Devices & Compability" to="/the-experiment-solvers/overview/compability" />
          </NavCategory>
          <NavCategory title="Puzzle Solutions">
            <NavButton icon={<Puzzle/>} label="Timeless: Grid" to="/the-experiment-solvers/solvers/timeless-grid-solver" />
            <NavButton icon={<Puzzle/>} label="Timeless: Math" to="/the-experiment-solvers/solvers/timeless-math-solver" />
            <NavButton icon={<Puzzle/>} label="Timeless: Chess" to="/the-experiment-solvers/solvers/timeless-chess-solver" />
            <NavButton icon={<Puzzle/>} label="Timeless: Energy Container" to="/the-experiment-solvers/solvers/timeless-energy-container" />
            <NavButton icon={<Puzzle/>} label="Timeless: XOR Gates" to="/the-experiment-solvers/solvers/timeless-xor-gates" />
            <NavButton icon={<Puzzle/>} label="Timeless: Batteries" to="/the-experiment-solvers/solvers/timeless-batteries" />
            <NavButton icon={<Puzzle/>} label="Unknown Signal" to="/the-experiment-solvers/solvers/unknown-signal" />
          </NavCategory>
        </Stack>
      </Stack>
  )
}