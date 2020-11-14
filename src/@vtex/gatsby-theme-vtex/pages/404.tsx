/* eslint-disable react/jsx-pascal-case */
import React, { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { Box, Flex, LocalizedLink } from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Layout from '@vtex/gatsby-theme-vtex/src/components/Layout'
import SEO from '@vtex/gatsby-theme-vtex/src/components/HomePage/SEO'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf'

import ButtonWithLoading from '../components/ButtonWithLoading'
import { NotFoundQueryQuery } from './__generated__/NotFoundQuery.graphql'
import ShelfProductsTitle from '../components/Shelf/ShelfProductsTitle'
import { pageSizes } from '../components/Shelf/constants'

export const query = graphql`
  query NotFoundQuery {
    vtex {
      products(
        to: 11
        from: 0
        map: "c"
        query: "outlet"
        orderBy: "OrderByScoreDESC"
        hideUnavailableItems: true
      ) {
        ...ProductSummary_product
      }
    }
  }
`

const NotFoundPage: FC<PageProps<NotFoundQueryQuery>> = ({
  data: {
    vtex: { products },
  },
}) => (
  <Layout>
    <SEO title="Página Não Encontrada" />
    <Container>
      <Flex p={2} sx={{ alignItems: 'center', flexDirection: 'column' }}>
        <Box
          as="h3"
          sx={{
            fontSize: '43px',
            fontWeight: '600',
            textAlign: 'center',
            color: 'primary',
            mt: '50px',
          }}
        >
          Página não encontrada
        </Box>
        <Box
          as="p"
          sx={{
            marginX: '15px',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          A página que você está procurando não existe.
        </Box>
        <LocalizedLink to="/">
          <ButtonWithLoading loading={false} sx={{ marginTop: '30px' }}>
            Voltar para o início
          </ButtonWithLoading>
        </LocalizedLink>
      </Flex>
      <Shelf
        products={products!}
        title={
          <ShelfProductsTitle>
            Veja nossos produtos de outlet
          </ShelfProductsTitle>
        }
        pageSizes={pageSizes}
        showDots
      />
    </Container>
  </Layout>
)

export default NotFoundPage
