import { Link as ChakraLink, type LinkProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link as RRLink } from "react-router";

interface AnchorProps extends LinkProps {
  to?: string;
  children?: ReactNode;
}

export default function Anchor({ to, children, ...props }: AnchorProps) {
  return to != undefined ? (
    <ChakraLink {...props}>
      <RRLink to={to}>{children}</RRLink>
    </ChakraLink>
  ) : (
    <ChakraLink {...props}>{children}</ChakraLink>
  );
}