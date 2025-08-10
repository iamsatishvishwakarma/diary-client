// declare module '@mui/material/styles' {
//   interface Theme {
//     customColors: {
//       borderColors: Record<string, string>;
//       backgroundColors: Record<string, string>;
//     };
//   }

//   interface ThemeOptions {
//     customColors?: {
//       borderColors?: Record<string, string>;
//       backgroundColors?: Record<string, string>;
//     };
//   }
// }

import { createTheme } from '@mui/material/styles';
import palette from './palette';
import createTypography from './typography';
import overrides from './overrides';

const baseTheme = createTheme({
  palette,
  components: overrides(),
});

const theme = createTheme({
  ...baseTheme,
  typography: createTypography(baseTheme),
});

export default theme;
