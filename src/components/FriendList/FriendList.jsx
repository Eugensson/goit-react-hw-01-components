import FriendListItem from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li id={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
