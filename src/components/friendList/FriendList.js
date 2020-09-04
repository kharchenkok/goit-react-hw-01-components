import React from 'react';
import FriendStyle from './FriendList.module.css';

import PropTypes from 'prop-types';

export default function FriendList({ friend }) {
  return (
    <ul className={FriendStyle.friends}>
      {friend.map(elem => (
        <li key={elem.id} className={FriendStyle.item}>
          {elem.isOnline ? (
            <span className={FriendStyle.online} />
          ) : (
            <span className={FriendStyle.offline} />
          )}
          <img
            className={FriendStyle.avatar}
            src={elem.avatar}
            alt="Some user"
            width="48"
          />
          <p className={FriendStyle.name}>{elem.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};
