import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  padding: 15px;
  width: 244px;
  border-radius: 4px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 30px 20px;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #9d9d9d;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const Tag = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9d9d9d;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9d9d9d;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  min-width: 70px;
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #7d7d7d;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
