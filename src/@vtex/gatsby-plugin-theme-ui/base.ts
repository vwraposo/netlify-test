import { baseTheme, createTheme } from '@vtex/store-ui'

const custom = {
  colors: {
    primary: '#00397b',
    secondary: '#F6B428',
  },
  sizes: {
    container: '80em',
  },
  layout: {
    container: {
      px: [2, 2, 0],
    },
  },
  breakpoint: ['80em', '56em', 'container'],
}

export const base = createTheme(baseTheme, custom as any)
