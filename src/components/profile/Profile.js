import React from 'react';
import ProfileStyle from './Profile.module.css';
import UserProfileDescription from './UserProfileDescription';
import UserProfileStats from './UserProfileStats';
import PropTypes from 'prop-types';

// console.log(style);

export default function Profile({ name, tag, location, avatar, stats }) {
  // console.log(users);
  return (
    <div className={ProfileStyle.profile}>
      <UserProfileDescription {...{ avatar, name, tag, location }} />

      <ul className={ProfileStyle.stats}>
        <UserProfileStats userStats={stats} />
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
