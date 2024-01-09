import styled, {css} from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px;
    background-color: var(--color-white-dark);
    width: 300px;
    min-height: 124px;
    border-radius: 10px;
    transition: 0.3s;
    margin: 4px 0 12px;

    p.card__title {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
        font-weight: 700;
        margin: 4px;
        height: 64px;
    }

    section.hover {
        display: none;

        section.content__container {
            height: 124px;
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            justify-content: space-between;
            margin: 8px 0;

            section {
                height: 60px;
                width: 136px;

                p {
                    text-align: center;
                }

                p.content__title {
                    font-size: var(--font-size-small);
                    line-height: var(--font-line-height-small);
                    font-weight: 400;
                    font-style: italic;
                }

                p.content__value {
                    font-size: var(--font-size-h3);
                    line-height: var(--font-line-height-h3);
                    font-weight: 700;
                }
            }
        }

        button {
            margin-bottom: 8px;
            width: 100%;
        }
    }

    footer.card__footer {
        display: flex;
        justify-content: space-between;

        section {
            width: 144px;
            height: 32px;
            background-color: var(--color-primary-dark);
            border-radius: 0 0 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;

            p {
                font-size: var(--font-size-body);
                line-height: var(--font-line-height-body);
                font-weight: 700;
                color: var(--color-white);
            }
        }

        section + section {
            border-radius: 0 0 10px 0;
        }

        button {
            display: none;
            transition: 0.3s;
        }
    }

    :hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

        section.hover {
            display: block;
        }

        footer {
            section {
                width: 126px;
            }

            section + section {
                border-radius: 0 0 0 0;
                transform: translateX(0);
            }

            button {
                display: block;
                width: 32px;
                border-width: 2px;
            }
        }
    }

    ${({achieved}) =>
        achieved &&
        css`
            footer.card__footer {
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
`
