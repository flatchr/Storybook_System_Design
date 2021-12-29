import React from 'react';

import ColorsComponent from './index';

const ColorStory = {
  title: 'Design system/Colors',
  component: ColorsComponent,
  parameters: {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
    docs: {
      page: null,
    },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

export default ColorStory;

const Template = (args) => <ColorsComponent {...args} />;

export const Colors = Template.bind({});
