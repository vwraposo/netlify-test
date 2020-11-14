import SuspenseSSR from '@vtex/gatsby-theme-vtex/src/components/Suspense/SSR'
import SuspenseViewport from '@vtex/gatsby-theme-vtex/src/components/Suspense/Viewport'
import { Box } from '@vtex/store-ui'
import React, { FC, lazy } from 'react'

import Header from './Header'

const loader = () => import('./Footer/index')

const Footer = lazy(loader)
const CustomFloatingActionButton = lazy(
  () => import('./FloatingActionButton/index')
)

const Layout: FC = ({ children }) => (
  <Box variant="mainLayout">
    <Header />
    {children}
    <SuspenseSSR fallback={null}>
      <CustomFloatingActionButton />
    </SuspenseSSR>
    <SuspenseViewport fallback={null} preloader={loader}>
      <Footer />
    </SuspenseViewport>
  </Box>
)

export default Layout
