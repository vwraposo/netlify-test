import React, { FC } from 'react'
import { Box } from '@vtex/store-ui'

const ShelfProductsTitle: FC = ({ children }) => (
  <>
    {children}
    <Box variant="shelf.default.title.bar" />
  </>
)

export default ShelfProductsTitle
