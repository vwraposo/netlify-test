/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react'
import { ProductSummary_ProductFragment } from '@vtex/gatsby-theme-vtex/src/components/ProductSummary/__generated__/ProductSummary_product.graphql'
import { useLink } from '@vtex/gatsby-theme-vtex/src/sdk/product/useLink'
import { useSummaryImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useSummaryImage'
import {
  Flex,
  OfferContainer,
  ProductSummaryTitle,
  ProductSummaryImage,
  ProductSummaryContainer,
  Skeleton,
} from '@vtex/store-ui'

import Offer from '../Offer'
import RateStars from '../ProductPage/Above/RateStars'
import FreeShippingFlag from '../ProductPage/Above/FreeShippingFlag'
import ProductSummaryBuyButton from './BuyButton'

interface Props {
  product: ProductSummary_ProductFragment
  loading?: 'lazy' | 'eager'
  variant?: string
}

const OfferPreview: FC = () => (
  <OfferContainer variant="productSummary">
    <Skeleton height="20px" />
    <Skeleton height="23px" />
    <Skeleton height="20px" />
  </OfferContainer>
)

const ProductSummary: FC<Props> = ({
  product,
  loading = 'lazy',
  variant = 'default',
}) => {
  const {
    items: [sku],
    productName,
    productId,
    productClusters,
  } = product as any

  const {
    images: [{ imageUrl, imageText }],
    sellers,
  } = sku

  const linkProps = useLink(product)
  const imgProps = useSummaryImage(imageUrl)

  return (
    <ProductSummaryContainer {...linkProps} variant={variant}>
      <ProductSummaryImage
        alt={imageText ?? 'Product Image'}
        loading={loading}
        variant={variant}
        {...imgProps}
      />
      <ProductSummaryTitle variant={variant}>{productName}</ProductSummaryTitle>

      <Flex
        sx={{ justifyContent: 'space-between', minHeight: '25px', my: '5px' }}
      >
        <RateStars productId={productId} />
        <FreeShippingFlag productClusters={productClusters} />
      </Flex>

      {sellers === undefined ? (
        <OfferPreview />
      ) : sellers.length > 0 ? (
        <Offer
          variant="productSummary"
          commercialOffer={sellers[0].commercialOffer}
        />
      ) : null}

      <ProductSummaryBuyButton sku={sku} />
    </ProductSummaryContainer>
  )
}

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductSummary/index'

export default ProductSummary
