import {Provider as ChakraProvider} from "@/components/ui/provider";
import { BrowserRouter } from "react-router";

export default function AppProviders({children}:{children: React.ReactNode}) {
  return (
    <ChakraProvider forcedTheme="dark">
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </ChakraProvider>
  )
}