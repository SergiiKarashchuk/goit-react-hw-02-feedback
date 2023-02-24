import styled from 'styled-components';

export const StatisticsBox = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 25px;
  color: black;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 0px;

  & li {
    list-style: none;

    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const StatGood = styled.li`
  background-color: green;
`;

export const StatNeutral = styled.li`
  background-color: grey;
`;

export const StatBad = styled.li`
  background-color: red;
`;

export const StatTotal = styled.li`
  background-color: #e5eaf5;
`;
