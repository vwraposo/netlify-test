import React, { FC, Suspense } from 'react'
import { Center, Image, Spinner } from '@vtex/store-ui'
import Shelf from '@vtex/gatsby-theme-vtex/src/components/Shelf/index'
import ShelfContainer from '@vtex/gatsby-theme-vtex/src/components/Shelf/Container'
import {
  useRecommendationShelf,
  RecommendationOptions,
} from '@vtex/gatsby-theme-vtex/src/sdk/shelf/useRecommendationShelf'

const variant = 'recommendation'

type Props = RecommendationOptions

const ShelfRecommendationAsync: FC<Props> = (variables) => {
  const { productRecommendations } = useRecommendationShelf(variables)

  if (!productRecommendations) {
    return null
  }

  return (
    <Shelf
      products={productRecommendations}
      title={
        <>
          <Image
            width="50px"
            height="30px"
            loading="lazy"
            src="https://marinbrasil.vteximg.com.br/arquivos/relacionados_icon.png"
            alt="Product Recommendations"
          />
          Quem viu isto, comprou também
        </>
      }
      variant={variant}
      pageSizes={[1, 3, 4]}
      showDots
      showArrows
    />
  )
}

const ShelfRecommendation: FC<Props> = (props) => (
  <ShelfContainer variant={variant}>
    <Suspense
      fallback={
        <Center height="100%">
          <Spinner />
        </Center>
      }
    >
      <ShelfRecommendationAsync {...props} />
    </Suspense>
  </ShelfContainer>
)

export default ShelfRecommendation
