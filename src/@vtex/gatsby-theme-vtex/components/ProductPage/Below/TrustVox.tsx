import React, { useEffect, FC } from 'react'

interface Props {
  product: {
    productId: string
    productName: string
    items: Array<{
      images: Array<{
        imageUrl: string
      }>
    }>
  }
}

const id = 'trustvox-script'

interface TrustVoxOptions {
  productId: string
  productName: string
  imageUrl: string
  storeId: string
}

const useTrustVox = ({
  productId,
  productName,
  imageUrl,
  storeId,
}: TrustVoxOptions) =>
  useEffect(() => {
    window._trustvox = [
      ['_storeId', storeId],
      ['_productId', productId],
      ['_productName', productName],
      ['_productPhotos', [imageUrl]],
    ]

    const element = document.getElementById(id)

    if (element == null) {
      // We haven't added the script yet, let's add it
      const script = document.createElement('script')

      script.id = id
      script.async = true
      script.src = '//static.trustvox.com.br/assets/widget.js'

      document.head.prepend(script)
    } else if (window.TrustvoxWidget !== undefined) {
      window.TrustvoxWidget.restart()
    }
  }, [productId, productName, imageUrl, storeId])

const TrustVox: FC<Props> = ({ product }) => {
  const { productId, productName, items } = product
  const imageUrl = items?.[0]?.images?.[0]?.imageUrl

  useTrustVox({ productId, productName, imageUrl, storeId: '80342' })

  return (
    <section className="e-general__rating">
      <h2
        className="title left"
        id="trustvox-reviews"
        style={{ marginBottom: '-15px' }}
      >
        Pergunte e veja opiniões de quem já comprou
      </h2>
      <div className="trustvox-container">
        <div id="_trustvox_widget" />
      </div>
    </section>
  )
}

export default TrustVox
