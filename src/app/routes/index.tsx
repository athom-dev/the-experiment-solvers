import { useRoutes } from "react-router";
import AppLayout from "@/app/layout/Layout"
import settings from "@/app/settings"

import homeRoutes from "@/features/home/routes";
import articlesRoutes from "@/features/articles/routes";
import solversRoutes from "@/features/solvers/routes";
import notFoundRoutes from "@/features/not-found/routes";

export const appRoutes = [
  {
    path: `${settings.base}`,
    element: <AppLayout/>,
    children: [
      ... homeRoutes,
      ... articlesRoutes,
      ... solversRoutes,
      ... notFoundRoutes
    ]
  }
]
export function AppRoutes () {
  const routes = useRoutes(appRoutes);

  return routes;
}
