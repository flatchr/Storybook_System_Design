import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs';
// import { addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";
import mainTheme from '../src/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={mainTheme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {Object.values(mainTheme.fonts).map(font => {
          return (
            <link
              href={font.import}
              rel="stylesheet"
            />
          );
        })}
      </Helmet>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  options: {
    storySort: {
      order: [
        'Design system', ['Colors', 'Fonts']
      ],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
