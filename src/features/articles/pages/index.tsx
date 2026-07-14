import settings from "@/app/settings";
import Section from "@/components/layout/Section";
import { Button, Heading, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Anchor from "@/components/Anchor"
import { Link } from "react-router";
export default function ArticlesPage () {
  const [allArticles, setAllArticles]: any = useState([])

  async function manifest() {
    return fetch(`${settings.base}/content/manifest.json`).then((response) => response.json())
  }

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        const response = await manifest()
        if (!mounted) return
        setAllArticles(response)
        console.log("manifest response:", response)
      } catch (err) {
        console.error("Failed to load manifest:", err)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])
   
  return (
    <Section>
      <Heading>All articles</Heading>
      <Stack gap={0}>
        <Heading size="md" mb={2}>Basics</Heading>
        {(() => {
          const articles = Object.entries(allArticles?.articles ?? {}).map(([id, item]) => ({ id, ...(item as Record<string, any>) }))

          return articles.map((each: any, idx: number) => (
            <Button fontWeight={400} variant="ghost" h="auto" py={1} px={3} asChild w="100%" justifyContent="start">
              <Link to={`${settings.base}/articles/${each.id}`} key={each.id ?? idx}>{each.title}</Link>
            </Button>
          ))
        })()}
      </Stack>
    </Section>
  )
}