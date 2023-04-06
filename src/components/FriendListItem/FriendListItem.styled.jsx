import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  list-style: none;
  width: 150px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 4px 2px 2px #999696;
`;

export const Avatar = styled.img`
  border-radius: 2px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    // return props.isOnline ? 'green' : 'red';

    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;
