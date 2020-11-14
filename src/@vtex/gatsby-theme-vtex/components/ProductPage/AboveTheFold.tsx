/* eslint-disable react/jsx-pascal-case */
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import ProductImageGallery from '@vtex/gatsby-theme-vtex/src/components/ProductImageGallery'
import { ProductPageProps } from '@vtex/gatsby-theme-vtex/src/templates/product'
import {
  Box,
  Breadcrumb,
  Flex,
  Grid,
  ProductDetailsReference,
  ProductDetailsTitle,
} from '@vtex/store-ui'
import React, { FC, lazy } from 'react'
import { useDetailsImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useDetailsImage'
import SuspenseSSR from '@vtex/gatsby-theme-vtex/src/components/Suspense/SSR'
import { useGalleryItems } from '@vtex/gatsby-theme-vtex/src/sdk/product/useGalleryItems'

import AsyncInfoContainer from './Above/AsyncInfo/Container'
import AsyncInfoPreview from './Above/AsyncInfo/Preview'
import FreeShippingFlag from './Above/FreeShippingFlag'
import ProductDescription from '../ProductDescription'
import LogoTramontina from './Above/LogoTramontina'
import RateStars from './Above/RateStars'

const AsyncInfo = lazy(() => import('./Above/AsyncInfo/index'))

const variant = 'default'

const AboveTheFold: FC<ProductPageProps> = ({
  data: {
    vtex: { product },
  },
  slug,
}) => {
  const {
    productId,
    productReference,
    productClusters,
    productName,
    categoryTree: breadcrumb = [],
    items: [{ images, videos }],
  } = product as any

  const imageItems = useDetailsImage(images)

  const galleryItems = useGalleryItems(imageItems, videos, productName)

  return (
    <Container>
      <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />

      <Box variant={`productDetails.${variant}.container`}>
        <LogoTramontina />

        <ProductDetailsTitle variant={variant}>
          {productName}
        </ProductDetailsTitle>

        <RateStars productId={productId} />

        <Flex sx={{ justifyContent: 'space-between', my: 4 }}>
          <ProductDetailsReference variant={variant}>
            Cod.: {productReference}
          </ProductDetailsReference>
          <FreeShippingFlag productClusters={productClusters} />
        </Flex>

        <Grid my={4} mx="auto" gap={[0, 3]} columns={[1, 2]}>
          <ProductImageGallery allItems={galleryItems} />

          <AsyncInfoContainer>
            <SuspenseSSR fallback={<AsyncInfoPreview />}>
              <AsyncInfo slug={slug!} />
            </SuspenseSSR>
          </AsyncInfoContainer>
        </Grid>
      </Box>

      <ProductDescription product={product as any} />
    </Container>
  )
}

export { fragment } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/AboveTheFold'

export default AboveTheFold
