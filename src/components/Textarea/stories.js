import React, { useState } from 'react';

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

const Template = (args) => {
  const [localValue, setValue] = useState('');
  return (
    <Textarea
      {...args}
      onChange={e => setValue(e.target.value)}
      value={localValue}
    />
  );
};

export default TextareaStories;

// Default
export const Default = Template.bind({});
Default.args = {};

// Default Placeholder
export const DefaultPlaceholder = Template.bind({});
DefaultPlaceholder.args = {
  placeholder: 'Ceci est une valeur placeholder'
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  error: 'Ce champ est en erreur !',
};

export const DefaultWithoutCount = Template.bind({});
DefaultWithoutCount.args = {
  noCount: true,
};

export const DefaultWithoutCountError = Template.bind({});
DefaultWithoutCountError.args = {
  noCount: true,
  error: 'Ce champ est en erreur !',
};

// export const MinHeight = Template.bind({});
// MinHeight.args = {
//   minHeight: true,
// };
