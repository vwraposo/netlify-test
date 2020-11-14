import React, { FC } from 'react'
import { Text, Heading, Container, RichMarkdown } from '@vtex/store-ui'

interface Props {
  title: string
  content?: string
}

const RightColumn: FC<Props> = ({ title, content, children }) => {
  return (
    <Container>
      <Heading variant="institutional.title">{title}</Heading>
      {content && (
        <Text variant="institutional.content">
          <RichMarkdown text={content} variant="institutional" />
        </Text>
      )}
      {children}
    </Container>
  )
}

export default RightColumn
