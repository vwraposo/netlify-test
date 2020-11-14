/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Grid } from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Layout from '@vtex/gatsby-theme-vtex/src/components/Layout'
import SEO from '@vtex/gatsby-theme-vtex/src/components/HomePage/SEO'

import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import { institutionalMenuItems } from './menuItems'
import { ContactForm } from './Form/ContactForm'

const ContactPage = () => {
  const {
    contato: { title },
  } = institutionalMenuItems

  return (
    <Layout>
      <Container>
        <SEO title={title} />
        <Grid variant="institutional">
          <LeftColumn items={institutionalMenuItems} />
          <RightColumn title={title}>
            <ContactForm />
          </RightColumn>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage
