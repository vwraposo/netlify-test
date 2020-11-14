import { SxStyleProp } from '@vtex/store-ui'

const subcategories: SxStyleProp = {
  display: 'none',
  position: 'absolute',
  background: '#fff',
  justifyContent: 'space-between',
  boxShadow: '0 0 8px rgba(0,0,0,0.2)',
  p: 3,
  borderBottomColor: 'secondary',
  borderBottomWidth: '3px',
  borderBottomStyle: 'solid',
}

const sub: SxStyleProp = {
  columnCount: 3,
  listStyle: 'none',
  padding: 0,
  width: '60%',

  '.subActived': {
    a: {
      '::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '-10px',
        width: '2px',
        height: 0,
        background: '#f6b428',
        borderRadius: '50px',
        transition: '0.25s ease-in-out',
      },

      '&:hover': {
        '::after': {
          top: 0,
          height: '100%',
        },
      },
    },
  },

  item: {
    a: {
      color: '#333',
      textTransform: 'none',
      px: 0,
      py: 1,
      height: 'auto',
      position: 'relative',

      '&:hover': {
        bg: 'transparent',
        color: 'secondary',
      },
    },
  },
}

export const submenu: SxStyleProp = {
  subcategories: {
    left: 0,
    right: 0,
    ...subcategories,
  },

  sub,

  allDepartments: {
    sub: {
      ...sub,
      width: '100%',
      columnCount: 2,
    },
    subcategories: {
      bg: 'white',
      boxShadow: '0 0 8px rgba(0,0,0,0.2)',
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      borderBottomColor: 'secondary',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      position: 'absolute',
      left: '25%',
      top: 0,
      right: 0,
      bottom: 0,

      h2: {
        display: 'block',
        color: '#05377f',
        marginBottom: '2rem',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
      },
    },
  },

  featured: {
    width: '35%',

    content: {
      justifyContent: 'space-between',
    },

    details: {
      mr: 3,
    },

    priceContent: {
      mb: 2,
      color: 'secondary',
      flexWrap: 'wrap',
    },

    price: {
      fontWeight: 700,
      fontSize: '1.17em',
      mr: 2,
    },

    button: {
      mt: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'secondary',

      '&:hover': {
        color: '#fff',
        background: '#ffa83d !important',
      },
    },

    title: {
      color: 'secondary',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      mb: 3,
    },

    image: {
      height: 160,
      width: 160,
    },
  },
}
