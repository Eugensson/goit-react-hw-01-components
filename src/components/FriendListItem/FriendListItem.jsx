import PropTypes from 'prop-types';
import {
  Item,
  Avatar,
  Name,
  Status,
} from 'components/FriendListItem/FriendListItem.styled';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
