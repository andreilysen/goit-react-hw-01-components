import React from 'react';
import PropTypes from 'prop-types';

import styles from './friend.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, id, isOnline }) => {
    const color = isOnline ? 'green' : 'red';
    return (
      <li className={styles.item} key={id}>
        <span
          className={styles.status}
          style={{ backgroundColor: color }}
        ></span>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
