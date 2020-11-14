/** @jsx jsx */
import { FC } from 'react'
import {
  useBuyButton,
  SKU,
} from '@vtex/gatsby-theme-vtex/src/sdk/buyButton/useBuyButton'
import { Box, jsx, Spinner, SxStyleProp } from '@vtex/store-ui'

interface Props {
  sku: SKU | null | undefined
}

const cart = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.343 511.343">
    <g>
      <path d="m490.334 106.668h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468c12.825 142.882-20.321-226.415 24.153 269.089 1.714 19.394 12.193 40.439 30.245 54.739-32.547 41.564-2.809 102.839 50.134 102.839 43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zm-341.334 341.337c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726-323.397 19.005-13.34-148.617h369.142z" />
    </g>
  </svg>
)

const styles: SxStyleProp = {
  borderColor: 'transparent',
  borderBottomRightRadius: '4px',
  borderTopLeftRadius: '4px',
  backgroundColor: 'white',
  alignSelf: 'flex-end',
  marginRight: '-15px',
  cursor: 'pointer',
  fill: '#757575',
  padding: '12px',
  height: '50px',
  width: '50px',
}

const ProductSummaryBuyButton: FC<Props> = ({ sku }) => {
  const { loading, ...btnProps } = useBuyButton(sku, 1)

  if (loading) {
    return (
      <Box
        sx={{
          ...styles,
          backgroundColor: '#f2f2f2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...btnProps}
      >
        {<Spinner size="20px" />}
      </Box>
    )
  }

  return (
    <Box sx={styles} {...btnProps} className="buyButton">
      {cart}
    </Box>
  )
}

export default ProductSummaryBuyButton
