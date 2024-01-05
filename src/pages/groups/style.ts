import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  button + button {
    margin-left: 8px;
  }

  .container {
    min-width: 320px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {
      background-image: none;
      padding: 8px;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 0;
    .container {
      max-width: 1200px;
      margin: 0 40px;
      width: calc(100% - 80px);
      padding: 16px;
    }
  }
`;

export const Cabecalho = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
  }

  .flex {
    width: 100%;
  }

  @media (min-width: 660px) {
    flex-direction: row;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  justify-content: space-evenly;
  padding: 8px;

  button {
    min-width: 148px;
  }

  @media (min-width: 660px) {
    justify-content: flex-end;

    width: 100%;
  }
`;
