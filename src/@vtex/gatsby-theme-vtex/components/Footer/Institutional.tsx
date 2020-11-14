import React, { FC } from 'react'
import { Flex, Text, Link } from '@vtex/store-ui'

interface InstitutionalProps {
  variant: string
}

const Institutional: FC<InstitutionalProps> = ({ variant }) => (
  <Flex variant={`${variant}.institutional`}>
    <Text>
      MARIN BRASIL VAREJO E DISTRIBUIÇÃO DE UTILIDADES DOMÉSTICAS LTDA.
    </Text>
    <Text>CNPJ: 10.888.700/0001-18 Inscrição Estadual: 045.008760.3</Text>
    <Text>
      Endereço: Rua Natal João Cesca, 77, Cruzeiro, Farroupilha, RS, CEP
      95176-308
    </Text>
    <Link href="mailto:vendas@marinbrasil.com.br">
      vendas@marinbrasil.com.br
    </Link>
    <Text>
      Destacamos que os preços previstos no site prevalecem aos demais
      anunciados em outros meios de comunicação e sites de buscas.
    </Text>
  </Flex>
)

export default Institutional
