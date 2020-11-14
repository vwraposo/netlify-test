import { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
  container: {
    margin: ['auto', 'initial'],
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
    padding: '15px',
    paddingBottom: '0px',
    transition: 'all .15s ease',
    borderRight: '1px solid #e2e2e2',
    border: '3px solid transparent',
    outline: '1px solid #eee !important',
    textDecoration: 'none',
    color: 'text',
    flexGrow: 1,

    '&:hover': {
      boxShadow: '0 0 15px rgba(204,204,204,.5)',
    },

    '&:hover .buyButton': {
      backgroundColor: 'primary',
      fill: 'white',
      transitionDuration: '0.2s',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in-out',
    },
  },

  title: {
    fontWeight: 400,
    fontSize: '14px',
    height: '125px',
    color: '#071923',
    marginTop: '1rem',
  },

  image: {
    width: '100%',
  },
}

export default { productSummary: { default: productSummary } }
