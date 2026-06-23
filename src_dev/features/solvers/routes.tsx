import {lazy} from "react"

const TimelessGridSolver = lazy(() => import("./pages/timeless-grid"))

const solversRoutes = [
  {
    path: "/the-experiment-solvers/solvers/timeless-grid-solver",
    element: <TimelessGridSolver />
  }
]
export default solversRoutes