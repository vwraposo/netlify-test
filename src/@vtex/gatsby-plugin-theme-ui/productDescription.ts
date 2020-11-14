import {
  SxStyleProp,
  productDescriptionTheme as defaultProductDescriptionTheme,
  createTheme,
} from '@vtex/store-ui'

export const productDescriptionTheme: SxStyleProp = createTheme(
  defaultProductDescriptionTheme,
  {
    productDescription: {
      container: {
        alignItems: 'center',
      },
      title: {
        margin: '0px',
        ml: 2,
        color: '#666',
        letterSpacing: 0.6,
      },
      description: {
        p: 4,
        color: '#666',
        letterSpacing: 0.6,
        whiteSpace: 'break-spaces',
        lineHeight: '26px',
      },
    },
  }
)
