import React from 'react';

import FormLabel from './index';

const FormLabelStories = {
  title: 'Forms/FormLabel',
  component: FormLabel,
  parameters: {
    options: { showPanel: true },
  },
  argTypes: {
    label: {
      defaultValue: null,
      description: "Label of formLabel",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "string" },
      },
    },
    labelTitle: {
      defaultValue: null,
      description: "Show html title text for form label",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "string" },
      },
    },
    labelFor: {
      defaultValue: null,
      description: "LabelFor of formLabel",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "string" },
      },
    },
    labelId: {
      defaultValue: null,
      description: "LabelId of formLabel",
      control: {
        type: "integer",
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "integer" },
      },
    },
    required: {
      defaultValue: false,
      description: "If need to show the linked field is required",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: { summary: "boolean" },
      },
    },
    noMargin: {
      defaultValue: false,
      description: "Set no bottom margin for the label",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: 'false',
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

export default FormLabelStories;

const Template = (args) => <FormLabel {...args} />;

// Label
export const Default = Template.bind({});
Default.args = {
  label: 'Label du form',
  required: false,
};

// Label required
export const Required = Template.bind({});
Required.args = {
  label: 'Label du form',
  required: true,
};
