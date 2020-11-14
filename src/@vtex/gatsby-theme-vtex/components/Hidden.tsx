/** @jsx jsx */
import { jsx } from '@vtex/store-ui'
import { FC } from 'react'

type HiddenProps = {
  device: 'mobile' | 'desktop'
}

export const Hidden: FC<HiddenProps> = ({ children, device }) => (
  <div
    sx={{
      display:
        device === 'mobile' ? ['none', 'contents'] : ['contents', 'none'],
    }}
  >
    {children}
  </div>
)
