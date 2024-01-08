import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: solid black 1px;
  min-height: 100vh;

  .span-redirect {
    color: var(--color-secondary);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .image,
    .flower {
      display: none;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .image {
      max-width: 600px;
      width: 45%;

      @media (max-width: 1000px) {
        display: none;
      }
    }
    .flower {
      width: 136px;
      height: 345px;
      position: absolute;
      transform: translateX(-50%);
      bottom: -11px;
      left: 8px;

      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: var(--color-white-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 16px;

  Button {
    margin-top: 24px;
  }

  @media (min-width: 600px) {
    box-shadow: var(--box-shadow-y);
    width: 600px;
    min-height: 80vh;
    border-radius: 10px;
    padding: 16px;
    max-width: 600px;
    min-width: 500px;
    margin-right: 40px;
  }
`;
