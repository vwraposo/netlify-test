/** @jsx jsx */
import { jsx } from '@vtex/store-ui'
import { FC } from 'react'

const CEPLink: FC = () => (
  <a
    target="_blank"
    rel="noreferrer"
    href="http://www.buscacep.correios.com.br/servicos/dnec/index.do"
    sx={{
      '&:hover': {
        textDecoration: 'underline',
      },
      height: '48px',
      display: 'block',
      textDecoration: 'none',
      marginBottom: '10px',
      paddingTop: '12px',
      fontSize: '14px',
      color: 'primary',
      fontWeight: 400,
    }}
  >
    Não sei meu CEP &nbsp;
    <span className="ml2">
      <svg
        className="vtex__icon-external-link  "
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.7 0H1.7V2H6.3L1.90735e-07 8.3L1.4 9.7L7.7 3.4V8H9.7V1C9.7 0.4 9.3 0 8.7 0Z"
          transform="translate(6.30005)"
          fill="currentColor"
        />
        <path
          d="M14 15H1C0.4 15 0 14.6 0 14V1C0 0.4 0.4 0 1 0H5V2H2V13H13V10H15V14C15 14.6 14.6 15 14 15Z"
          transform="translate(0 1)"
          fill="currentColor"
        />
      </svg>
    </span>
  </a>
)

export default CEPLink
