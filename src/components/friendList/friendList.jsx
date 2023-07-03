import React from 'react';
import css from './friendListcss.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={css.item}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendList;
