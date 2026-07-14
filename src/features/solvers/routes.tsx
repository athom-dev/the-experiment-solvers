import settings from "@/app/settings"
import {lazy} from "react"

const TimelessGridSolver = lazy(() => import("./pages/timeless-grid"))

const solversRoutes = [
  {
    path: `${settings.base}/solvers/timeless-grid-solver`,
    element: <TimelessGridSolver />
  }
]
export default solversRoutes