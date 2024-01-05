import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: 80px;
  width: 100%;
  max-width: 400px;
  position: relative;
  margin-top: 8px;

  input {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-radius: 4px;
    outline: 0;
    border: 1px solid transparent;
    padding: 8px;
    box-sizing: border-box;
    color: var(--color-black-light);
    font-size: var(--font-size-body);
    line-height: var(--font-line-height-body);
    background-color: var(--color-white);
  }

  p.placeholder {
    position: absolute;
    top: calc(50%);
    left: 10px;
    transform: translateY(-50%);
    color: var(--color-grey);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    transition: 0.3s;
    pointer-events: none;
  }

  p.error {
    margin-top: 4px;
    font-style: italic;
    color: var(--color-utility-danger);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    transition: 0.3s;
  }

  ${({ haveText }) =>
    haveText &&
    css`
      p.placeholder {
        top: 0;
        transform: translateY(0);
        left: 4px;
        color: var(--color-black);
        font-size: var(--font-size-p);
        line-height: var(--font-line-height-p);
        pointer-events: all;
      }
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      input {
        border: 1px solid var(--color-utility-danger);
      }

      p.placeholder {
        color: var(--color-utility-danger);
      }
    `}
`;

export const ContainerRadio = styled(Container)`
  max-height: 110px;
  height: auto;
  width: 100%;

  p.title {
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    color: var(--color-black);
  }

  section.options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 8px;
  }

  section.options > section.options__option {
    height: min-content;
    width: auto;
    margin: 4px 0;
  }

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 24px;
    border: 1px solid transparent;
    color: var(--color-black);
    font-size: var(--font-size-small);
    line-height: var(--font-line-height-small);
    cursor: pointer;
    transition: 0.3s;
    border-radius: 4px;
    font-weight: 700;

    :hover {
      background-color: var(--color-primary-light);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  input:checked ~ label {
    background-color: var(--color-primary-dark);
    color: var(--color-white-light);
  }

  p.error {
    margin-top: 6px;
  }

  ${({ sizeBigger }) =>
    sizeBigger &&
    css`
      label {
        width: 76px;
      }
    `}
`;

export const ContainerPassword = styled(Container)`
  svg {
    color: var(--color-grey);
    font-size: 1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    cursor: pointer;

    :hover {
      color: var(--color-grey-dark);
    }
  }
`;

export const ContainerSearch = styled(Container)`
  height: 40px;
  max-width: 250px;
  margin: 0;

  input {
    margin: 0;
  }
`;
