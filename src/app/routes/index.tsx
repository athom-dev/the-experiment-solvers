import { useRoutes } from "react-router";
import AppLayout from "@/app/layout/Layout"

import homeRoutes from "@/features/home/routes";
import solversRoutes from "@/features/solvers/routes";
import notFoundRoutes from "@/features/not-found/routes";

export const appRoutes = [
  {
    path: "/the-experiment-solvers",
    element: <AppLayout/>,
    children: [
      ... homeRoutes,
      ... solversRoutes,
      ... notFoundRoutes
    ]
  }
]
export function AppRoutes () {
  const routes = useRoutes(appRoutes);

  return routes;
}
