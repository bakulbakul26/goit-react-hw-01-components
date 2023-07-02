import React from 'react';

import Profile from './profile/profile';
import FriendList from './friendList/friendList';
import Statistics from './statistisc/statistisc';
import Transaction from './transaction/transaction';

import user from './profile/user.json';
import data from './statistisc/data.json';
import friends from './friendList/friends.json';
import transaction from './transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transaction} />
    </div>
  );
};
