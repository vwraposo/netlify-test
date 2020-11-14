import React, { FC } from 'react'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'

import Banners from './Banners'
import ShelfProducts from '../Shelf/ShelfProducts'

const BelowTheFold: FC = () => (
  <Container>
    <ShelfProducts
      title="Cubas e Tanques"
      searchParams={{
        from: 0,
        to: 11,
        orderBy: 'OrderByTopSaleDESC',
        collection: '140',
        hideUnavailableItems: false,
      }}
    />
    <Banners
      banners={[
        {
          href:
            '/lixeira-tramontina-util-em-aco-inox-polido-com-revestimento-gold-5-l-94540051/p',
          src:
            'https://marinbrasil.vteximg.com.br/arquivos/ids/162866/banner_peq_lixeira.jpg?v=637004823029000000img.com.br/arquivos/ids/164793/banner-cadeira-marin.gif?v=637232872009830000',
          alt: 'Banner Esquerda',
        },
        {
          href: '/panela-wok-aluminio-antiaderente-36-cm-vermelha/p',
          src:
            'https://marinbrasil.vteximg.com.br/arquivos/ids/162871/banner_peq_wok.jpg?v=637005347263530000nbrasil.vteximg.com.br/arquivos/ids/162865/banner_peq_eletroportateis.jpg?v=637004822221200000',
          alt: 'Banner Direita',
        },
      ]}
    />
    <ShelfProducts
      title="Os queridinhos"
      searchParams={{
        from: 0,
        to: 11,
        orderBy: 'OrderByTopSaleDESC',
        hideUnavailableItems: false,
      }}
    />
    <Banners
      banners={[
        {
          href:
            '/cadeira-sofia-encosto-horizontal-vermelha-tramontina-92237040/p',
          src:
            'https://marinbrasil.vteximg.com.br/arquivos/ids/162868/banner_peq_sofia.jpg?v=637004824374870000',
          alt: 'Banner Esquerda',
        },
        {
          href: '/eletrodomesticos/coifas-e-depuradores',
          src:
            'https://marinbrasil.vteximg.com.br/arquivos/ids/162872/banner_peq_coifa.jpg?v=637005353826970000',
          alt: 'Banner Direita',
        },
      ]}
    />
    <ShelfProducts
      title="Cadeiras"
      searchParams={{
        from: 0,
        to: 11,
        orderBy: 'OrderByTopSaleDESC',
        collection: '144',
        hideUnavailableItems: false,
      }}
    />
  </Container>
)

export default BelowTheFold
