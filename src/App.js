import React, { Fragment } from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';

import users from './jsonData/user.json';
import statistical from './jsonData/statistical-data.json';
import friends from './jsonData/friends.json';
import transactions from './jsonData/transactions.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';


export default function App() {
  return (
    <Fragment>
      <Profile {...users} />
      <Statistics title="Upload stats" stats={statistical} />
      <FriendList friend={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}
