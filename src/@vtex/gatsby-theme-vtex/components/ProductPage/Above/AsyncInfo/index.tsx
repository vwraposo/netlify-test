import { useAsyncProduct } from '@vtex/gatsby-theme-vtex/src/components/ProductPage/useAsyncProduct'
import ShippingSimulator from '@vtex/gatsby-theme-vtex/src/components/ShippingSimulator'
import { useBestSeller } from '@vtex/gatsby-theme-vtex/src/sdk/product/useBestSeller'
import { useSku } from '@vtex/gatsby-theme-vtex/src/sdk/product/useSku'
import { Flex, NumericStepper, ProductQuantityTitle } from '@vtex/store-ui'
import React, { FC } from 'react'

import Offer from '../../../Offer'
import BuyButton from './BuyButton'
import CEPLink from './CEPLink'
import Gift from './Gift'
import Installments from './Installments'

interface Props {
  slug: string
}

const AsyncInfo: FC<Props> = ({ slug }) => {
  const { product }: any = useAsyncProduct({ slug })
  const sku: any = useSku(product)
  const { commercialOffer, sellerId } = useBestSeller(sku)

  const [productQuantity, setQuantity] = React.useState<number>(1)

  function updateQuantity(value: number) {
    setQuantity(value)
  }

  if (product === null || sku === null) {
    return null
  }

  return (
    <>
      <Offer variant="productDetails" commercialOffer={commercialOffer} />
      <Installments offer={commercialOffer} />
      <Flex variant="offer.productDetails.offerButtons">
        <Flex sx={{ flexDirection: 'column' }}>
          <ProductQuantityTitle>Quantidade</ProductQuantityTitle>
          <NumericStepper
            onChange={updateQuantity}
            minValue={1}
            maxValue={99}
          />
        </Flex>
        <BuyButton sku={sku} productQuantity={productQuantity} />
      </Flex>
      <ShippingSimulator
        quantity={productQuantity}
        variant="productPage"
        country="BRA"
        skuId={sku?.itemId}
        seller={sellerId}
      />
      <CEPLink />
      <Gift gifts={commercialOffer.gifts} />
    </>
  )
}

export default AsyncInfo
