import type { Theme } from '@mui/material/styles';
import type { TypographyVariantsOptions } from '@mui/material/styles';
import { pxToRem } from '../utils/converter';

const createTypography = (theme: Theme): TypographyVariantsOptions => ({
  fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  h1: {
    fontSize: pxToRem(30),
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  h2: {
    fontSize: pxToRem(28),
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  h3: {
    fontSize: pxToRem(24),
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  h4: {
    fontSize: pxToRem(22),
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  h5: {
    fontSize: pxToRem(20),
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  h6: {
    fontSize: pxToRem(18),
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  body1: {
    fontSize: pxToRem(16),
    color: theme.palette.text.primary,
  },
  body2: {
    fontSize: pxToRem(14),
    color: theme.palette.text.secondary,
  },
  button: {
    fontSize: pxToRem(15),
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.warning.main,
  },
  caption: {
    fontSize: pxToRem(12),
    color: theme.palette.grey[600],
  },
  overline: {
    fontSize: pxToRem(10),
    textTransform: 'uppercase',
    color: theme.palette.grey[500],
  },
});

export default createTypography;
