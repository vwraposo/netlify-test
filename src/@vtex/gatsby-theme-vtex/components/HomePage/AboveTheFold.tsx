import React, { FC } from 'react'
import Carousel from '@vtex/gatsby-theme-vtex/src/components/Carousel'
import Container from '@vtex/gatsby-theme-vtex/src/components/Container'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf/index'
import ShelfContainer from '@vtex/gatsby-theme-vtex/src/components/Shelf/Container'

import Banners from './Banners'
import CAROUSEL_ITEMS from './carousel.json'
import { Props } from '../../pages/index'
import ShelfProductsTitle from '../Shelf/ShelfProductsTitle'
import { pageSizes } from '../Shelf/constants'

const AboveTheFold: FC<Props> = ({ data }) => (
  <Container>
    <Carousel allItems={CAROUSEL_ITEMS} showArrows={false} />
    <Banners
      banners={[
        {
          href:
            '/cooktop-por-inducao-tramontina-square-slider-b-4ei-60-vitroceramico-com-comando-touch-220-v-94751221/p',
          src:
            'https://marinbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/1f1c56a5-38f8-4fdb-9103-b3851fa729cb___73f60118525ba67124ede20940a4127d.jpg',
          alt: 'Banners Esquerda',
        },
        {
          href:
            'https://www.marinbrasil.com.br/cadeira-tramontina-alice-polida-em-polipropileno-verde-92037920/p',
          src:
            'https://marinbrasil.vtexassets.com/assets/vtex.file-manager-graphql/images/a74f6fa4-8f04-43c6-978a-99cfdb52f9e0___9caa0c349bedbda4c5223ff5929b8949.jpg',
          alt: 'Banners Direita',
        },
      ]}
    />
    <ShelfContainer>
      <Shelf
        pageSizes={pageSizes}
        showDots
        title={<ShelfProductsTitle>{'Novidades'}</ShelfProductsTitle>}
        products={data.vtex.products!}
      />
    </ShelfContainer>
  </Container>
)

export default AboveTheFold
