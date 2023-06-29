import PropTypes from 'prop-types';

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
      <div class="profile">
        <div class="description">
          <img
            src={avatar}
            alt="User avatar"
            class="avatar"
          />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>
      
        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{likes}</span>
          </li>
        </ul>
      </div>)
};