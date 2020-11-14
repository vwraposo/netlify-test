import { Box, LocalizedLink } from '@vtex/store-ui'
import React, { FC, lazy, Suspense, useState } from 'react'

const Featured = lazy(() => import('./Featured'))

export interface MenuItemValue {
  name: string
  slug: string
  subCategories: Array<{ name: string; slug: string }>
}
interface MenuItemProps {
  value: MenuItemValue
  variant: string
}

const MenuItem: FC<MenuItemProps> = ({ value, variant }) => {
  const [menuVisible, setMenuVisible] = useState<string>('')
  const [submenuVisible, setSubmenuVisible] = useState<string>('')

  return (
    <Box
      as="li"
      variant={`${variant}.list.item`}
      onMouseEnter={() => setMenuVisible(value.slug)}
      onMouseLeave={() => setMenuVisible('')}
    >
      <LocalizedLink to={value.slug}>{value.name}</LocalizedLink>
      {value.subCategories.length > 0 && menuVisible !== '' ? (
        <Box variant={`${variant}.subcategories`} className="subcategories">
          <Box as="ul" variant={`${variant}.sub`}>
            {value.subCategories.map((submenu) => (
              <Box
                as="li"
                key={submenu.name}
                variant={`${variant}.sub.item`}
                className={submenuVisible === submenu.name ? 'subActived' : ''}
                onMouseEnter={() => setSubmenuVisible(submenu.name)}
                onMouseLeave={() => setSubmenuVisible('')}
              >
                <LocalizedLink to={submenu.slug}>{submenu.name}</LocalizedLink>
              </Box>
            ))}
          </Box>
          <Suspense fallback={null} key={menuVisible}>
            <Featured path={menuVisible} variant={`${variant}.featured`} />
          </Suspense>
        </Box>
      ) : null}
    </Box>
  )
}

export default MenuItem
