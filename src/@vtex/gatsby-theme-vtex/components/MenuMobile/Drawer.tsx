/** @jsx jsx */
import {
  Box,
  Button,
  Drawer,
  Flex,
  Heading,
  jsx,
  LocalizedLink,
} from '@vtex/store-ui'
import { FC, useCallback } from 'react'
import BaseAccordion from '@vtex-components/accordion'

import { MENU } from '../Menu/constants'
import { MenuAccordionCollapsibleIcon } from './MenuAccordionCollapsibleIcon'

interface MenuMobileDrawerProps {
  variant: string
  onClose?: () => void
  isOpen: boolean
}

const MenuMobileDrawer: FC<MenuMobileDrawerProps> = ({
  variant,
  onClose,
  isOpen,
}) => {
  const renderIcon = useCallback(
    (active: boolean) => (
      <MenuAccordionCollapsibleIcon
        isActive={active}
        variant={`${variant}.accordion.collapsible.header`}
      />
    ),
    [variant]
  )

  return (
    <Drawer
      variant={variant}
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      width="85%"
    >
      <Flex sx={{ p: 2 }}>
        <Button onClick={onClose} variant={`${variant}.button`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="30px"
            height="30px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        </Button>
      </Flex>
      <Heading sx={{ my: 2, textAlign: 'center', textTransform: 'uppercase' }}>
        Categorias
      </Heading>
      <BaseAccordion
        variant={`${variant}.accordion`}
        mode="multiOpen"
        renderIcon={renderIcon}
      >
        {MENU.map((item, index) => (
          <BaseAccordion.Section
            key={`${item.name}:${index}`}
            header={
              <Box variant={`${variant}.accordion.collapsible.header`}>
                {item.name}
              </Box>
            }
          >
            <Box as="ul" variant={`${variant}.accordion.collapsible`}>
              <Box as="li" variant={`${variant}.accordion.collapsible.seeAll`}>
                <LocalizedLink to={item.slug} onClick={onClose}>
                  Ver todos
                </LocalizedLink>
              </Box>
              {item.subCategories.map((subcategory, idx) => (
                <Box
                  as="li"
                  key={`${item.name}:${idx}`}
                  variant={`${variant}.accordion.collapsible.item`}
                >
                  <LocalizedLink to={subcategory.slug ?? ''} onClick={onClose}>
                    {subcategory.name}
                  </LocalizedLink>
                </Box>
              ))}
            </Box>
          </BaseAccordion.Section>
        ))}
      </BaseAccordion>
    </Drawer>
  )
}

export default MenuMobileDrawer
