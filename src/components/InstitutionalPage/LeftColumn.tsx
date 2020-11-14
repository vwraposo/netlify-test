import React, { useEffect, useState, FC } from 'react'
import { Container, Link as LinkUI } from '@vtex/store-ui'
import { Link } from 'gatsby'

import { InstitutionalMenu } from './menuItems'

interface Props {
  items: InstitutionalMenu
}

const LeftColumn: FC<Props> = ({ items }) => {
  const variant = 'institutional.list'
  const [currentWindow, setCurrentWindow] = useState('')

  useEffect(() => {
    setCurrentWindow(window?.location?.pathname)
  }, [])

  return (
    <Container variant={variant}>
      {Object.keys(items).map((key: string) => {
        const { title, href, target } = items[key]
        const link = href ?? `/institucional/${key}`
        const linkVariant = `${variant}.${
          currentWindow === link ? 'activeLink' : 'link'
        }`

        return target ? (
          <LinkUI
            key={title}
            href={link}
            rel="noreferrer"
            target={target}
            variant={linkVariant}
          >
            {title}
          </LinkUI>
        ) : (
          <Link key={title} to={link}>
            <Container variant={linkVariant}>{title}</Container>
          </Link>
        )
      })}
    </Container>
  )
}

export default LeftColumn
