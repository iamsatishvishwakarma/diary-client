import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    border: {
      light: string;
      main: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    border?: {
      light?: string;
      main?: string;
      dark?: string;
    };
  }
}

declare module '@mui/material/Card' {
  interface CardPropsColorOverrides {
    border: true;
  }
}
