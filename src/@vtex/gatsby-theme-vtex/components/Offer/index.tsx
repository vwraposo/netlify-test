import React, { FC } from 'react'
import { useNumberFormat } from '@vtex/gatsby-theme-vtex/src/sdk/localization/useNumberFormat'
import { useListPrice } from '@vtex/gatsby-theme-vtex/src/sdk/offer/useListPrice'
import { useDiscount } from '@vtex/gatsby-theme-vtex/src/sdk/offer/useDiscount'
import {
  Box,
  OfferPrice,
  OfferSoldOut,
  OfferContainer,
  OfferListPrice,
  OfferInstallments,
  OfferDiscountBadge,
} from '@vtex/store-ui'

import { usePrice } from './usePrice'

interface Installment {
  value: number
  numberOfInstallments: number
}

interface Props {
  commercialOffer: {
    price: number
    listPrice: number
    teasers: Array<{ name?: string }>
    maxInstallments: Installment[]
  }
  variant?: string
}

const Offer: FC<Props> = ({
  commercialOffer,
  commercialOffer: {
    maxInstallments: [maxInstallments],
  },
  variant = 'offer',
}) => {
  const { format } = useNumberFormat()
  const { price, discount: aVistaDiscount } = usePrice(commercialOffer)
  const listPrice = useListPrice(commercialOffer)
  const discount = useDiscount(commercialOffer)

  return (
    <OfferContainer variant={variant}>
      {price === 0 ? (
        <OfferSoldOut variant={variant}>
          Ops! Este produto esgotou :(
        </OfferSoldOut>
      ) : (
        <>
          <Box variant={`offer.${variant}.discountBox`}>
            <OfferListPrice variant={variant}>{listPrice}</OfferListPrice>
            <OfferDiscountBadge variant={variant}>
              {discount ? `-${discount}%` : discount}
            </OfferDiscountBadge>
          </Box>

          <OfferPrice variant={variant}>
            {format(price)}
            <span>
              {' '}
              à vista {aVistaDiscount > 0 ? `(${aVistaDiscount}% off)` : null}
            </span>
          </OfferPrice>

          <OfferInstallments variant={variant}>
            {maxInstallments ? (
              <>
                <span> ou {maxInstallments.numberOfInstallments}x</span>
                <strong> {format(maxInstallments.value)} sem juros</strong>
              </>
            ) : null}
          </OfferInstallments>
        </>
      )}
    </OfferContainer>
  )
}

export default Offer
