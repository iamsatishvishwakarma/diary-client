import type { Components, Theme } from '@mui/material/styles';

const cardComponents: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
      }),
    },
    defaultProps: {
      elevation: 0,
    },
  },
};

export default cardComponents;
