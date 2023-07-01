import PropTypes from 'prop-types';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import css from './friendList.module.css';

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
    <li className={css.item} key={id}>
      <span className={css.status}>
        {isOnline ? < RiCheckboxBlankCircleFill color='#8bc62b'/> : < RiCheckboxBlankCircleFill color='#fc3a28' />}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
}

