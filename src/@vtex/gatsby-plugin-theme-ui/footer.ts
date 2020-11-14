import { SxStyleProp } from '@vtex/store-ui'

export const footer: SxStyleProp = {
  footer: {
    newsletter: {
      display: ['block', 'flex'],
      flexDirection: 'column',
      bg: '#fafafa',
      p: 4,
      mt: '4rem',
      mb: 4,
      container: {
        display: ['block', 'flex'],
        flexWrap: 'wrap',
        alignItems: 'center',
      },
      feedback: {
        textAlign: 'center',
        mt: '30px',
        minHeight: '24px',
        error: {
          color: 'red',
        },
        success: {},
      },
      formTitle: {
        flexDirection: 'column',
        mr: [0, 4],
        alignItems: ['center', 'start'],

        title: {
          color: '#06387a',
          fontSize: '13px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          mb: 1,
        },

        subtitle: {
          fontSize: '16px',
          maxWidth: 300,
          fontWeight: 'bold',
          textAlign: ['center', 'left'],
          textTransform: 'uppercase',
          margin: 0,
          letterSpacing: '6px',
          lineHeight: '1.2',
        },
      },

      formContainer: {
        flexDirection: 'column',
        flex: '1',
      },
      form: {
        flex: 1,
        flexWrap: 'wrap',
        mt: [4, 0],

        label: {
          width: ['100%', '30%'],
          mr: [0, 3],
          mb: [3, 0],
        },

        input: {
          bg: '#e8e8e8',
          border: 0,
          borderRadius: 0,
          padding: '5px 10px',
          height: 40,
        },

        button: {
          mt: [0, '24px'],
          bg: 'primary',
          borderRadius: 0,
          height: 40,
          width: ['100%', '30%'],
          fontSize: 14,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        },
      },
    },

    menu: {
      flexDirection: ['column', 'row'],
      alignItems: ['center', 'start'],
      px: 3,
      justifyContent: 'space-around',

      section: {
        flexDirection: 'column',
        mb: [2, 0],
        borderBottom: ['1px solid #e6e6e6', 0],

        title: {
          mb: '10px',
          color: 'primary',
          textTransform: 'uppercase',
          fontSize: '14px',
          textAlign: ['center', 'left'],
          fontWeight: 600,
          letterSpacing: '1px',
        },

        node: {
          justifyContent: ['center', 'left'],
        },

        list: {
          p: 0,
          flexDirection: 'column',

          li: {
            color: '#656565',
            fontSize: '14px',
            lineHeight: '22px',
            mb: 3,
            justifyContent: ['center', 'left'],

            a: {
              color: '#656565',
              textDecoration: 'none',

              '&:hover': {
                color: 'secondary',
              },
            },
          },
        },
      },
    },

    institutional: {
      flexDirection: 'column',
      alignItems: 'center',
      color: '#656565',
      fontSize: '12px',
      lineHeight: '22px',
      px: 3,
      py: 4,
      textAlign: 'center',

      a: {
        color: 'primary',
        textDecoration: 'none',
        mb: 2,

        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },

    paymentSecurity: {
      bg: '#f2f2f2',
      justifyItems: 'center',
      px: 3,
      py: 4,
      flexDirection: ['column', 'row'],

      section: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,

        title: {
          mb: 2,
        },

        cardList: {
          p: 0,
          flexWrap: 'wrap',
          justifyContent: 'center',
          mb: [4, 0],

          img: {
            mx: 1,
            my: [1, 0],
            borderRadius: 4,
          },
        },
      },
    },
  },
}
