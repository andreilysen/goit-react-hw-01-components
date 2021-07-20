import React from 'react';
import PropTypes from 'prop-types';

import { FriendListItem } from './friendListItem';

import styles from './friend.module.css';

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
