import type { Components, Theme } from '@mui/material/styles';
import { pxToRem } from '../../utils/converter';

const menuComponents: Components<Theme> = {
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        padding: pxToRem(0),
        boxShadow: 'none',
        borderRadius: pxToRem(6),
        minWidth: pxToRem(100),
      }),
      list: () => ({
        padding: `${pxToRem(4)} 0`,
      }),
    },
    defaultProps: {
      slotProps: {
        paper: {
          elevation: 3,
        },
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: `${pxToRem(8)}`,
        fontSize: pxToRem(16.5),
        color: theme.palette.text.secondary,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        },
        '& svg': {
          fontSize: pxToRem(20),
        },
      }),
    },
  },
};

export default menuComponents;
