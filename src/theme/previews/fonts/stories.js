import React from 'react';

import FontsComponent from './index';

const FontsStory = {
  title: 'Design system/Fonts',
  component: FontsComponent,
  parameters: {
    toolbar: {
      zoom: { hidden: true },
      eject: { hidden: true },
      copy: { hidden: true },
      fullscreen: { hidden: true },
      'storybook/viewport': { hidden: true },
      'storybook/outline': { hidden: true },
    },
    outline: {
      disable: true,
    },
    backgrounds: {
      disable: true,
      grid: { disable: true, },
    },
    options: {
      showPanel: false,
    },
  }
};

export default FontsStory;

const Template = (args) => <FontsComponent {...args} />;

export const Fonts = Template.bind({});
