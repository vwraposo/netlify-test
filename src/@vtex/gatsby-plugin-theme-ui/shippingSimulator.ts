import { SxStyleProp, createTheme } from '@vtex/store-ui'

export const shippingSimulatorTheme: SxStyleProp = createTheme({
  shippingSimulator: {
    productPage: {
      preview: {
        marginBottom: 15,
      },
      fieldContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'flex-end',
        label: {
          flexGrow: 1,
        },
        '.ship-postalCode': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          marginRight: 10,
        },
      },
      inputLabel: {
        marginBottom: '8px',
        fontSize: '14px',
        borderRadius: 0,
        color: '#3f3f40',
      },
      input: {
        height: '47px',
        borderRadius: 0,
        borderColor: '#e3e4e6',
        ':focus': {
          outline: 'none',
          borderColor: '#cacbcc',
        },
      },
      button: {
        ':focus': {
          borderRadius: 0,
        },
        px: '24px',
        borderRadius: 0,
        cursor: 'pointer',
        fontWeight: 500,
        minHeight: '48px',
        textTransform: 'uppercase',
        backgroundColor: '#0f3e99',
        '&:hover:not([disabled])': {
          backgroundColor: '#072c75',
        },
      },
      table: {
        borderColor: '#e3e4e6',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        thead: {
          display: 'none',
        },
        width: '100%',
        marginBottom: 15,
        paddingY: 10,
        estimateCell: {
          color: 'grey',
        },
        priceCell: {
          color: 'grey',
        },
        idLabel: {
          'input[type=radio]': {
            marginRight: 10,
          },
        },
      },
    },
  },
})
