import React from 'react';

import ColorsComponent from './index';

const ColorStory = {
  title: 'Design system/Colors',
  component: ColorsComponent,
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

export default ColorStory;

const Template = (args) => <ColorsComponent {...args} />;

export const Colors = Template.bind({});
