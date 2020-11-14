import React from 'react'
import { Container } from '@vtex/store-ui'

import Institutional from './Institutional'
import Menu from './Menu'
import Newsletter from './Newsletter'
import PaymentSecutiry from './PaymentSecurity'

const CustomFooter = () => (
  <Container>
    <Newsletter variant="footer" />
    <Menu variant="footer" />
    <Institutional variant="footer" />
    <PaymentSecutiry variant="footer" />
  </Container>
)

export default CustomFooter
