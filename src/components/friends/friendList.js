import React from 'react';
// import PropTypes from 'prop-types';

import { FriendListItem } from './friendListItem';

import styles from './friend.module.css';

export const FriendList = ({ friends }) => {
  //   console.log(friends);
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     }).isRequired,
//   ).isRequired,
// };
