import { graphql, PageProps } from 'gatsby'
import Page from '@vtex/gatsby-theme-vtex/src/pages/index'

import { HomePageQueryQuery } from './__generated__/HomePageQuery.graphql'

export type Props = PageProps<HomePageQueryQuery>

export const query = graphql`
  query HomePageQuery {
    vtex {
      products(
        to: 11
        from: 0
        collection: "138"
        orderBy: "OrderByScoreDESC"
        hideUnavailableItems: true
      ) {
        ...ProductSummary_product
      }
    }
  }
`

export default Page
