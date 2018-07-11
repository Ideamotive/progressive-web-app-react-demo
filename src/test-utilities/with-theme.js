import React from 'react';
import { ThemeProvider, } from 'styled-components';

import theme from '../components/theme';

export const withTheme = (Component) => {
  return (props) => (
    <ThemeProvider theme={theme}>
      <Component {...props}/>
    </ThemeProvider>
  );
};
