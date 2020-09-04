import React from 'react';
import ProfileStyle from './Profile.module.css';

export default function UserProfileStats({ userStats }) {
  // console.log('stats', userStats);
  const statsArr = Object.entries(userStats);
  // console.log(statsArr);
  return statsArr.map((elem, index) => (
    <li key={index}>
      <span className={ProfileStyle.label}>{elem[0]}</span>
      <span className={ProfileStyle.quantity}>{elem[1]}</span>
    </li>
  ));
}
