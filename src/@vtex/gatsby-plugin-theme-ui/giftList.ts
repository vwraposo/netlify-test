import { SxStyleProp } from '@vtex/store-ui'

const theme: SxStyleProp = {
  title: {
    color: '#05377f',
    fontSize: '15px',
    fontWeight: 700,
    my: '35px',
  },

  list: {
    maxHeight: '100px',
    overflowY: 'scroll',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}

export default { giftList: { default: theme } }
