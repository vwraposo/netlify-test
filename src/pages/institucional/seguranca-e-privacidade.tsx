import React from 'react'

import InstitutionalPage from '../../components/InstitutionalPage/InstitutionalPage'
import file from '../../components/InstitutionalPage/Markdown/seguranca-e-privacidade.md'
import { institutionalMenuItems } from '../../components/InstitutionalPage/menuItems'

const PrivacyPolicyPage = () => (
  <InstitutionalPage
    title={institutionalMenuItems['seguranca-e-privacidade'].title}
    content={file}
  />
)

export default PrivacyPolicyPage
