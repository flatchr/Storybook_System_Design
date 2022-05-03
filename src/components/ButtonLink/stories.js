import React from 'react';
import { PlusIcon } from '@flatchr/icons';

import Button from './index';

const ButtonStories = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    options: { showPanel: true },
  },
  argTypes: {
    label: {
      defaultValue: 'Button label',
      description: "Text of the button, can be 'text' or 'node'",
      control: {
        type: 'text',
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
      },
    },
    type: {
      defaultValue: 'button',
      description: "Choice between 'button', 'submit'",
      control: {
        type: "select",
        options: [
          'button',
          'submit',
        ],
      },
      table: {
        defaultValue: {
          summary: 'button',
        },
        type: { summary: "string" },
      },
    },
    to: {
      defaultValue: null,
      description: "set an URL to render the button as a link",
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
    scheme: {
      defaultValue: 'primary',
      description: "The style color of the button, choice between 'primary', 'secondary', 'primaryLight', 'warning' & 'success'",
      control: {
        type: "select",
        options: [
          'primary',
          'secondary',
          'primaryLight',
          'warning',
          'success',
        ],
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: { summary: "string" },
      },
    },
    bordered: {
      defaultValue: false,
      description: "Show border from props 'scheme'",
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
    size: {
      defaultValue: null,
      description: "Size of the button, choice between 'medium' & 'big'",
      control: {
        type: "select",
        options: [
          'medium',
          'big',
        ],
      },
      table: {
        defaultValue: {
          summary: 'string',
        },
      },
    },
    onClick: {
      defaultValue: () => {},
      description: "Function triggered on click, is available when type is 'button'",
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
      description: "Choose between being disabled or not",
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
    title: {
      defaultValue: null,
      description: "Title tooltip of the button",
      control: {
        type: "text",
      },
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: { summary: "string" },
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
    icon: {
      defaultValue: null,
      description: "Add an icon to the button on the left on the text",
      control: {
        disable: true,
      },
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: { summary: "node" },
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export default ButtonStories;

export const Primary = Template.bind({});
Primary.args = {
  scheme: 'primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  scheme: 'primary',
  icon: <PlusIcon />,
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  scheme: 'primary',
  size: 'big',
};

export const PrimaryBigWithIcon = Template.bind({});
PrimaryBigWithIcon.args = {
  scheme: 'primary',
  size: 'big',
  icon: <PlusIcon />
};

export const PrimaryBigBordered = Template.bind({});
PrimaryBigBordered.args = {
  scheme: 'primary',
  size: 'big',
  bordered: true,
};

export const PrimaryBigBorderedWithIcon = Template.bind({});
PrimaryBigBorderedWithIcon.args = {
  scheme: 'primary',
  size: 'big',
  bordered: true,
  icon: <PlusIcon />
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  scheme: 'primaryLight',
};

export const PrimaryLightWithIcon = Template.bind({});
PrimaryLightWithIcon.args = {
  scheme: 'primaryLight',
  icon: <PlusIcon />
};

export const PrimaryLightBig = Template.bind({});
PrimaryLightBig.args = {
  scheme: 'primaryLight',
  size: 'big',
};

export const PrimaryLightBigWithIcon = Template.bind({});
PrimaryLightBigWithIcon.args = {
  scheme: 'primaryLight',
  size: 'big',
  icon: <PlusIcon />
};

export const Secondary = Template.bind({});
Secondary.args = {
  scheme: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  scheme: 'secondary',
  icon: <PlusIcon />
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
  scheme: 'secondary',
  size: 'big',
};

export const SecondaryBigWithIcon = Template.bind({});
SecondaryBigWithIcon.args = {
  scheme: 'secondary',
  size: 'big',
  icon: <PlusIcon />
};

export const Warning = Template.bind({});
Warning.args = {
  scheme: 'warning',
};

export const WarningWithIcon = Template.bind({});
WarningWithIcon.args = {
  scheme: 'warning',
  icon: <PlusIcon />
};

export const WarningBig = Template.bind({});
WarningBig.args = {
  scheme: 'warning',
  size: 'big',
};

export const WarningBigWithIcon = Template.bind({});
WarningBigWithIcon.args = {
  scheme: 'warning',
  size: 'big',
  icon: <PlusIcon />
};


export const Success = Template.bind({});
Success.args = {
  scheme: 'success',
};

export const SuccessWithIcon = Template.bind({});
SuccessWithIcon.args = {
  scheme: 'success',
  icon: <PlusIcon />
};

export const SuccessBig = Template.bind({});
SuccessBig.args = {
  scheme: 'success',
  size: 'big',
};

export const SuccessBigWithIcon = Template.bind({});
SuccessBigWithIcon.args = {
  scheme: 'success',
  size: 'big',
  icon: <PlusIcon />
};
