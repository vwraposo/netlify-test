import { Box } from '@vtex/store-ui'
import React, { FC, useMemo } from 'react'

interface ProductCluster {
  name: string
}

interface Props {
  productClusters: ProductCluster[]
}

const FreeShippingFlag: FC<Props> = ({ productClusters }) => {
  const shippingIndex = useMemo(
    () =>
      productClusters?.findIndex(
        ({ name }: { name: string }) => name === 'Frete Grátis'
      ),
    [productClusters]
  )

  if (shippingIndex === undefined || shippingIndex < 0) {
    return null
  }

  return (
    <Box
      sx={{
        backgroundColor: '#cf3e00',
        fontSize: '9.6px',
        color: 'white',
        py: '5px',
        px: '8px',
      }}
    >
      Frete Grátis Brasil
    </Box>
  )
}

export default FreeShippingFlag
