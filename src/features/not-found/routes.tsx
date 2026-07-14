import settings from "@/app/settings"
import NotFound from "./pages"

const homeRoutes = [
  {
    path: `${settings.base}/*`,
    element: <NotFound/>
  }
]
export default homeRoutes