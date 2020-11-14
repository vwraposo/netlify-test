import {
  createTheme,
  SxStyleProp,
  searchFilterTheme as defaultSearchFilterTheme,
} from '@vtex/store-ui'

const accordionDesktop: SxStyleProp = createTheme(
  defaultSearchFilterTheme.accordion,
  {
    collapsible: {
      paddingBottom: '5px',
      my: '10px',

      header: {
        fontSize: '1rem',
        fontWeight: 600,
        height: '38px',
        width: '100%',
        color: 'primary',

        icon: {
          width: '38px',
          height: '38px',
          color: '#cacbcc',

          g: {
            transform: 'translate(25%, 25%)',
          },
        },
      },

      li: {
        pl: '10px',
        minHeight: '28px',

        quantity: {
          color: '#a5a5a5',
          ml: '12px',
          marginTop: '1px',
          fontSize: '12px',
        },
      },
    },
  }
)

const accordionMobile: SxStyleProp = createTheme(accordionDesktop, {
  collapsible: {
    paddingBottom: 0,
    borderBottom: '1px solid #e3e4e6',

    header: {
      height: '60px',
      backgroundColor: '#fff',
      px: '10px',

      icon: {
        width: '60px',
        height: '60px',
        color: '#ccc',
        borderLeft: 'none',

        g: {
          transform: 'translate(25%, 35%)',
        },
      },
    },

    ul: {
      maxHeight: '',
      overflowY: 'auto',
    },
    li: {
      minHeight: '50px',
      px: '10px',
    },
  },
})

const filtersDesktop: SxStyleProp = {
  title: {
    py: [0, '43px'],
    textTransform: 'uppercase',
    borderBottom: '2px solid #e2e2e2',
    marginBottom: '5px',
    fontSize: '1rem',
    color: 'primary',
    fontWeight: 700,
  },

  accordion: accordionDesktop,
}

const filtersMobile: SxStyleProp = createTheme(filtersDesktop, {
  title: {
    fontSize: '22px',
    borderBottom: '1px solid #e2e2e2',
    backgroundColor: '#f0f0f0',
    padding: '10px',
  },

  drawer: {
    container: {
      zIndex: 9999,
      overflowY: 'scroll',
      backgroundColor: '#fff',
      borderLeftWidth: '1px',
      borderLeftColor: 'gray',
      borderStyle: 'solid',
    },
  },

  accordion: accordionMobile,
})

export const searchFilterTheme: SxStyleProp = {
  searchFilter: {
    desktop: filtersDesktop,
    mobile: filtersMobile,
  },
}
