import React from 'react';
import PropTypes from 'prop-types';
import { PeopleIcon } from '@flatchr/icons';

import { Wrapper } from './style';

const UserAvatar = props => {
  const {
    picture = null,
    size = 35,
  } = props;

  return (
    <Wrapper
      className="user-avatar"
      picture={picture}
      height={size}
      width={size}
    >
      {!picture && (
        <PeopleIcon
          height={Math.floor(size * .45)}
          width={Math.floor(size * .45)}
        />
      )}
    </Wrapper>
  );
};

UserAvatar.propTypes = {
  size: PropTypes.number,
  picture: PropTypes.string,
};

export default UserAvatar;
