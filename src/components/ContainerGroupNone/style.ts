import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-black-light);
  font-size: var(--font-size-h2);
  line-height: var(--font-line-height-h2);
  font-style: italic;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: var(--color-white-light);

  @media (min-width: 800px) {
    width: 404px;
    height: 216px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    width: 266px;
    height: 96px;
    font-weight: 400;
  }
`;
