import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  border-radius: 2px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  display: block;
  padding: 30px;
  margin: 0;
  text-align: center;
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: inline-flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50px;
  list-style: none;
  padding: 15px;
`;

export const Label = styled.span`
  text-align: center;
  font-style: 14px;
  color: #fff;
`;

export const Percentage = styled.span`
  text-align: center;
  font-style: 18px;
  font-weight: 700;
  color: #fff;
`;
