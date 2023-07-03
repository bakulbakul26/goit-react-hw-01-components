import React from 'react';
import PropTypes from 'prop-types';
import css from './profilecss.module.css';

const Profile = ({ unsername, tag, location, avatar, stats }) => {
  return (
    <div className={css.wrapper}>
      <div class={css.profile}>
        <div class={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{unsername}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
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
