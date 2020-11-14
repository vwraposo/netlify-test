import { useIntl } from '@vtex/gatsby-plugin-i18n'
import {
  Flex,
  Image,
  ProductSpecificationGroup,
  ProductSpecificationItem,
  ProductSpecificationTitle,
} from '@vtex/store-ui'
import React, { FC, Fragment, useMemo } from 'react'

interface Props {
  product: {
    specificationGroups: ProductSpecificationGroup[]
  }
}

const ProductSpecification: FC<Props> = ({
  product: { specificationGroups },
}) => {
  const { formatMessage } = useIntl()
  const specification = useMemo(
    () => specificationGroups.find((item) => item.name === 'allSpecifications'),
    [specificationGroups]
  )

  if (specification === undefined) {
    return null
  }

  const { specifications } = specification

  if (specifications?.length === 0) {
    return null
  }

  return (
    <Fragment>
      <Flex variant="productSpecification.container">
        <Image
          width="36px"
          height="36px"
          loading="lazy"
          src="https://marinbrasil.myvtexdev.com/assets/faststore/images/product-specification___8d72eb9b0050f1c1b5cc1685a1821342.png"
          alt="Product Specification"
        />
        <ProductSpecificationTitle>
          {formatMessage({ id: 'product.specification.title' })}
        </ProductSpecificationTitle>
      </Flex>
      <ProductSpecificationItem data={specifications} />
    </Fragment>
  )
}

export default ProductSpecification
