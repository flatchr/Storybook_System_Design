import React from 'react';

import UserAvatar from './index';

const UserAvatarStories = {
  title: 'User/UserAvatar',
  component: UserAvatar,
  parameters: {
    options: { showPanel: true },
  },
  argTypes: {
    picture: {
      defaultValue: null,
      description: "URL of the user picture",
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
    size: {
      defaultValue: 35,
      description: "Size of the user avatar",
      control: {
        type: "number",
      },
      table: {
        defaultValue: {
          summary: 35,
        },
        type: { summary: "number" },
      },
    },
    withInitials: {
      defaultValue: null,
      description: "Render initials of the user instead of icon or image",
      control: {
        type: 'object',
      },
      table: {
        defaultValue: {
          summary: "null",
        },
        type: { summary: "object" },
      },
    }
  },
};

export default UserAvatarStories;

const Template = (args) => <UserAvatar {...args} />;

// Without Picture
export const WithoutPicture = Template.bind({});
WithoutPicture.args = {
  size: 35,
};

// With Picture
export const WithPicture = Template.bind({});
WithPicture.args = {
  size: 35,
  picture: 'https://www.madmoizelle.com/wp-content/uploads/2014/03/pourquoi-pingouins-etres-fascinants.jpg',
};

// With Initials
export const WithInitials = Template.bind({});
WithInitials.args = {
  size: 35,
  withInitials: {
    firstname: 'Luke',
    lastname: 'Skywalker'
  },
};
