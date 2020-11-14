import { Flex, Image, Link, Text } from '@vtex/store-ui'
import React, { ElementType, FC } from 'react'

import PAYMENT_METHODS from './data.json'

interface PaymentSecutiryProps {
  variant: string
}

interface SectionProps {
  variant: string
  title: string
  type: 'cardList' | 'serviceList'
  as?: ElementType
}

const Section: FC<SectionProps> = ({
  variant,
  type,
  children,
  as = 'div',
  title,
}) => {
  const customVariant = `${variant}.section`

  return (
    <Flex variant={`${customVariant}`}>
      <Text variant={`${customVariant}.title`}>{title}</Text>
      <Flex as={as} variant={`${customVariant}.${type}`}>
        {children}
      </Flex>
    </Flex>
  )
}

const PaymentSecutiry: FC<PaymentSecutiryProps> = ({ variant }) => {
  const customVariant = `${variant}.paymentSecurity`

  return (
    <Flex variant={customVariant}>
      <Section
        variant={customVariant}
        type="cardList"
        title="Formas de pagamento"
      >
        {PAYMENT_METHODS.map((method) => (
          <Image
            width="42px"
            height="26px"
            loading="lazy"
            src={method.src}
            alt={method.alt}
            key={method.alt}
          />
        ))}
      </Section>
      <Section variant={customVariant} type="serviceList" title="Certificados">
        <Link href="https://letsencrypt.org/" rel="noreferrer" target="_blank">
          <Image
            width="90px"
            height="56px"
            loading="lazy"
            src="https://marinbrasil.vtexassets.com/assets/faststore/images/lets-encrypt___2d86d1252ec80ae59a15f1571454efcc.png?width=90&aspect=true"
            alt="Selo Clearsale"
          />
        </Link>
      </Section>
    </Flex>
  )
}

export default PaymentSecutiry
