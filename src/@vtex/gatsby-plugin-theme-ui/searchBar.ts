import { SxStyleProp, createTheme } from '@vtex/store-ui'
import theme from '@vtex/gatsby-theme-vtex/components/SearchBar/theme'

const searchBarTheme: SxStyleProp = createTheme(theme, {
  searchbar: {
    container: {
      flex: 1,
      width: '100%',
      maxWidth: 'none',
      m: 0,
      minHeight: '44px',
      borderRadius: 4,
    },
  },
})

export default searchBarTheme
