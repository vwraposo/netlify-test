/** @jsx jsx */
import { useNumberFormat } from '@vtex/gatsby-theme-vtex/src/sdk/localization/useNumberFormat'
import { Box, jsx } from '@vtex/store-ui'
import { FC, useState } from 'react'

import InstallmentsTable from './Table'

interface Props {
  offer: any
}

const ArrowUp = (
  <path
    d="M7.26254 2.80524C7.65892 2.37243 8.34108 2.37243 8.73746 2.80525L16 10.7353L13.9259 13L8 6.52941L2.07407 13L0 10.7353L7.26254 2.80524Z"
    fill="currentColor"
  />
)

const ArrowDown = (
  <path
    d="M8.73746 13.1948C8.34108 13.6276 7.65892 13.6276 7.26254 13.1948L0 5.26471L2.07407 3L8 9.47059L13.9259 3L16 5.26471L8.73746 13.1948Z"
    fill="currentColor"
  />
)

const Installments: FC<Props> = ({
  offer: {
    installments,
    price,
    maxInstallments: [maxInstallments],
  },
}) => {
  const { format } = useNumberFormat()
  const [open, setOpen] = useState(false)

  if (!maxInstallments) {
    return null
  }

  const { value, numberOfInstallments } = maxInstallments

  return (
    <Box sx={{ my: 3 }}>
      <Box
        sx={{
          padding: 3,
          display: 'flex',
          backgroundColor: '#f0f0f0',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'primary',
          fontSize: '12.8px',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        <Box marginRight={3}>
          <span sx={{ fontWeight: 700 }}>{format(price)}</span> em até{' '}
          {numberOfInstallments}x de{' '}
          <span sx={{ fontWeight: 700 }}>{format(value)}</span> sem juros no
          cartão
        </Box>
        <Box>Ver parcelas</Box>
        <Box>
          <svg
            width="30px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g transform="translate(7 7)">{open ? ArrowUp : ArrowDown}</g>
          </svg>
        </Box>
      </Box>
      {open ? <InstallmentsTable installments={installments} /> : null}
    </Box>
  )
}

export default Installments
