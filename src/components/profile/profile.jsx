import PropTypes from 'prop-types';
import { IoPeople, IoEye, IoThumbsUp } from "react-icons/io5"
import css from './profile.module.css'

Profile.prototypes = {
  avatar : PropTypes.string, 
  username : PropTypes.string, 
  tag : PropTypes.string, 
  location : PropTypes.string, 
  stats: {followers : PropTypes.number, 
          views : PropTypes.number, 
          likes : PropTypes.number} 
}

export function Profile(props) {
  const {
    avatar, 
    username = "User name", 
    tag = "User tag", 
    location = "User location", 
    stats: {followers, views, likes} 
  } = props;

  return (  
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      
        <ul className={css.stats}>
          <li>
            < IoPeople color ='#a9aaaa'/>
            <span className={css.label}> Followers: </span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li>
            < IoEye color ='#a9aaaa'/>
            <span className={css.label}> Views: </span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li>
            < IoThumbsUp color ='#a9aaaa'/>
            <span className={css.label}> Likes: </span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>)
};