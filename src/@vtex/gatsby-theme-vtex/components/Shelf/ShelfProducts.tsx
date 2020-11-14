import React, { FC, Suspense } from 'react'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf/index'
import ShelfContainer from '@vtex/gatsby-theme-vtex/src/components/Shelf/Container'
import {
  useProductsShelf,
  ProductsShelfOptions,
} from '@vtex/gatsby-theme-vtex/src/sdk/shelf/useProductsShelf'
import { Center, Spinner } from '@vtex/store-ui'

import ShelfProductsTitle from './ShelfProductsTitle'
import { pageSizes } from './constants'

export interface Props {
  title: string
  searchParams: ProductsShelfOptions
}

const ShelfProductsAsync: FC<Props> = ({ title, searchParams }) => {
  const { products } = useProductsShelf(searchParams)

  if (!products) {
    return null
  }

  return (
    <Shelf
      products={products}
      title={<ShelfProductsTitle>{title}</ShelfProductsTitle>}
      pageSizes={pageSizes}
      showDots
    />
  )
}

const ShelfProducts: FC<Props> = (props) => (
  <ShelfContainer>
    <Suspense
      fallback={
        <Center height="100%">
          <Spinner />
        </Center>
      }
    >
      <ShelfProductsAsync {...props} />
    </Suspense>
  </ShelfContainer>
)

export default ShelfProducts
