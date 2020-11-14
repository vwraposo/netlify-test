import React from 'react'

import InstitutionalPage from '../../components/InstitutionalPage/InstitutionalPage'
import file from '../../components/InstitutionalPage/Markdown/politica-de-compra.md'
import { institutionalMenuItems } from '../../components/InstitutionalPage/menuItems'

const PurchasingPolicyPage = () => (
  <InstitutionalPage
    title={institutionalMenuItems['politica-de-compra'].title}
    content={file}
  />
)

export default PurchasingPolicyPage
