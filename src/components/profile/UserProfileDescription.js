import React from 'react';
import ProfileStyle from './Profile.module.css';

export default function UserProfileDescription({avatar, name, tag, location}){
return (
    <div className={ProfileStyle.description}>
    <img
      src={avatar}
      alt="user avatar"
      className={ProfileStyle.avatar}
    />
    <p className={ProfileStyle.name}>{name}</p>
    <p className={ProfileStyle.tag}>@{tag}</p>
    <p className={ProfileStyle.location}>{location}</p>
  </div>
)

}