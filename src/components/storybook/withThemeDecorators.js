import React from 'react';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';
import centered from '@storybook/addon-centered';
import styled from 'styled-components';

const MainWrapper = styled.div`
  @font-face {
     font-family: 'Raleway', sans-serif;
     src: url('https://fonts.googleapis.com/css?family=Raleway');
  }
  font-family: Raleway;
`;

export const withThemeDecorator = (func) => {
  return (...args) => {
    return func(...args)
      .addDecorator(centered)
      .addDecorator(story => (
        <MainWrapper>
          <ThemeProvider theme={theme}>
            {story()}
          </ThemeProvider>
        </MainWrapper>
      ));
  };
};