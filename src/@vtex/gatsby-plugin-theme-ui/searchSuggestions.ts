import { SxStyleProp, createTheme } from '@vtex/store-ui'
import searchSuggestionsTheme from '@vtex/gatsby-theme-vtex/components/SearchSuggestions/theme'

const item: SxStyleProp = {
  '&:hover': {
    backgroundColor: '#d7eaff',
  },
}

const theme: SxStyleProp = createTheme(searchSuggestionsTheme, {
  suggestions: {
    color: 'primary',
    position: 'absolute',
    left: 0,

    products: {
      total: {
        color: 'primary',
      },

      button: {
        backgroundColor: 'inherit',
      },
    },

    autocomplete: {
      item,
    },

    history: {
      item,
    },

    topSearches: {
      item,
    },
  },
})

export default theme
