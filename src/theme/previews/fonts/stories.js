import React from 'react';

import FontsComponent from './index';

const FontsStory = {
  title: 'Design system/Fonts',
  component: FontsComponent,
  parameters: {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  }
};

export default FontsStory;

const Template = (args) => <FontsComponent {...args} />;

export const Fonts = Template.bind({});
