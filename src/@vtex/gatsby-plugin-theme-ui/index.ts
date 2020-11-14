import { createTheme, infoCardTheme } from '@vtex/store-ui'

import { base } from './base'
import { breadcrumb } from './breadcrumb'
import { custom } from './custom'
import { footer } from './footer'
import { header } from './header'
import { layout } from './layout'
import { minicart } from './minicart'
import { floatingActionButton } from './floatingActionButton'
import { searchControlsTheme } from './searchControls'
import { searchFilterTheme } from './searchFilter'
import { productSpecificationTheme } from './productSpecification'
import searchBarTheme from './searchBar'
import searchSuggestionsTheme from './searchSuggestions'
import { productDescriptionTheme } from './productDescription'
import productDetailsTheme from './productDetails'
import productSummaryTheme from './productSummary'
import offerTheme from './offer'
import giftList from './giftList'
import { shippingSimulatorTheme } from './shippingSimulator'
import sliderThemes from './slider'
import authTheme from './auth'
import loginTheme from './login'
import { institutionalTheme } from './institutional'
import { productQuantityTheme } from './productQuantity'

const theme = createTheme(
  base,
  breadcrumb,
  header,
  minicart,
  layout,
  footer,
  floatingActionButton,
  infoCardTheme,
  searchBarTheme,
  searchFilterTheme,
  searchControlsTheme,
  searchSuggestionsTheme,
  productSpecificationTheme,
  custom,
  productDescriptionTheme,
  productSummaryTheme,
  productDetailsTheme,
  offerTheme,
  giftList,
  shippingSimulatorTheme,
  sliderThemes,
  authTheme,
  loginTheme,
  institutionalTheme,
  productQuantityTheme,
  custom,
)

export default theme
