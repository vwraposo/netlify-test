/** @jsx jsx */
import { Box, jsx } from '@vtex/store-ui'
import { FC } from 'react'

const AsyncInfoContainer: FC = ({ children }) => (
  <Box
    sx={{
      borderColor: '#f3f3f3',
      borderStyle: 'solid',
      borderWidth: '1px',
      minWidth: '250px',
      minHeight: '600px',
      padding: 4,
    }}
  >
    {children}
  </Box>
)

export default AsyncInfoContainer
