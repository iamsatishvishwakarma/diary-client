import type { Components, Theme } from '@mui/material/styles';

const paperComponents: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 5,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        transition: 'all 0.3s ease',
        border: `1px solid ${theme.palette.border.main}`,

        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2),
        },
      }),
    },
    defaultProps: {
      elevation: 0,
    },
  },
};

export default paperComponents;
