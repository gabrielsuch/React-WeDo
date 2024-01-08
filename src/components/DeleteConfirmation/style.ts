import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 8px;
    border-radius: 8px;
    min-width: 300px;
    max-width: 400px;
    background-color: var(--color-white-dark);
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    width: calc(100% - 16px);
    transition: 0.3s;

    h2 {
        text-align: center;
    }

    main {
        display: flex;
        justify-content: center;
        margin: 16px 0 0;

        button {
            min-width: 120px;
            width: 100%;
        }

        button + button {
            margin-left: 8px;
        }
    }

    @media screen and (min-width: 500px) {
        padding: 16px;
    }
`
