import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 22px;
  width: 264px;
  background-color: var(--color-white);
  padding: 16px;
  border-radius: 8px;
  z-index: 1;

  p {
    margin-top: 16px;
    width: 100%;
    text-align: center;
    font-style: italic;

    span {
      color: var(--color-secondary);
    }
  }

  button {
    margin-top: 16px;
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    width: 332px;
    top: 50px;
    padding-top: 48px;

    p {
      font-size: var(--font-size-h3);
      line-height: var(--font-line-height-h3);
    }
  }
`;
