import styled, {css} from "styled-components"

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;

    section.selected {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: var(--color-secondary);
        color: var(--color-white-light);
        width: 100%;

        border-radius: 8px 8px 0 0;
        padding: 8px;

        p {
            font-size: var(--font-size-h3);
            line-height: var(--font-line-height-h3);
            font-weight: bold;
            flex: 1 0 auto;
            text-align: center;
            margin-left: 32px;
        }

        svg {
            font-size: 1.5rem;
            cursor: pointer;
            right: 8px;
            transition: 0.3s;
            justify-self: flex-end;
            width: 24px;

            :hover {
                transform: scale(1.2);
                color: var(--color-primary-light);
            }
        }
    }

    section.menu__options {
        display: none;
        background-color: var(--color-primary-light);
        padding: 8px;
        border-radius: 0 0 8px 8px;
        box-shadow: var(--box-shadow-y);
        z-index: 1;
        transition: 0.3s;
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-black);
            text-align: center;
            font-size: var(--font-size-h3);
            line-height: var(--font-line-height-h3);
            font-weight: bold;
            height: 40px;
            margin: 8px;
            border-radius: 8px;
            transition: 0.3s;
            cursor: pointer;

            :hover {
                box-shadow: var(--box-shadow-y);
                color: var(--color-white-light);
                background-color: var(--color-primary-dark);
            }
        }

        ${({selectedOption}) =>
            selectedOption === "Info"
                ? css`
                      p#infoOption {
                          color: var(--color-white-light);
                          background-color: var(--color-secondary);
                      }
                  `
                : selectedOption === "Metas"
                  ? css`
                        p#goalsOption {
                            color: var(--color-white-light);
                            background-color: var(--color-secondary);
                        }
                    `
                  : selectedOption === "Atividades"
                    ? css`
                          p#activitiesOption {
                              color: var(--color-white-light);
                              background-color: var(--color-secondary);
                          }
                      `
                    : selectedOption === "Usuários"
                      ? css`
                            p#usersOption {
                                color: var(--color-white-light);
                                background-color: var(--color-secondary);
                            }
                        `
                      : ""}
    }

    ${({openMenu}) =>
        openMenu &&
        css`
            section.selected {
                z-index: 2;
                position: fixed;
                top: 25%;

                left: 16px;
                right: 16px;
                width: calc(100% - 32px);
                svg {
                }
            }

            section.menu__options {
                display: block;
                position: fixed;
                top: calc(25% + 48px);

                left: 16px;
                right: 16px;
            }
        `}

    @media screen and (min-width: 550px) {
        section.selected,
        .modal {
            display: none;
        }

        section.menu__options {
            position: static;
            padding: 0;
            display: flex;
            justify-content: space-between;
            background-color: var(--color-white-dark);
            height: 56px;
            box-shadow: none;
            border-radius: 8px 8px 0 0;
            z-index: auto;

            p {
                height: 100%;
                width: 100%;
                margin: 0;
                border-radius: 0;

                :hover {
                    z-index: 0;
                }

                :hover#infoOption {
                    border-radius: 8px 0 0 0;
                }

                :hover#usersOption {
                    border-radius: 0 8px 0 0;
                }
            }
        }

        ${({selectedOption}) =>
            selectedOption === "Info"
                ? css`
                      p#infoOption {
                          box-shadow: var(--box-shadow-static);
                          border-radius: 8px 0 0 0;
                      }
                  `
                : selectedOption === "Metas"
                  ? css`
                        p#goalsOption {
                            box-shadow: var(--box-shadow-static);
                        }
                    `
                  : selectedOption === "Atividades"
                    ? css`
                          p#activitiesOption {
                              box-shadow: var(--box-shadow-static);
                          }
                      `
                    : selectedOption === "Usuários"
                      ? css`
                            p#usersOption {
                                box-shadow: var(--box-shadow-static);
                            }
                        `
                      : ""}
    }
`
