import user from "./json/user";
import data from "./json/data";
import friends from "./json/friends";
import {Profile} from './profile/profile';
import {Statistics} from "./statistics/statistics";
import {FriendList} from "./friendlist/friendList";


export const App = () => {
  return (<>
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
    {/* <Statistics 
      stats={data} 
    /> */}

    <FriendList 
      friends={friends} 
    />;



  </>)

  // return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>    
  // );
};
