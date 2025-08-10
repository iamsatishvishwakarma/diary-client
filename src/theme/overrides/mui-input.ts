import type { Components, Theme } from '@mui/material';

const inputComponents: Components<Theme> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        fontWeight: 500,
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.border.main,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.border.main,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary.main, // focus border
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.main, // error border
        },
        '& input[type=number]': {
          MozAppearance: 'textfield',
          '&::-webkit-outer-spin-button': { WebkitAppearance: 'none', margin: 0 },
          '&::-webkit-inner-spin-button': { WebkitAppearance: 'none', margin: 0 },
        },
      }),
      input: ({ theme }) => ({
        color: theme.palette.text.secondary,
      }),
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.secondary,
        '&.Mui-focused': {
          color: theme.palette.primary.main,
        },
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
      }),
    },
  },
};

export default inputComponents;
