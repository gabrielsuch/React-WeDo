import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--color-white-light);
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media screen and (min-width: 800px) {
    padding-top: 10px;
  }
`;

export const GroupTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--color-white-dark);

  Button {
    width: 295px;
    text-align: center;
    border-radius: 0px;
  }
  Button:hover {
    background-color: var(--color-primary-dark);
  }
  Button:nth-child(1) {
    border-top-left-radius: 5px;
  }
  Button:nth-child(4) {
    border-top-right-radius: 5px;
  }
`;

export const GroupInfos = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-white);
`;

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
    text-align: center;

    Button {
      margin-top: 10px;
    }
  }
`;
