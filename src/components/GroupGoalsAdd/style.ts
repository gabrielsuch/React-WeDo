import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8px;
    border-radius: 8px;
    min-width: 300px;
    max-width: 896px;
    background-color: var(--color-white-dark);
    color: var(--color-black);
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;

        button {
            margin-top: 32px;
        }
    }

    @media screen and (min-width: 700px) {
        h2 {
            text-align: left;
        }

        button {
            align-self: flex-end;
        }
    }
`