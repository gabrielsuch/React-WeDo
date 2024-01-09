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

        button {
            margin-top: 32px;
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
            button {
                align-self: flex-end;
            }
        }
    }
`
