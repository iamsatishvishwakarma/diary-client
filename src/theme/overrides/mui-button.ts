import type { Components, Theme } from '@mui/material/styles';
import { pxToRem } from '../../utils/converter';

const buttonComponents: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 5,
        boxShadow: 'none',
        textTransform: 'none',
        fontWeight: 400,
        letterSpacing: '0.3px',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,

        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.grey[300],
          color: theme.palette.grey[500],
          opacity: 1,
        },
      }),
      sizeSmall: ({ theme }) => ({
        fontSize: pxToRem(14),
        padding: theme.spacing(0.4, 1),
      }),

      sizeMedium: ({ theme }) => ({
        fontSize: pxToRem(16),
        padding: theme.spacing(0.8, 2),
      }),

      sizeLarge: ({ theme }) => ({
        fontSize: pxToRem(18),
        padding: theme.spacing(1.2, 3),
      }),
    },
  },
};

export default buttonComponents;
