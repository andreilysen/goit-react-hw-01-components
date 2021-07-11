import React from 'react';
import PropTypes from 'prop-types';

import styles from './friend.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const color = isOnline ? 'green' : 'red';
  return (
    <>
      <span className={styles.status} style={{ backgroundColor: color }}></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
