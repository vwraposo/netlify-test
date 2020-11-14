/** @jsx jsx */
import { useNumberFormat } from '@vtex/gatsby-theme-vtex/src/sdk/localization/useNumberFormat'
import { FC, useMemo } from 'react'
import { jsx, SxStyleProp } from '@vtex/store-ui'

interface Installment {
  value: number
  interestRate: number
  numberOfInstallments: number
}

interface Props {
  installments: Installment[]
}

const useSplittedInstallments = (installments: Installment[]) =>
  useMemo(() => {
    let zeroRateIndex = 0

    for (let it = 0; it < installments.length; it++) {
      if (installments[it].interestRate > 0) {
        break
      }

      zeroRateIndex = it
    }

    let nonZeroRateIndex = zeroRateIndex + 1

    for (let it = nonZeroRateIndex; it < installments.length; it++) {
      if (installments[it].interestRate === 0) {
        break
      }

      nonZeroRateIndex = it
    }

    return [
      installments.slice(0, zeroRateIndex),
      installments.slice(zeroRateIndex, nonZeroRateIndex),
    ]
  }, [installments])

const listItemStyle: SxStyleProp = {
  display: 'flex',
  justifyContent: 'space-between',
  color: 'primary',
  listStyle: 'none',
  minHeight: '40px',
  alignItems: 'center',
  borderColor: 'rgba(5, 55, 127, 0.25)',
  borderWidth: '1px',
  borderTopWidth: '0px',
  borderStyle: 'solid',
  px: 3,
}

const totalStyle: SxStyleProp = {
  ...listItemStyle,
  backgroundColor: '#f0f0f0',
  justifyContent: 'center',
  fontWeight: 700,
}

const InstallmentsTable: FC<Props> = ({ installments: allInstallments }) => {
  const { format } = useNumberFormat()
  const [zeroRate, nonZeroRate] = useSplittedInstallments(allInstallments)

  return (
    <ul
      sx={{
        padding: 0,
        fontSize: '12.8px',
      }}
    >
      {zeroRate.map(({ value, numberOfInstallments }, index) => {
        return (
          <li
            key={`installment.${index}`}
            sx={{
              ...listItemStyle,
              borderTopWidth: index === 0 ? '1px' : '0px',
            }}
          >
            <span sx={{ fontWeight: 700 }}>{numberOfInstallments}x de</span>
            <span>{format(value)}</span>
            <span>sem juros</span>
          </li>
        )
      })}
      <li sx={totalStyle}>
        <span>
          Total de{' '}
          {format(zeroRate[0].numberOfInstallments * zeroRate[0].value)} sem
          juros
        </span>
      </li>
      {nonZeroRate.map(({ value, numberOfInstallments }, index) => {
        return (
          <li key={`installment.${index}`} sx={listItemStyle}>
            <span sx={{ fontWeight: 700 }}>{numberOfInstallments}x de</span>
            <span>{format(value)}</span>
            <span>com juros</span>
          </li>
        )
      })}
    </ul>
  )
}

export default InstallmentsTable
