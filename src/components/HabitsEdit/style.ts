import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8px;
    border-radius: 8px;
    min-width: 300px;
    max-width: 896px;
    background-color: var(--color-white-dark);
    color: var(--color-black);
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;

    form {
        display: flex;
        flex-direction: column;

        section.inputs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 400px;
        }

        section.buttons {
            margin-top: 32px;
            display: flex;
            justify-content: space-between;

            button {
                min-width: 140px;
                width: 100%;
            }

            button + button {
                margin-left: 8px;
            }
        }
    }

    @media screen and (min-width: 1640px) {
        form {
            section.inputs {
                max-width: 820px;

                section:nth-of-type(2n) {
                    margin-left: 8px;
                }
            }
            section.buttons {
                margin-top: 32px;
                display: flex;
                justify-content: flex-end;

                button {
                    max-width: 160px;
                    width: 100%;
                }

                button + button {
                    margin-left: 8px;
                }
            }
        }
    }
`
