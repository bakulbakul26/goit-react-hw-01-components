import React from 'react';
import PropTypes from 'prop-types';
import './profilecss.css';

const Profile = ({ unsername, tag, location, avatar, stats }) => {
  return (
    <div className="wrapper">
      <div class="profile">
        <div class="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{unsername}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  unsername: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
