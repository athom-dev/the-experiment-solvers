import { Prose } from "@/components/ui/prose";
import { Heading } from "@chakra-ui/react";
import { MarkdownViewer } from "@/utils/Markdown";

export default function HomePage() {
  const md = `
  
  # The Experiment Solvers
  > [!warning] This website is under development — everything is subject to change. More solvers and helpers coming soon. If you find any issues or bugs, report to **@athom.guy** on any viable method.
  ### Introduction
  Welcome to The Experiment Solvers, the only offering a *high-quality* and *efficient website* centralizing all The Experiment Solvers in a single location. User experience (UX) was prioritized to ensure practicality and ease of interaction, taking into account the most efficient ways of use.
  
  Regarding the interface of each Solver, they were developed to be faithful to what is illustrated in The Experiment. However, in some cases, it was necessary to diverge from these standards, as this is a website that prioritizes user experience (UX).

  ---

  ### Contributors

  **@athom.guy — Website Designer & Developer:** Contributed on developing all the interfaces and layout of the website. Made all the current solvers. It's also who wrote all of that. 
  `

  return (
    <>
      <Prose className="markdown" minW="unset" w="auto" maxW="unset">
        <MarkdownViewer markdownContent={md} />
      </Prose>
    </>
  )
}