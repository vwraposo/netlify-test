import { Props } from '@vtex/gatsby-theme-vtex/components/ProductPage/BelowTheFold'
import { useAsyncProduct } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/useAsyncProduct'
import { Container, Flex } from '@vtex/store-ui'
import React, { FC } from 'react'

import ShelfRecommendation from '../Shelf/ShelfRecommendation'
import ProductSpecification from './Below/ProductSpecification'
import TrustVox from './Below/TrustVox'

const BelowTheFold: FC<Props> = ({ slug }) => {
  const { product }: any = useAsyncProduct({ slug })

  return (
    <Flex variant="productPage.container">
      <Container>
        <ProductSpecification product={product} />
        <ShelfRecommendation value={product.productId} />
        <TrustVox product={product} />
      </Container>
    </Flex>
  )
}

export default BelowTheFold
