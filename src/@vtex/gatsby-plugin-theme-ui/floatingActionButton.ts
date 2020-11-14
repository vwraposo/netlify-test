import {
  createTheme,
  floatingActionButtonTheme,
  SxStyleProp,
} from '@vtex/store-ui'

const custom: SxStyleProp = {
  floatingActionButton: {
    button: {
      backgroundColor: '#5ece61',

      '&:hover div': {
        display: ['none', 'flex'],
        opacity: 1,
        visibility: 'visible',
        width: '182px',
      },

      div: {
        display: ['none', 'flex'],
        visibility: 'hidden',
        position: 'absolute',
        zIndex: -1,
        opacity: 0,
        color: '#fff',
        background: '#5ece61',
        fontSize: '.9rem',
        textAlign: 'center',
        width: '150px',
        height: '67px',
        borderRadius: '500px 0 0 500px',
        right: '35px',
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        transition: '.5s ease-in-out',
        span: {
          display: 'block',
          fontSize: '1.2rem',
          fontWeight: '900',
        },
      },
    },
  },
}

export const floatingActionButton = createTheme(
  floatingActionButtonTheme,
  custom
)
