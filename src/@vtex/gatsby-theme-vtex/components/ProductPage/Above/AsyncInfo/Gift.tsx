import React, { FC } from 'react'
import {
  Image,
  Box,
  Flex,
  GiftList,
  GiftListList,
  GiftListTitle,
} from '@vtex/store-ui'
import { useSummaryImage } from '@vtex/gatsby-theme-vtex/src/sdk/product/useSummaryImage'

interface Gift {
  skuName: string
  images: Array<{
    imageUrl: string
  }>
}

interface Props {
  gifts: Gift[] | undefined | null
}

const GiftListItem: FC<Gift> = ({ skuName, images: [{ imageUrl }] }) => {
  const img = useSummaryImage(imageUrl)

  return (
    <Flex
      sx={{
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image {...img} />
      <Box
        sx={{
          color: '#666666',
          fontSize: '12px',
        }}
      >
        {skuName}
      </Box>
    </Flex>
  )
}

const Gift: FC<Props> = ({ gifts }) => {
  if (gifts == null || gifts.length === 0) {
    return null
  }

  return (
    <GiftList>
      <GiftListTitle>
        Compre este produto e ganhe um dos brinde(s) abaixo:
      </GiftListTitle>
      <GiftListList list={gifts} ItemComponent={GiftListItem} />
    </GiftList>
  )
}

export default Gift
