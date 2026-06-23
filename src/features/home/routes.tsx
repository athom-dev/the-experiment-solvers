import { lazy } from "react"

const HomePage = lazy(() => import("./pages/index"))
const homeRoutes = [
  {
    path: "/the-experiment-solvers/",
    element: <HomePage/>
  }
]
export default homeRoutes