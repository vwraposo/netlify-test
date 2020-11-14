import React from 'react'

import InstitutionalPage from '../../components/InstitutionalPage/InstitutionalPage'
import file from '../../components/InstitutionalPage/Markdown/quem-somos.md'
import { institutionalMenuItems } from '../../components/InstitutionalPage/menuItems'

const WhoWeArePage = () => (
  <InstitutionalPage
    title={institutionalMenuItems['quem-somos'].title}
    content={file}
  />
)

export default WhoWeArePage
