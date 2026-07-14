import settings from "@/app/settings"
import { lazy } from "react"

const HomePage = lazy(() => import("./pages/index"))
const ChangelogPage = lazy(() => import("./pages/changelog"))

const homeRoutes = [
  {
    path: `${settings.base}`,
    element: <HomePage/>
  },
  {
    path: `${settings.base}/changelog`,
    element: <ChangelogPage/>
  }
]
export default homeRoutes