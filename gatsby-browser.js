/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import GTMProvider from '@vtex/gatsby-theme-vtex/src/sdk/pixel/GTM/index'

export const wrapRootElement = ({ element }) => (
  <GTMProvider gtmId="GTM-T247ZJJ">{element}</GTMProvider>
)
