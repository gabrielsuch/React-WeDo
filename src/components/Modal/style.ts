import styled from 'styled-components';

export const ContainerModal = styled.div`
  background-color: var(--color-black-light);
  color: var(--color-black);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  position: fixed;
  opacity: 0.7;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
