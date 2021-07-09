import React from 'react';

import users from './Database/user.json';
import statisticalData from './Database/statistical-data.json';

import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics';
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
    </>
  );
}

export default App;
