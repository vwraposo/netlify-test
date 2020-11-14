import { createTheme, headerTheme, SxStyleProp } from '@vtex/store-ui'

import { menu } from './menu'

const custom: SxStyleProp = {
  header: {
    bg: 'background',
    left: 0,
    position: 'fixed',
    py: [2, 0],
    px: [2, 0],
    right: 0,
    top: 0,
    zIndex: 999,
    borderBottomColor: ['secondary', 'transparent'],
    borderBottomWidth: '3px',
    borderBottomStyle: 'solid',

    container: {
      mb: [2, 0],
      alignItems: 'center',
      justifyContent: ['space-between', 'center'],
      display: 'flex',
      bg: 'background',
      zIndex: '999',
    },

    logo: {
      maxWidth: ['180px', 'none'],
      marginRight: [0, 4],
    },

    signin: {
      bg: 'background',
      color: 'primary',
      mx: [2, 4],
    },

    ...menu,
  },
}

export const header = createTheme(headerTheme, custom)
