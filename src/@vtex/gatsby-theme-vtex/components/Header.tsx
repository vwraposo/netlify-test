import React from 'react'
import Login from '@vtex/gatsby-theme-vtex/src/components/Login'
import Minicart from '@vtex/gatsby-theme-vtex/src/components/Minicart'
import SearchBar from '@vtex/gatsby-theme-vtex/src/components/SearchBar'
import { Container, Header as HeaderStoreUI } from '@vtex/store-ui'

import { Hidden } from './Hidden'
import Logo from './Logo'
import Menu from './Menu'
import { MenuMobile } from './MenuMobile'

const variant = 'header'

const Header = () => {
  const SearchBarComponent = (
    <SearchBar
      placeholder="Olá, o que você procura hoje?"
      aria-label="Olá, o que você procura hoje?"
    />
  )

  return (
    <HeaderStoreUI variant={variant}>
      <Container variant={`${variant}.container`}>
        <Hidden device="desktop">
          <MenuMobile />
        </Hidden>
        <Logo variant={`${variant}.logo`} />
        <Hidden device="mobile">{SearchBarComponent}</Hidden>
        <Login />
        <Minicart />
      </Container>
      <Hidden device="mobile">
        <Menu variant={`${variant}.menu`} />
      </Hidden>
      <Hidden device="desktop">{SearchBarComponent}</Hidden>
    </HeaderStoreUI>
  )
}

export default Header
