import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import mainTheme from '../src/theme';

export const decorators = [
  Story => (
    <MemoryRouter>
      <ThemeProvider theme={mainTheme}>
        <Story />
      </ThemeProvider>
    </MemoryRouter>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#373737',
      },
      {
        name: 'Flatchr',
        value: mainTheme.colors.primary400,
      },
    ],
  },
  options: {
    storySort: {
      order: [
        'Design system', ['Colors', 'Fonts'], 'Atoms', '*'
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
