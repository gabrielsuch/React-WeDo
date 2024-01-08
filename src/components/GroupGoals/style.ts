import styled, {css} from "styled-components"


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 480px;

    .addEnd {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .fixText {
            p {
                width: 100%;
                color: var(--color-black-light);
                font-size: var(--font-size-h3);
                font-style: italic;
            }

            span {
                color: var(--color-secondary);
            }
        }

        button {
            padding: 10px;
            line-height: 10px;
        }

        @media (max-width: 530px) {
            display: flex;
            flex-direction: column;

            h3 {
                text-align: center;
            }
        }
    }

    main.goals__container,
    main.users__container {
        flex-basis: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: space-evenly;
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 416px;
    }

    footer.goals__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        margin-top: 24px;
        min-height: 40px;

        p {
            color: var(--color-black-light);
            font-size: var(--font-size-h3);
            line-height: var(--font-line-height-h3);
            font-style: italic;
            margin: 8px 0;

            span {
                color: var(--color-secondary);
            }
        }

        button {
            width: 100%;
        }
    }

    ${({hasGoals}) =>
        hasGoals &&
        css`
            footer.goals__container {
                justify-content: space-between;
            }
        `
    }

    @media screen and (min-width: 500px) {
        footer.goals__container {
            flex-direction: row;

            p {
                margin: 4px;
            }

            button {
                width: 224px;
                align-self: flex-end;
            }
        }
    }
`
