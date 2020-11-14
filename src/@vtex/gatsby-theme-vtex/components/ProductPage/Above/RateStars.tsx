import React, { FC } from 'react'

interface Props {
  productId: string
}

const RateStars: FC<Props> = ({ productId }) => (
  <div data-trustvox-product-code={productId} />
)

export default RateStars
