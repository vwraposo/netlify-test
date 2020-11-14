import React, { FC } from 'react'
import { Box } from '@vtex/store-ui'

interface Props {
  isActive: boolean
  variant: string
}

export const MenuAccordionCollapsibleIcon: FC<Props> = ({
  isActive,
  variant,
}) => <Box variant={`${variant}.icon`}>{isActive ? '-' : '+'}</Box>
