import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.module.css';
// console.log(users);
// const file = users
export const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <h2 className={styles.name}>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.items}>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.items}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.items}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=User+avatar',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
