import PropTypes from 'prop-types';
import {FriendListItem} from './friendListItem'
import css from './friendList.module.css'

FriendList.prototypes = {
  friends : PropTypes.arrayOf(PropTypes.object)
}


export function FriendList(props) {
  const {
    friends
  } = props;

  const FriendList = friends.map((friend) => {
    return FriendListItem(friend);
  })

  return (
    <ul className={css.friendList}>
      {FriendList}  
    </ul>)
  }