import {
  createTheme,
  responsivePictureTheme,
  SxStyleProp,
} from '@vtex/store-ui'

const paginationDots: SxStyleProp = {
  container: {
    my: '0.5rem',
    position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    mx: 0,
    padding: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'auto',
  },
  dot: {
    bg: '#a8a8a8',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    minHeight: `0.625rem`,
    minWidth: `0.625rem`,
  },
  activeDot: {
    bg: '#ff9d04',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '12px 12px 12px 12px',
    padding: '0.25rem',
    borderWidth: 0,
    outline: '0',
    minHeight: `0.625rem`,
    minWidth: `0.625rem`,
  },
}

const shelfPaginationDots: SxStyleProp = createTheme(paginationDots, {
  container: {
    position: 'relative',
    my: '20px',
  },
  activeDot: {
    bg: 'primary',
  },
})

const productImageGalleryPaginationDots: SxStyleProp = createTheme(
  paginationDots,
  {
    container: {
      position: 'relative',
      bg: 'transparent',
    },
    activeDot: {
      bg: 'primary',
    },
  }
)

const shelfArrows: SxStyleProp = {
  left: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'primary',
    },
  },

  right: {
    button: {
      bg: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'primary',
    },
  },
}

const carouselArrows: SxStyleProp = {
  left: {
    button: {
      position: 'absolute',
      top: '50%',
      left: 0,
      zIndex: 1,
      bg: 'white',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'primary',
    },
  },

  right: {
    button: {
      position: 'absolute',
      top: '50%',
      right: 0,
      zIndex: 1,
      bg: 'white',
      borderColor: 'transparent',
      cursor: 'pointer',

      '&:hover': {
        opacity: '0.5',
      },
    },

    svg: {
      color: 'primary',
    },
  },
}

const carouselresponsivePicture = createTheme(responsivePictureTheme, {
  img: {
    height: ['238px', '307px'],
  },
})

const container: SxStyleProp = {
  width: '100%',
  height: '770px',
  marginY: '30px',
}

const theme: SxStyleProp = {
  productImageGallery: {
    position: 'relative',
    arrow: carouselArrows,
    paginationDots: productImageGalleryPaginationDots,
    img: { width: '100%' },
  },

  carousel: {
    position: 'relative',
    arrow: carouselArrows,
    paginationDots,
    responsivePicture: carouselresponsivePicture,
  },

  shelf: {
    default: {
      arrow: shelfArrows,

      paginationDots: shelfPaginationDots,

      container,

      title: {
        fontWeight: 700,
        fontSize: '20px',
        color: 'black',

        bar: {
          bg: '#016ab3',
          width: '125px',
          height: '4px',
          marginTop: '10px',
          marginBottom: '20px',
        },
      },
    },

    recommendation: {
      arrow: shelfArrows,

      paginationDots: shelfPaginationDots,

      container,

      title: {
        fontWeight: 300,
        fontSize: '22px',
        color: '#666',
        paddingTop: '2rem',
        paddingBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',

        img: {
          marginRight: '10px',
        },
      },
    },
  },
}

export default theme
