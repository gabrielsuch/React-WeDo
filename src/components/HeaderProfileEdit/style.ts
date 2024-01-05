import styled from "styled-components";

export const ShowOnlyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  opacity: 0.8;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background-color: var(--color-white-dark);
  color: var(--color-black);
  width: calc(100% - 16px);
  top: 25%;
  padding: 8px;
  position: fixed;
  border-radius: 10px;
  opacity: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  transition: 0.3s;

  @media screen and (min-width: 400px) {
    padding: 16px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (min-width: 400px) {
    justify-content: flex-start;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 10px;
  font-size: 1.5rem;
`;

export const MainModal = styled.div`
  margin: 16px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    margin-top: 16px;
    width: 100%;
  }

  @media (min-width: 400px) {
    display: flex;
    align-items: flex-end;

    button {
      width: auto;
    }
  }
`;

export const FixForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
