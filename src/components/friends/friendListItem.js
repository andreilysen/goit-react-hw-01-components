import React from 'react';
import PropTypes from 'prop-types';

import styles from './friend.module.css';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  // console.log(friend);
  const color = isOnline ? 'green' : 'red';
  return (
    <li className={styles.item}>
      <span className={styles.status} style={{ backgroundColor: color }}></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
