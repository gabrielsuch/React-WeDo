import styled from "styled-components"
import Ilustration from "../../assets/Ilustration.png"

export const Title = styled.h2`
    color: var(--color-black-dark);
`

export const Main = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: space-evenly;
    padding-top: 100px;

    @media screen and (min-width: 800px) {
        padding-top: 0;
        flex-direction: row;
        margin: 40px 40px 32px;
        display: flex;
        align-items: flex-start;
    }

    @media screen and (min-width: 1240px) {
        margin: auto;
    }
`

export const ContainerHabits = styled.div`
    min-width: 320px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .habits {
        max-height: 680px;
        overflow-y: ${(props) => props.overflow};
    }

    @media screen and (min-width: 800px) {
        margin-bottom: 0px;
        max-width: 340px;
        margin-right: 10px;
        margin-bottom: 20px;
    }
`

export const ContainerGroups = styled.div`
    min-width: 320px;
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    height: 680px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .div-button {
        display: flex;
        flex-direction: column;
        margin: 15px;
    }

    @media screen and (min-width: 800px) {
        background-image: url(${Ilustration});
        background-repeat: no-repeat;
        background-size: auto;
        margin-top: 0px;
        margin-left: 10px;
        margin-bottom: 20px;
        width: 100%;

        .div-button {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        button {
            display: inline;
            margin: 14px;
        }
    }
`

export const HeadContainer = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Groups = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const NoItems = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
`

export const BackgroundMessage = styled.p`
    position: ${(props) => props.absolute};
    color: var(--color-black);
    text-align: center;
    max-width: 300px;
    border-radius: 5px;
    padding: 15px;
    font-style: italic;
    font-size: 24px;
    top: 154px;

    @media screen and (min-width: 800px) {
        background-color: ${(props) => (props.background ? "#FFFFFF" : "none")};
        box-shadow: ${(props) =>
            props.background ? "0px 4px 10px rgba(0, 0, 0, 0.5)" : "none"};
        border-radius: 10px;
    }
`

export const BackgroundImage1 = styled.img`
    z-index: 0;
    width: 100%;
    display: none;
    position: absolute;
    top: 139px;

    @media screen and (min-width: 800px) {
        display: inline;
    }
`
