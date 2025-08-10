import type { Components, Theme } from '@mui/material/styles';
import { pxToRem } from '../../utils/converter';

const tableComponents: Components<Theme> = {
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.grey[100],
        fontSize: 60,
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: ({ theme }) => ({
        fontWeight: 500,
        fontSize: pxToRem(14),
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.grey[100],
        textTransform: 'uppercase',
        borderBottom: `2px solid ${theme.palette.divider}`,
      }),
    },
  },
};

export default tableComponents;
