import { gql } from '@vtex/gatsby-plugin-graphql'
import { useIntl } from '@vtex/gatsby-plugin-i18n'
import { useQuery } from '@vtex/gatsby-theme-vtex/src/sdk/graphql/useQuery'
import { useScaledImage } from '@vtex/gatsby-theme-vtex/src/sdk/img/useScaledImage'
import { useNumberFormat } from '@vtex/gatsby-theme-vtex/src/sdk/localization/useNumberFormat'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  LocalizedLink,
  ProductSummaryImage,
  Spinner,
  Text,
} from '@vtex/store-ui'
import React, { FC } from 'react'

import { usePrice } from '../Offer/usePrice'
import {
  SubMenuFeaturedProductQuery,
  SubMenuFeaturedProductQueryQuery,
  SubMenuFeaturedProductQueryQueryVariables,
} from './__generated__/SubMenuFeaturedProductQuery.graphql'

const SubMenuFeatured: FC<{
  data: SubMenuFeaturedProductQueryQuery
  variant: string
}> = ({ variant, data }) => {
  const numberFormat = useNumberFormat()
  const { formatMessage } = useIntl()

  const product =
    data?.vtex.productSearch?.products && data?.vtex.productSearch?.products[0]

  const item = product?.items && product?.items[0]
  const image = item?.images && item?.images[0]
  const seller = item?.sellers && item.sellers[0]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { price } = usePrice(seller?.commercialOffer as any)
  const src = useScaledImage(image?.imageUrl ?? '', 160, 160)

  const buttonProps = {
    as: LocalizedLink,
    to: `/${product?.linkText}/p`,
    variant: `${variant}.button`,
  }

  return (
    <>
      <Heading variant={`${variant}.title`} as="h3">
        {product?.productName}
      </Heading>
      <Flex variant={`${variant}.content`}>
        <Box variant={`${variant}.details`}>
          <Flex variant={`${variant}.priceContent`}>
            <Text variant={`${variant}.price`}>
              {numberFormat.format(price)}
            </Text>
            <Text variant={`${variant}.vista`}>
              {formatMessage({ id: 'menu.sub.featured.text' })}
            </Text>
          </Flex>
          <Button {...buttonProps}>
            {formatMessage({ id: 'menu.sub.featured.button' })}
          </Button>
        </Box>
        <Box variant={`${variant}.image`}>
          <ProductSummaryImage
            width={160}
            height={160}
            variant="menuFeatured"
            src={src}
            alt={image?.imageText ?? ''}
            loading="eager"
          />
        </Box>
      </Flex>
    </>
  )
}

interface Props {
  variant: string
  path: string
}

const Featured: FC<Props> = ({ variant, path }) => {
  const { data } = useQuery<
    SubMenuFeaturedProductQueryQuery,
    SubMenuFeaturedProductQueryQueryVariables
  >({
    ...SubMenuFeaturedProductQuery,
    variables: { value: path },
    suspense: false,
  })

  return (
    <Box variant={variant}>
      {data ? (
        <SubMenuFeatured data={data} variant={variant} />
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </Box>
  )
}

export const query = gql`
  query SubMenuFeaturedProductQuery($value: String) {
    vtex {
      productSearch(
        selectedFacets: [{ key: "c", value: $value }]
        from: 0
        to: 0
        hideUnavailableItems: true
      ) {
        products {
          ...ProductSummary_product
        }
      }
    }
  }
`

export default Featured
