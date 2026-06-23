import {ArticleContent, ArticleHeader } from "@/components/article-content"
import { useParams } from "react-router"
import { Container } from "@chakra-ui/react"

export default function Article() {
  const {'*': id} = useParams()

  return (
    <>
      <Container py={4} display="flex" flexDirection="column" maxW="2xl" mx="auto">
        <ArticleHeader id={id} />
        <ArticleContent id={id} />
      </Container>
    </>
  )
}