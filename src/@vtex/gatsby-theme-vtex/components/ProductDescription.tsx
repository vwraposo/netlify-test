import { useIntl } from '@vtex/gatsby-plugin-i18n'
import {
  ProductDescription,
  ProductDescriptionTitle,
  Image,
  Flex,
} from '@vtex/store-ui'
import React, { FC, Fragment } from 'react'

interface Props {
  product: {
    description: string
  }
}

const Description: FC<Props> = ({ product: { description } }) => {
  const { formatMessage } = useIntl()

  if (description == null || description === '') {
    return null
  }

  return (
    <Fragment>
      <Flex variant="productDescription.container">
        <Image
          width="36px"
          height="36px"
          loading="lazy"
          src="https://marinbrasil.myvtexdev.com/assets/faststore/images/product-description___ce58032835db06b74c144ac20449249f.png"
          alt="Product Description"
        />
        <ProductDescriptionTitle>
          {formatMessage({ id: 'product.description.title' })}
        </ProductDescriptionTitle>
      </Flex>
      <ProductDescription data={description} />
    </Fragment>
  )
}

export default Description
