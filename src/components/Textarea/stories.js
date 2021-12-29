import React from 'react';

import Textarea from './index';

const TextareaStories = {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    name: {
      defaultValue: 'custom-textarea-name',
      description: "Custom name of the textarea",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'custom-textarea-name',
        },
        type: { summary: "string" },
      },
    },
    onChange: {
      defaultValue: () => {},
      description: "Function setted in parent component for set chosen option",
      control: {
        type: "function",
      },
      table: {
        defaultValue: {
          summary: '() => {}',
        },
        type: { summary: "function" },
      },
    },
    disabled: {
      defaultValue: false,
      description: "Is disabled",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: "boolean" },
      },
    },
    required: {
      defaultValue: false,
      description: "Is required",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: "boolean" },
      },
    },
    fullWidth: {
      defaultValue: false,
      description: "Set the textarea as full width",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: "boolean" },
      },
    },
    maxLength: {
      defaultValue: 120,
      description: "Set the max length of the textarea",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: '120',
        },
        type: { summary: "number" },
      },
    },
    value: {
      defaultValue: '',
      description: "Description of the value",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: { summary: "string | number" },
      },
    },
    placeholder: {
      defaultValue: null,
      description: "Text of the placholder",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: null,
        },
        type: { summary: "string" },
      },
    },
    noCount: {
      defaultValue: false,
      description: "Hide text length counter",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: "boolean" },
      },
    },
    minHeight: {
      defaultValue: false,
      description: "Reduce textarea's height",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: false,
        },
        type: { summary: "boolean" },
      },
    },
  },
};

const Template = (args) => <TextareaStories {...args} />;

export default TextareaStories;

// Default
export const Default = Template.bind({});
Default.args = {};

// Default disabled
export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
};

// Default with label
export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  label: 'Label du textarea'
};

// Default required with label
export const DefaultRequiredWithLabel = Template.bind({});
DefaultRequiredWithLabel.args = {
  label: 'Label du textarea',
  required: true,
};

// Default with label and no length counter
export const DefaultWithLabelWithoutCount = Template.bind({});
DefaultWithLabel.args = {
  label: 'Label du textarea',
  noCount: true,
};

// Min Height with label
export const MinHeightWithLabel = Template.bind({});
MinHeightWithLabel.args = {
  label: 'Label du textarea',
  minHeight: true,
};
