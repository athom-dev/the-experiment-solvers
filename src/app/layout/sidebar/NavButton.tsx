import { IconButton, Icon } from "@chakra-ui/react"
import { House } from "lucide-react"
import { NavLink } from "react-router"
interface NavButtonProps {
  icon?: React.ReactNode,
  label: string,
  to: string
}

export default function NavButton ({icon, label, to}:NavButtonProps) {
  return (
    <IconButton colorPalette="gray" rounded="md" className="nav-button" asChild justifyContent="start" px={2.5} size={"md"} variant="subtle">
      <NavLink end to={to}>
        {(icon) && <Icon>{icon}</Icon>}
        {label}
      </NavLink>
    </IconButton>
  )
}