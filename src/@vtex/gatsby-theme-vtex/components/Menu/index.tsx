import { useIntl } from '@vtex/gatsby-plugin-i18n'
import {
  Box,
  Button,
  Container,
  Flex,
  LocalizedLink,
  Image,
} from '@vtex/store-ui'
import React, { FC, useState } from 'react'

import { MENU } from './constants'
import MenuItem, { MenuItemValue } from './Item'
import MenuSubcategories from './MenuSubcategories'
import useHideElementOnScroll from './useHideElementOnScroll'

type Variant = { variant: string }

const MenuContainer: FC<Variant> = ({ children, variant }) => {
  const hidden = useHideElementOnScroll()

  return (
    <Flex variant={variant} className={hidden ? 'hide' : 'show'}>
      <Container variant={`${variant}.container`}>{children}</Container>
    </Flex>
  )
}

MenuContainer.displayName = 'MenuContainer'

const CustomMenu: FC<Variant> = ({ variant }) => {
  const { formatMessage } = useIntl()

  const outletProps = {
    variant: `${variant}.outlet`,
    as: LocalizedLink,
    to: '/outlet',
  }

  const [subMenuVisible, setSubMenuVisible] = useState<string>('')

  return (
    <MenuContainer variant={variant}>
      <Flex as="ul" variant={`${variant}.list`}>
        <Box as="li" variant={`${variant}.list.all`}>
          <Flex variant={`${variant}.allDepartaments`}>
            <Flex variant={`${variant}.allDepartaments.svg`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
              </svg>
            </Flex>
            <span>{formatMessage({ id: 'menu.allDepartaments' })}</span>
          </Flex>
          <Box variant={`${variant}.allItems`} className="allItems">
            <Box as="ul" variant={`${variant}.allItems.list`}>
              {MENU.map((item) => (
                <Box
                  as="li"
                  key={item.name}
                  onMouseEnter={() => setSubMenuVisible(item.name)}
                  onMouseLeave={() => setSubMenuVisible('')}
                >
                  <LocalizedLink
                    to={item.slug ?? ''}
                    className={
                      subMenuVisible === item.name
                        ? 'categoryLinkActived categoryLink'
                        : 'categoryLink'
                    }
                  >
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 492 492"
                      width="12"
                      height="12"
                    >
                      <path
                        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
                        fill="white"
                      />
                    </svg>
                  </LocalizedLink>
                  {subMenuVisible === item.name && (
                    <MenuSubcategories
                      variant={`${variant}.allDepartments`}
                      item={item}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {MENU.map((menu) => {
          if (menu.visible) {
            return (
              <MenuItem
                variant={variant}
                value={menu as MenuItemValue}
                key={menu.name}
              />
            )
          }

          return null
        })}
        <Button {...outletProps}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.27"
            height="20.27"
            viewBox="0 0 20.27 20.27"
          >
            <g id="free" transform="translate(0 -0.001)">
              <g transform="translate(0 0.001)">
                <g id="Grupo_3" transform="translate(0)">
                  <path
                    d="M20.24,7.826l-.966-5.342A1.854,1.854,0,0,0,17.786,1L12.445.031a1.847,1.847,0,0,0-1.633.511L.54,10.813a1.848,1.848,0,0,0,0,2.61l6.307,6.307a1.848,1.848,0,0,0,2.61,0L19.729,9.459A1.846,1.846,0,0,0,20.24,7.826Zm-1.352.793L8.617,18.89a.658.658,0,0,1-.929,0L1.38,12.583a.658.658,0,0,1,0-.929L11.652,1.382a.657.657,0,0,1,.581-.182l5.342.966a.66.66,0,0,1,.53.53l.966,5.342A.657.657,0,0,1,18.888,8.619Z"
                    transform="translate(0 -0.001)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g id="Grupo_6" transform="translate(13.77 3.231)">
                <g id="Grupo_5">
                  <path
                    d="M350.6,82.074a1.627,1.627,0,1,0,.477,1.151A1.629,1.629,0,0,0,350.6,82.074Zm-.841,1.461h0a.438.438,0,1,1,.128-.31A.439.439,0,0,1,349.757,83.535Z"
                    transform="translate(-347.821 -81.598)"
                    fill="#fff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <span>Outlet</span>
        </Button>
      </Flex>
    </MenuContainer>
  )
}

export default CustomMenu
