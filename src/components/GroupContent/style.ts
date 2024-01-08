import styled from "styled-components"


export const Main = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--color-white-light);
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    margin: 8px;

    main.groupContent__container {
        height: 496px;
        margin-top: 8px;
        background-color: var(--color-white);
        padding: 8px;
        border-radius: 0 0 8px 8px;
    }

    @media screen and (min-width: 400px) {
        margin: 16px;
    }

    @media screen and (min-width: 800px) {
        margin: 40px;
        padding-top: 10px;
    }

    @media screen and (min-width: 1200px) {
        margin: 0 auto;
    }
`

export const GroupTitle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-white);
    padding: 8px 8px 12px;
    border-radius: 10px;
    margin-bottom: 40px;
    position: relative;

    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: var(--font-size-h2);
        line-height: var(--font-line-height-h2);
        word-break: break-word;
        padding: 8px;
    }

    @media (max-width: 550px) {
        h2 {
            text-align: center;
        }
    }

    .category {
        background: var(--color-secondary);
        min-width: 136px;
        width: auto;
        height: 32px;
        padding: 0 8px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-white-light);

        font-style: normal;
        font-weight: bold;
        font-size: var(--font-size-body);
        line-height: var(--font-line-height-body);
        position: absolute;
        right: 8px;
        bottom: -16px;

        @media (max-width: 550px) {
            width: 100%;
            margin: 10px 0 -60px 0;
            position: static;
        }
    }

    @media (max-width: 550px) {
        width: 100%;
        margin-bottom: 46px;
        justify-content: center;
        padding: 10px 0;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--color-white-dark);

    Button {
        width: 295px;
        text-align: center;
        border-radius: 0px;
    }

    Button:hover {
        background-color: var(--color-primary-dark);
    }

    Button:nth-child(1) {
        border-top-left-radius: 5px;
    }

    Button:nth-child(4) {
        border-top-right-radius: 5px;
    }

`

export const GroupInfos = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: var(--color-white);
`

export const Footer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 420px) {
        flex-direction: column;
        text-align: center;

        Button {
            margin-top: 10px;
        }
    }
`