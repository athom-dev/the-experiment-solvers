import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prose } from "@/components/ui/prose"
import rehypeRaw from 'rehype-raw';
import { Box, Heading, Stack } from "@chakra-ui/react"

export function ArticleHeader({id}:{id:any}) {
  const [json, setJson] = useState<{ title?: string } | null>(null)

  useEffect(() => {
    if (!id) return
    fetch(`/the-experiment-directory/articles/${id}/manifest.json`)
      .then((response) => response.json())
      .then( (data) => {
        setJson(data)
      }
      )
      .catch(console.error);
  }, [id])

  return (
    <Stack>
      <Heading size="sm" color="fg.subtle" textTransform="uppercase">{json?.title ?? id}</Heading>
    </Stack>
  )
}
export function ArticleContent({id}:{id:any}) {
  const [content, setContent] = useState("")
  console.log('id');

  useEffect(() => {
    if (!id) return
    fetch(`/the-experiment-directory/articles/${id}/index.md`)
      .then(res => {
        const type = res.headers.get("content-type")
        if (!type || !type.includes("text/markdown")) {
          throw new Error("Not found")
        }
        return res.text()
      })
      .then(setContent)
      .catch(() => setContent("# 404\nConteúdo não encontrado"))
  }, [id])

  return (
    <Prose minW="unset" w="auto" maxW="unset">
      <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </Prose>
  )
}