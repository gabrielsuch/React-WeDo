import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  min-height: 124px;
  background-color: var(--color-white-dark);
  border-radius: 8px;
  padding: 4px;
  margin: 8px;
  transition: 0.3s;

  p.title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    text-align: center;
    margin: 8px 8px 0;
    font-weight: 700;
    flex: 1 0 auto;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  main.groupGoalsCard__container {
    display: flex;
    margin-top: 16px;
    padding: 0 16px;
    flex-direction: column;
    text-align: center;
    width: 100%;

    section {
      margin-bottom: 16px;

      p.content__title {
        font-size: var(--font-size-small);
        line-height: var(--font-line-height-small);
        font-style: italic;
      }

      p.content__value {
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
        font-weight: 700;
      }
    }

    button {
      margin: 8px 0;
      width: 100%;
    }
  }

  footer.groupGoalsCard__container {
    display: flex;
    width: 100%;

    section {
      padding: 8px;
      background-color: var(--color-primary-dark);
      text-align: center;
      width: 100%;
      border-radius: 0 0 8px 8px;
      height: 32px;

      p {
        font-size: var(--font-size-body);
        line-height: var(--font-line-height-body);
        font-weight: bold;
        color: var(--color-white);
      }
    }

    button {
      display: none;
      flex: 1 0 auto;
    }
  }

  :hover {
    box-shadow: var(--box-shadow-y);

    footer.groupGoalsCard__container {
      section {
        border-radius: 0 0 0 8px;
        margin-right: 4px;
      }

      button {
        display: flex;
      }
    }
  }

  ${({ open }) =>
    open &&
    css`
      z-index: 1;
      position: fixed;
      top: 25%;
      transform: translateX(-50%)
      box-shadow: var(--box-shadow-static);

      p.title {
         word-break: break-word;
         white-space: normal;
         text-align: center;
      }

      footer.groupGoalsCard__container {
        section {
          border-radius: 0 0 8px 8px;
        }
      }

      :hover {
        footer.groupGoalsCard__container {
          section {
            border-radius: 0 0 0 8px;
            margin-right: 4px;
          }

          button {
            display: flex;
          }
        }
      }
    `}

  ${({ isUserInGroup, open }) =>
    !isUserInGroup &&
    open &&
    css`
      main.groupGoalsCard__container {
        button {
          display: none;
        }
      }

      footer.groupGoalsCard__container {
        section {
          margin-top: 16px;
          border-radius: 0 0 8px 8px;
        }
      }

      :hover {
        footer.groupGoalsCard__container {
          section {
            border-radius: 0 0 8px 8px;
            margin: 16px 0 0;
          }

          button {
            display: none;
          }
        }
      }
    `}

    ${({ achieved }) =>
    achieved &&
    css`
      footer.groupGoalsCard__container {
        section {
          background-color: var(--color-utility-success);
        }

        button {
          background-color: var(--color-utility-success);

          :hover {
            background-color: transparent;
            color: var(--color-utility-success);
            border-color: var(--color-utility-success);
          }
        }
      }
    `}
`;
