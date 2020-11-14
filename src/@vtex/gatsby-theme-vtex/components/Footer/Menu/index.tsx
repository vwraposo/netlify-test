import { Flex, Text, Link as LinkUI, Box, Image } from '@vtex/store-ui'
import React, { FC } from 'react'
import { Link } from 'gatsby'

import MENU_CATEGORIES from './data.json'

interface MenuProps {
  variant: string
}

interface SectionProps {
  variant: string
  title: string
  type?: 'list' | 'node'
}

const Section: FC<SectionProps> = ({
  variant,
  children,
  title,
  type = 'list',
}) => {
  const customVariant = `${variant}.section`

  return (
    <Flex variant={`${customVariant}`}>
      <Text variant={`${customVariant}.title`}>{title}</Text>
      <Flex
        as={type === 'list' ? 'ul' : 'div'}
        variant={`${customVariant}.${type}`}
      >
        {children}
      </Flex>
    </Flex>
  )
}

const Menu: FC<MenuProps> = ({ variant }) => {
  const customVariant = `${variant}.menu`

  return (
    <Flex variant={customVariant}>
      <Section variant={customVariant} title="Mais buscados">
        <Box sx={{ columnCount: 2 }}>
          {MENU_CATEGORIES.map((category) => (
            <Flex as="li" key={category.to}>
              <Link to={category.to}>{category.text}</Link>
            </Flex>
          ))}
        </Box>
      </Section>
      <Section variant={customVariant} title="Institucional">
        <Flex as="li">
          <Link to="/institucional/quem-somos">Quem Somos</Link>
        </Flex>
        <Flex as="li">
          <Link to="/institucional/politica-de-compra">Política de Compra</Link>
        </Flex>
        <Flex as="li">
          <Link to="/institucional/seguranca-e-privacidade">
            Segurança e Privacidade
          </Link>
        </Flex>
        <Flex as="li">
          <Link to="/institucional/trocas-e-devolucoes">
            Trocas e Devoluções
          </Link>
        </Flex>
        <Flex as="li">
          <LinkUI
            rel="noreferrer"
            href="https://www.tramontina.com.br/atendimento-suporte/assistencia-tecnica"
            target="_blank"
          >
            Assistência Técnica
          </LinkUI>
        </Flex>
      </Section>
      <Section variant={customVariant} title="Atendimento">
        <Flex as="li">
          <Text>0800 647 7804</Text>
        </Flex>
        <Flex as="li">
          <Link to="/institucional/contato">Fale Conosco</Link>
        </Flex>
        <Flex as="li" sx={{ alignItems: 'center' }}>
          <Image
            width="20px"
            height="20px"
            loading="lazy"
            src="https://marinbrasil.vtexassets.com/_v/public/assets/v1/published/marinbrasil.store-footer@2.19.4/public/react/4a66c82106a13e8002f762a4ea25464c.svg"
            alt="skype"
          />
          <Box sx={{ marginLeft: '0.5rem' }}>
            <span>vendas_10522</span>
          </Box>
        </Flex>
        <Flex as="li">
          <LinkUI
            href="https://wa.me/555432617804"
            rel="noreferrer"
            target="_blank"
          >
            <Flex sx={{ alignItems: 'center' }}>
              <Image
                width="20px"
                height="20px"
                loading="lazy"
                src="https://marinbrasil.vtexassets.com/_v/public/assets/v1/published/marinbrasil.store-footer@2.19.4/public/react/8aff78ad6ce9a6673461a6e7560c2110.svg"
                alt="whatsapp"
              />
              <Box sx={{ marginLeft: '0.5rem' }}>
                <span>54 3261 7804</span>
              </Box>
            </Flex>
          </LinkUI>
        </Flex>
      </Section>
      <Section variant={customVariant} title="Redes sociais" type="node">
        <LinkUI
          href="https://www.facebook.com/marinbrasil/"
          rel="noreferrer"
          target="_blank"
          sx={{ marginRight: '8px' }}
        >
          <Image
            width="32px"
            height="32px"
            loading="lazy"
            src="https://www.marinbrasil.com.br/_v/public/assets/v1/published/marinbrasil.store-footer@2.19.4/public/react/ebd4bd10e66138168eb6a582e00790ea.svg"
            alt="facebook"
          />
        </LinkUI>
        <LinkUI
          href="https://www.instagram.com/marinbrasil/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            width="32px"
            height="32px"
            loading="lazy"
            src="https://www.marinbrasil.com.br/_v/public/assets/v1/published/marinbrasil.store-footer@2.19.4/public/react/6a61a302319c062aceb9562a66381a63.svg"
            alt="instagram"
          />
        </LinkUI>
      </Section>
    </Flex>
  )
}

export default Menu
