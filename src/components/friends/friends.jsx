import PropTypes from 'prop-types';
import css from './friends.module.css';


const getStatusClassName = (isOnline) => {
  return isOnline ? "online" : "offline";
};

export const FriendList = ({ friends }) => {
    const { avatar, name, id, isOnline } = friends;
    return (
        <ul className={css.friendslist}>
            <li className={css.item} key={id}>
                {/* isOnline */}
                <span className={css.status}> 
                 <span className={css.status + ' ' + getStatusClassName(isOnline)}></span>
                </span>
             <img src={avatar} alt={name} className={css.avatar} />
             <p className={css.name}>{name}</p>
            </li>
        </ul>
    )
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList