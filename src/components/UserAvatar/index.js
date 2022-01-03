import React from 'react';
import PropTypes from 'prop-types';
import { UserIcon } from '@flatchr/icons';

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
        <UserIcon
          height={Math.floor(size * .35)}
          width={Math.floor(size * .35)}
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
