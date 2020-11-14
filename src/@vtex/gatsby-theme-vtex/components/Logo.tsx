import React, { FC } from 'react'
import { Logo } from '@vtex/store-ui'

const CustomLogo: FC<{ variant: string }> = ({ variant }) => (
  <Logo
    variant={variant}
    title="Marin Brasil"
    height="39px"
    viewBox="0 0 307 39"
    src="https://marinbrasil.vtexassets.com/assets/faststore/images/logo___68742c9ef33412b4d222d3a1890f4fc4.png"
  />
)

export default CustomLogo
