/** @jsx jsx */
import { FC } from 'react'
import { Grid, jsx } from '@vtex/store-ui'
import Banner from '@vtex/store-ui/src/Banner/index'

type Props = {
  banners: Array<{
    href: string
    src: string
    alt: string
  }>
}
const Banners: FC<Props> = ({ banners }) => (
  <Grid
    columns={2}
    gap={[16, null, null]}
    sx={{ marginTop: '1rem', height: '240px', display: ['none', 'flex'] }}
  >
    {banners.map(({ href, alt, src }) => (
      <Banner
        key={src}
        href={href}
        src={src}
        alt={alt}
        loading="lazy"
        width="616px"
        height="230px"
      />
    ))}
  </Grid>
)

export default Banners
