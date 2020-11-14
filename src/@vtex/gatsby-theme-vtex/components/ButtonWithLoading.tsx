import React, { FC, ComponentPropsWithoutRef } from 'react'
import { Button, Spinner, SxStyleProp } from '@vtex/store-ui'

interface Props extends ComponentPropsWithoutRef<typeof Button> {
  loading: boolean
}

const defaultStyles: SxStyleProp = {
  px: '24px',
  fontWeight: 500,
  textTransform: 'uppercase',
  backgroundColor: '#0f3e99',
  minWidth: '130px',

  '&:hover': {
    backgroundColor: '#072c75',
    cursor: 'pointer',
  },

  '&:disabled': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
}

const ButtonWithLoading: FC<Props> = ({ sx, loading, children, ...props }) => {
  return (
    <Button
      sx={{
        ...defaultStyles,
        ...sx,
      }}
      {...props}
    >
      {loading ? <Spinner size="20px" color="white" /> : children}
    </Button>
  )
}

export default ButtonWithLoading
