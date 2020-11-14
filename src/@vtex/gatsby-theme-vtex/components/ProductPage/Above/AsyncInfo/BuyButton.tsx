/** @jsx jsx */
import { FC } from 'react'
import {
  useBuyButton,
  SKU,
} from '@vtex/gatsby-theme-vtex/src/sdk/buyButton/useBuyButton'
import { Button, jsx, Spinner, SxStyleProp } from '@vtex/store-ui'

interface Props {
  sku: SKU | undefined | null
  productQuantity: number
}

const styles: SxStyleProp = {
  px: '24px',
  fontWeight: 500,
  minHeight: '48px',
  textTransform: 'uppercase',
  backgroundColor: '#0f3e99',
  minWidth: '130px',

  '&:hover': {
    backgroundColor: '#072c75',
  },

  '&:disabled': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
}

const BuyButton: FC<Props> = ({ sku, productQuantity }) => {
  const { loading, ...btnProps } = useBuyButton(sku, productQuantity)

  return (
    <Button sx={styles} {...btnProps}>
      {loading ? <Spinner size="20px" /> : 'Comprar'}
    </Button>
  )
}

export default BuyButton
