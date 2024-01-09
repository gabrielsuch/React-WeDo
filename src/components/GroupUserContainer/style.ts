import styled from "styled-components"

export const Footer = styled.footer`
    text-align: left;
    display: flex;
    align-items: center;
    height: 40px;

    p {
        width: 100%;
        color: var(--color-black-light);
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
        font-style: italic;
    }
    span {
        color: var(--color-secondary);
    }
`
