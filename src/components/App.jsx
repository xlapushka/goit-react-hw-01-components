import user from "../json/user";
import data from "../json/data";
import friends from "../json/friends";
import transactions from '../json/transactions';

import {Profile} from './profile/profile';
import {Statistics} from "./statistics/statistics";
import {FriendList} from "./friendlist/friendList";
import {TransactionHistory} from "./transactionHistory/transactionHistory"


export const App = () => {
  return (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics 
      title={"Upload stats"} 
      stats={data} 
    />
    <Statistics 
      stats={data} 
    />

    <FriendList 
      friends={friends} 
    />

    <TransactionHistory 
      items={transactions} 
    />

  </>)
};
