import { SxStyleProp, createTheme } from '@vtex/store-ui'

const blueLine: SxStyleProp = {
  content: '""',
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 0,
  width: '3px',
  background: '#05377f',
  transition: '0.2s ease-in-out',
}

const link: SxStyleProp = {
  position: 'relative',
  width: '100%',
  border: '1px solid #e6e6e6',
  borderRadius: '5px',
  marginBottom: '1rem',
  padding: '1rem',
  background: '#f2f2f2',
  boxShadow: '2px 2px 15px rgba(204, 204, 204, 0.25)',
  transition: '0.2s ease-in-out',
  color: '#666',
  textDecoration: 'none',
  outline: 'none',
  '::after': {
    ...blueLine,
  },
}

export const institutionalTheme: SxStyleProp = createTheme({
  'rich-text': {
    institutional: {
      fontSize: '1.05rem',
      textAlign: 'justify',
      'div p': {
        lineHeight: '1.5',
        marginTop: '1.5rem',
      },
    },
  },
  institutional: {
    margin: '1rem 0',
    display: 'grid',
    gap: ['2rem 0', '0 2rem'],
    marginTop: '3rem',
    gridTemplateColumns: ['1fr', '240px 2fr'],
    padding: ['0 2rem', ''],
    color: '#666',
    list: {
      display: 'flex',
      flexDirection: 'column',
      a: {
        textDecoration: 'none',
      },
      activeLink: {
        ...link,
        background: '#fff',
        '::after': {
          ...blueLine,
          top: 0,
          height: '100%',
        },
      },
      link: {
        ...link,
        '&:hover': {
          background: '#fff',
          '::after': {
            top: 0,
            height: '100%',
          },
        },
      },
    },
    title: {
      margin: 0,
      fontSize: '2.5rem',
      fontWeight: 50,
    },
    contact: {
      form: {
        marginTop: '1rem',
        input: {
          border: 0,
          padding: '1rem',
          width: '100%',
        },
        textarea: {
          resize: 'vertical',
          minHeight: '150px',
          maxHeight: '300px',
        },
        'textarea, input': {
          borderRadius: '5px',
          border: '2px solid #e3e4e6',
          width: '100%',
          margin: '0.5rem 0',
          transition: 'border-color 0.1s ease-in-out',
          '&:hover': {
            borderColor: '#cacbcc',
          },
        },
        button: {
          width: ['100%', '140px'],
          height: '3.5rem',
          boxShadow: '5px 5px 15px #05377f40',
          '&:disabled': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
          },
        },
        label: {
          display: 'block',
          span: {
            color: 'red',
          },
        },
        division: {
          display: 'grid',
          gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
          gap: [0, '1rem'],
        },
      },
    },
  },
})
