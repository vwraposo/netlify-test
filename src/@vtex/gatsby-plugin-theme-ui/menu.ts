import { SxStyleProp } from '@vtex/store-ui'
import { keyframes } from '@emotion/core'

import { submenu } from './submenu'

export const menu: SxStyleProp = {
  menu: {
    display: ['none', 'flex', 'flex'],
    position: 'fixed',
    left: 0,
    right: 0,
    top: [107, 56],
    m: [0],
    marginLeft: 0,
    zIndex: 998,
    transition: 'top 0.3s',

    mobile: {
      accordion: {
        collapsible: {
          listStyle: 'none',
          px: 3,
          color: 'white',

          header: {
            padding: '15px 15px',
            borderBottom: '1px solid #1e4b8b',
            fontSize: '1rem',
            width: '100%',
            textAlign: 'left',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',

            icon: {
              color: '#979899',
              paddingY: '15px',
              transform: 'translate(-25px, 0)',
            },
          },

          li: {
            borderBottom: '1px solid #1e4b8b',
            listStyle: 'none',
            padding: '5px 15px',
            fontSize: '14px',
          },

          seeAll: {
            background: '#016ab3',
            borderRadius: '0 10px 10px 0',
            a: {
              py: '8px',
              display: 'flex',
              textDecoration: 'none',
              color: '#fff',
              '::before': {
                content: '""',
                bottom: 0,
              },
            },
          },

          item: {
            a: {
              py: 2,
              display: 'flex',
              textDecoration: 'none',
              color: '#fff',
              '::before': {
                content: '""',
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#1e4b8b',
                left: '30px',
                transform: 'translate(0,150%)',
              },
            },
          },
        },
      },

      button: {
        height: 48,
        minWidth: 32,
        marginRight: 2,
        padding: 0,
        bg: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      drawer: {
        container: {
          zIndex: 99999,
          display: 'flex',
          bg: '#135ba0',
          height: '100%',
          flexDirection: 'column',
          color: '#fff',
          overflow: 'auto',
          paddingX: '15px',
        },

        mask: {
          bg: 'primary',
          opacity: 0.5,
          zIndex: 9999,
        },
      },
    },

    a: {
      color: '#fff',

      '&:hover': {
        color: '#fff',
      },
    },

    '&.hide': {
      top: [62, 11],
    },

    '&.show': {
      top: [107, 56],
    },

    outlet: {
      bg: 'secondary',
      color: '#fff',
      height: 35,
      alignItems: 'center',
      display: 'flex',

      '&:hover': {
        color: '#fff',
        bg: '#ffa83d',
      },

      span: {
        ml: 2,
      },
    },

    allItems: {
      display: 'none',
      left: 0,
      position: 'absolute',
      width: '100%',

      '&:hover': {
        '.categoryLinkActived': {
          pl: '36px',

          '::before': {
            opacity: 1,
          },
        },
      },

      list: {
        bg: 'primary',
        listStyle: 'none',
        p: 0,
        width: '25%',
        boxShadow: '0 0 8px rgba(0,0,0,0.2)',

        '.categoryLinkActived': {
          color: 'muted',
          svg: {
            animation: `
          ${keyframes`
          0% {
            opacity: 1;
            transform: none;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
          `}
          200ms ease-in-out 0s 1 normal forwards`,
          },

          '::before': {
            content: '""',
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '8px',
            height: '8px',
            opacity: 0,
            background: '#f6b428',
            borderRadius: '50%',
            transition: 'all 0.3s ease-in-out',
          },
        },

        '.categoryLink': {
          display: 'flex',
          fontSize: '13px',
          margin: 0,
          alignItems: 'center',
          transition: 'all .2s',
          textTransform: 'uppercase',
          color: 'background',
          height: 35,
          px: 3,
          position: 'relative',
          justifyContent: 'space-between',
          borderBottom: '1px solid #002c60',
          borderTop: '1px solid #004697',

          '&:first-child': {
            borderTop: 0,
          },
        },
      },
    },

    allDepartaments: {
      display: 'flex',
      fontSize: '13px',
      cursor: 'pointer',
      alignItems: 'center',
      transition: 'all .2s',
      textTransform: 'uppercase',
      color: 'background',
      height: 45,
      px: 4,

      '&:hover': {
        color: 'muted',
        background: '#062f6d',
      },

      svg: {
        bg: 'secondary',
        borderRadius: '100%',
        color: 'white',
      },

      span: {
        ml: 2,
      },
    },

    list: {
      listStyle: 'none',
      padding: 0,
      position: 'relative',
      bg: 'primary',
      borderBottomColor: 'secondary',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      all: {
        margin: 0,

        '&:hover .allItems': {
          display: 'flex',
        },
      },

      item: {
        padding: 0,
        margin: 0,

        '&:hover .subcategories': {
          display: 'flex',
          height: 232,
        },

        a: {
          display: 'flex',
          fontSize: '13px',
          margin: 0,
          alignItems: 'center',
          transition: 'all .2s',
          textTransform: 'uppercase',
          color: 'background',
          height: 45,
          px: 3,

          '&:hover': {
            color: 'muted',
            background: '#062f6d',
          },
        },
      },
    },

    ...submenu,
  },
}
