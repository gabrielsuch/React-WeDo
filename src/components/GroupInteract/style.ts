import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .container1 {
    max-width: 500px;
  }
  .container2 {
    max-width: 800px;

    @media (max-width: 1150px) {
      img {
        width: 500pwx;
      }
    }
    @media (max-width: 950px) {
      img {
        width: 350px;
      }
    }
  }
  width: 419px;
  margin-top: 10px;

  span {
    color: var(--color-black);
    font-weight: bold;
  }

  @media (max-width: 460px) {
    width: 280px;
  }
`;

export const Container2 = styled.div`
  .addEnd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3 {
      margin-top: 5px;
      font-style: italic;
      font-weight: 400;
    }
    Button {
      padding: 10px;
      line-height: 15px;
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 416px;
  flex: 1 0 100%;

  img {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  h3 {
    width: 250px;
    margin: auto;
    font-weight: 400;
    font-style: italic;
    text-align: center;
  }
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
