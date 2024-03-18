import css from './Profile.module.css';
export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css['main-wrap']}>
      <div className={css['profile-wrap']}>
        <img className={css['profile-img']} src={image} alt={name} />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-email']}>@{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>

      <ul className={css['profile-list']}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
