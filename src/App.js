import React from 'react';

import users from './Database/user.json';
import statisticalData from './Database/statistical-data.json';
import friends from './Database/friends.json';
import transactions from './Database/transactions.json';

import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
import { FriendList } from './components/friends/friendList';
import { Transactions } from './components/transaction/transactionList';

function App() {
  return (
    <>
      <Profile
        avatar={users.avatar}
        name={users.name}
        tag={users.tag}
        location={users.location}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;
