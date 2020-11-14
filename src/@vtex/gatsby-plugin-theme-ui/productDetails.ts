import { SxStyleProp } from '@vtex/store-ui'

const productDetails: SxStyleProp = {
  reference: {
    fontSize: '12px',
    color: '#727273',
  },

  title: {
    color: 'primary',
    fontSize: '24px',
    my: 3,
  },

  container: {
    px: 0,
  },
}

export default {
  productDetails: { default: productDetails },
}
