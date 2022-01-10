import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { UserIcon } from '@flatchr/icons';
import { typography } from '@flatchr/helper';

import { Wrapper, InitialsWrapper } from './style';

const UserAvatar = props => {
  const {
    picture = null,
    size = 35,
    withInitials = null,
  } = props;

  const initials = useMemo(() => {
    if (!!withInitials?.firstname?.length) {
      return typography.getNameInitials(withInitials.firstname, withInitials?.lastname)
    }
    return null;
  }, [withInitials]);

  return (
    <Wrapper
      className="user-avatar"
      picture={initials ? null : picture}
      height={size}
      width={size}
      withInitials={!!initials?.length}
    >
      {(!initials && !picture) && (
        <UserIcon
          height={Math.floor(size * .35)}
          width={Math.floor(size * .35)}
        />
      )}
      {initials && (
        <InitialsWrapper>
          {initials}
        </InitialsWrapper>
      )}
    </Wrapper>
  );
};

UserAvatar.propTypes = {
  size: PropTypes.number,
  picture: PropTypes.string,
  withInitials: PropTypes.oneOfType([
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string,
    }),
    PropTypes.number, // used for null
  ]),
};

export default UserAvatar;
