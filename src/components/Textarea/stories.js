import React, { useState } from 'react';

import Textarea from './index';
import FormLabel from '../FormLabel/index';

const TextareaStories = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    options: { showPanel: true },
  },
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
    additionalClassNames: {
      defaultValue: null,
      description: "Additional classNames for style accessibility",
      control: {
        disable: true,
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "string" },
      },
    },
  },
};

const Template = (args) => {
  const [localValue, setValue] = useState('');
  return (
    <>
      {!!args.label?.length && (
        <FormLabel
          required={args.required}
          labelFor={args.name}
          label={args.label}
        />
      )}
      <Textarea
        {...args}
        onChange={e => setValue(e.target.value)}
        value={localValue}
      />
    </>
  );
};

export default TextareaStories;

// Default
export const Default = Template.bind({});
Default.args = {};

// Default Placeholder
export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Ceci est une valeur placeholder'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const OnError = Template.bind({});
OnError.args = {
  error: 'Ce champ est en erreur !',
};

export const WithoutCount = Template.bind({});
WithoutCount.args = {
  noCount: true,
};

export const WithoutCountOnError = Template.bind({});
WithoutCountOnError.args = {
  noCount: true,
  error: 'Ce champ est en erreur !',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'textarea-with-label',
  label: 'Label du textarea',
};
WithLabel.argTypes = {
  label: {
    control: {
      type: "text",
    },
  }
};

export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
  name: 'textarea-with-label-required',
  label: 'Label du textarea',
  required: true,
};
WithLabelRequired.argTypes = {
  label: {
    control: {
      type: "text",
    },
  }
};
