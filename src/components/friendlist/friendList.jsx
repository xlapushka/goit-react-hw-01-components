import PropTypes from 'prop-types';
import {FriendListItem} from './friendListItem'
import css from './friendList.module.css'

FriendList.propTypes = {
  friends : PropTypes.arrayOf(PropTypes.object).isRequired
}

export function FriendList(props) {
  const {
    friends
  } = props;


  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key = {friend.id}
          avatar = {friend.avatar}
          name = {friend.name}
          isOnline = {friend.isOnline}
         />
      ))}  
    </ul>)
}


// import PropTypes from 'prop-types';
// import { RiCheckboxBlankCircleFill } from "react-icons/ri";
// import css from './friendList.module.css'

// FriendList.propTypes = {
//   friends : PropTypes.arrayOf(PropTypes.shape({
//     id : PropTypes.number.isRequired,
//     avatar : PropTypes.string.isRequired,
//     name : PropTypes.string.isRequired,
//     isOnline : PropTypes.bool.isRequired
//   })).isRequired
// }


// export function FriendList(props) {
//   const {
//     friends
//   } = props;

//   return (
//     <ul className={css.friendList}>
//       {friends.map((friend) => {
//         return (
//           <li className={css.item} key={friend.id}>
//             <span className={css.status}>
//               {friend.isOnline ? < RiCheckboxBlankCircleFill color='#8bc62b'/> : < RiCheckboxBlankCircleFill color='#fc3a28' />}
//             </span>
//             <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
//             <p className={css.name}>{friend.name}</p>
//           </li>
//         )
//       })}  
//     </ul>)
//   }