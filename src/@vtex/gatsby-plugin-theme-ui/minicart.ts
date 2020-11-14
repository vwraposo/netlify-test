import { createTheme, minicartTheme, SxStyleProp } from '@vtex/store-ui'

const btn = {
  padding: 0,
  maxWidth: 40,
  minWidth: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  cursor: 'pointer',
}

const custom: SxStyleProp = {
  minicart: {
    borderRadius: [4, 0],
    overflow: 'hidden',
    height: [48, 56],
    minWidth: [48, 72],
    maxWidth: [48, 72],
    display: 'flex',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'secondary',
    position: 'relative',
    marginLeft: 0,
    cursor: 'pointer',
    borderBottom: '3px solid #CD8D06',
    borderRight: '1px solid #E6A316',
    boxSizing: 'border-box',

    badge: {
      position: 'absolute',
      textAlign: 'center',
      bg: '#C00',
      borderRadius: '0 0 0 4px',
      color: '#FFF',
      fontSize: '11px',
      padding: '0 3px',
      height: 'auto',
      width: 'auto',
    },

    drawer: {
      header: {
        close: btn,
      },
      content: {
        quantity: {
          width: 100,
          border: '2px solid #e3e4e6',

          wrapper: {
            marginTop: 3,
            alignItems: 'center',

            spinner: {
              marginLeft: 2,
            },
          },
        },
        delete: {
          marginLeft: 2,
          ...btn,
        },
      },
    },
  },
}

export const minicart = createTheme(minicartTheme, custom)
