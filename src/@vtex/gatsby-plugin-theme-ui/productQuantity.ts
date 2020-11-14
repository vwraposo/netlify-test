import {
  SxStyleProp,
  productQuantityTheme as defaultProductQuantityTheme,
  createTheme,
} from '@vtex/store-ui'

export const productQuantityTheme: SxStyleProp = createTheme(
  defaultProductQuantityTheme,
  {
    productQuantity: {
      numericStepper: {
        input: {
          p: '8px',
        },
        button: {
          plus: {
            cursor: 'pointer',
          },
          minus: {
            cursor: 'pointer',
          },
        },
      },
    },
  }
)
