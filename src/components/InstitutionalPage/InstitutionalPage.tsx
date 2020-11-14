/* eslint-disable react/jsx-pascal-case */
import React, { FC } from 'react'
import { Grid } from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Layout from '@vtex/gatsby-theme-vtex/src/components/Layout'
import SEO from '@vtex/gatsby-theme-vtex/src/components/HomePage/SEO'

import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { institutionalMenuItems } from './menuItems'

interface Props {
  title: string
  content: string
}

const InstitutionalPage: FC<Props> = ({ title, content }) => {
  return (
    <Layout>
      <Container>
        <Grid variant="institutional">
          <SEO title={title} />
          <LeftColumn items={institutionalMenuItems} />
          <RightColumn title={title} content={content} />
        </Grid>
      </Container>
    </Layout>
  )
}

export default InstitutionalPage
