import styled from "styled-components";

export const Container = styled.form`
  width: 308px;
  background: var(--color-white-dark);
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  .button {
    width: 95%;
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
  }

  h2 {
    font-size: var(--font-size-h2);
    line-height: var(--font-line-height-h2);
    color: var(--color-black);
    font-weight: bold;
    margin-bottom: 32px;
  }

  @media (min-width: 660px) {
    width: 440px;

    justify-content: center;

    .raiva {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    width: 100%;
  }
`;
