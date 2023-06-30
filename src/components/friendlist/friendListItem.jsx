import PropTypes from 'prop-types';

FriendListItem.prototypes = {
  id : PropTypes.number,
  avatar : PropTypes.string,
  name : PropTypes.string,
  isOnline : PropTypes.bool
}


export function FriendListItem(props) {
  const {
    id, 
    avatar, 
    name = "Friend's name",
    isOnline
  } = props;
  

  return (
    <li class="item" key={id}>
      <span class="status">{isOnline ? 'green' : 'red'}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  )
}