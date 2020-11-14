import {
  SxStyleProp,
  productSpecificationTheme as defaultProductSpecificationTheme,
  createTheme,
} from '@vtex/store-ui'

export const productSpecificationTheme: SxStyleProp = createTheme(
  defaultProductSpecificationTheme,
  {
    productSpecification: {
      bg: '#f2f2f2',
      color: '#6e6e6e',
      p: 3,

      container: {
        alignItems: 'center',
        paddingBottom: 3,
      },

      item: {
        p: 3,

        ':nth-of-type(even)': {
          bg: '#fff',
        },
      },

      title: {
        margin: '0px',
        ml: 2,
        color: '#666',
        letterSpacing: 0.6,
      },

      value: {
        ml: 3,
      },
    },
  }
)
