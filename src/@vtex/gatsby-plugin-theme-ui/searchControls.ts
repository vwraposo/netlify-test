import {
  SxStyleProp,
  searchControlsTheme as defaultSearchControlsTheme,
  createTheme,
} from '@vtex/store-ui'

export const searchControlsTheme: SxStyleProp = createTheme(
  defaultSearchControlsTheme,
  {
    searchControls: {
      select: {
        fontSize: '18px',
        color: 'primary',
        minWidth: '220px',
        py: '8px',
        borderWidth: '1px',
        borderColor: 'rgb(230, 230, 230)',
        boxShadow: '2px 2px 5px rgba(5,55,127,.15)',
        backgroundColor: 'white',
      },

      filtersButton: {
        backgroundColor: 'primary',
        color: 'white',
        py: '10px',
      },
    },
  }
)
