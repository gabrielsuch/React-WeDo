import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 324px;
  height: 650px;
  background-color: var(--color-white-light);
  border-radius: 8px;

  header {
    margin: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    margin-right: 4px;
  }

  section.habits__container {
    max-height: 580px;
    width: 100%;
    overflow-y: scroll;
    padding: 4px 0 0 8px;
    margin: 0 8px 0 0;
  }

  @media (min-width: 800px) {
    margin-right: 16px;
  }
`;
