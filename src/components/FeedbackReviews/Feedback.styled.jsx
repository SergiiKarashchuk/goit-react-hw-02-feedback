import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 15px;
  padding: 15px;
  justify-content: center;
  list-style: none;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  color: #ffffff;

  background-color: ${props => {
    switch (props.children) {
      case 'Good':
        return 'green';
      case 'Neutral':
        return 'gray';
      case 'Bad':
        return 'red';
      default:
        return 'white';
    }
  }};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & ul {
    list-style: none;
  }
`;
