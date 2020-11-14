import React from 'react'

import InstitutionalPage from '../../components/InstitutionalPage/InstitutionalPage'
import file from '../../components/InstitutionalPage/Markdown/trocas-e-devolucoes.md'
import { institutionalMenuItems } from '../../components/InstitutionalPage/menuItems'

const ReturnsPage = () => (
  <InstitutionalPage
    title={institutionalMenuItems['trocas-e-devolucoes'].title}
    content={file}
  />
)

export default ReturnsPage
