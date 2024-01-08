import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LeftSide = styled.div`
    max-width: 600px;
    width: 75%;
    display: flex;
    justify-content: center;
    margin-right: 40px;

    img {
        width: 100%;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`

export const RightSide = styled.div`
    font-size: 1.2rem;
    max-width: 600px;
    min-width: 500px;
    width: 100%;

    @media (max-width: 1000px) {
        min-width: 300px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const Box = styled.div`
    max-width: 600px;
    height: 80vh;
    background-color: white;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    position: relative;
    box-shadow: var(--box-shadow-y);

    @media (max-width: 1000px) {
        width: 100%;
        height: 70vh;
    }

    @media (max-width: 600px) {
        width: 100%;
        height: 100vh;
        border-radius: 0px;
    }
`

export const CenterForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 16px;

    Button {
        margin-top: 24px;
    }
`

export const AlreadyRegistered = styled.p`
    background-color: transparent;
    font-size: 1.2rem;
    margin-top: 24px;
    text-align: center;

    span {
        color: var(--color-secondary);
        cursor: pointer;
    }

    @media (max-width: 1000px) {
        font-size: 1.5rem;
    }
`

export const DivFlower = styled.div`
    position: absolute;
    bottom: -18px;
    right: 8px;
    transform: translateX(50%);

    @media (max-width: 1000px) {
        display: none;
    }
`
