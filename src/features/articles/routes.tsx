import settings from "@/app/settings"
import { lazy } from "react"

const ArticlesPage = lazy(() => import("./pages/index"))

const articlesRoutes = [
  {
    element: <ArticlesPage />,
    path: `${settings.base}/articles`
  }
]

export default articlesRoutes