import user from "user";
import data from "data";
import {Profile} from './profile/profile';
import {Statistics} from "./statistics/statistics";

export const App = () => {
  return (<>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />
    {/* <Statistics stats={data} /> */}

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
