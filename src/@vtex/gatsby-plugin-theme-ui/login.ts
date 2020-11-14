import theme from '@vtex/gatsby-theme-vtex/components/Login/theme'
import { createTheme } from '@vtex/store-ui'

export default createTheme(theme, {
  login: { button: { container: { color: 'primary' } } },
})
