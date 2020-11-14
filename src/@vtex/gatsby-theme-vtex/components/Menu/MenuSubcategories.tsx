import React, { FC, useState } from 'react'
import { Box, Heading, LocalizedLink } from '@vtex/store-ui'

interface MenuItem {
  [key: string]: any
}

interface Props {
  variant: string
  item: MenuItem
}

const MenuSubcategoriesItem = ({
  variant,
  text,
  slug,
  isActive = false,
  onMouseEnter = () => null,
  onMouseLeave = () => null,
}: {
  variant: string
  text: string
  slug: string
  isActive?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) => (
  <Box
    as="li"
    variant={`${variant}.sub.item`}
    className={isActive ? 'subActived' : ''}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <LocalizedLink to={slug}>{text}</LocalizedLink>
  </Box>
)

const MenuSubcategories: FC<Props> = ({ variant, item }) => {
  const [subcategoryActived, setSubcategoryActived] = useState<string>('')

  return (
    <Box variant={`${variant}.subcategories`}>
      <Heading as="h2">{item.name}</Heading>
      <Box as="ul" variant={`${variant}.sub`}>
        {item.subCategories.length > 0 ? (
          item.subCategories.map((subcategory: MenuItem) => (
            <MenuSubcategoriesItem
              onMouseEnter={() => setSubcategoryActived(subcategory.name)}
              onMouseLeave={() => setSubcategoryActived('')}
              key={subcategory.name}
              variant={variant}
              text={subcategory.name}
              isActive={subcategoryActived === subcategory.name}
              slug={subcategory.slug}
            />
          ))
        ) : (
          <MenuSubcategoriesItem
            onMouseEnter={() => setSubcategoryActived(item.name)}
            onMouseLeave={() => setSubcategoryActived('')}
            variant={variant}
            text="Ir para categoria"
            isActive={subcategoryActived === item.name}
            slug={item.slug}
          />
        )}
      </Box>
    </Box>
  )
}

export default MenuSubcategories
