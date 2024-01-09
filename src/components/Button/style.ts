import styled, {css} from "styled-components"

export const Container = styled.button`
    outline: 0;
    border: 1px solid transparent;

    min-width: 160px;
    height: 40px;
    border-radius: 8px;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);

    color: var(--color-white);
    background-color: var(--color-secondary);

    cursor: pointer;
    transition: 0.3s;

    :hover {
        border-color: var(--color-secondary);
        color: var(--color-secondary);
        background-color: transparent;
    }

    ${({secondary}) =>
        secondary &&
        css`
            background-color: transparent;
            border-color: var(--color-secondary);
            color: var(--color-secondary);

            :hover {
                background-color: var(--color-secondary-light);
                border-color: var(--color-secondary-light);
                color: var(--color-white-light);
            }
        `}
`

export const ContainerIcon = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    width: 40px;
    height: 40px;

    svg {
        font-size: inherit;
        color: inherit;
    }

    ${({card}) =>
        card &&
        css`
            width: 32px;
            height: 32px;
            border-radius: 0 0 10px 0;
        `}

    ${({primaryColor}) =>
        primaryColor &&
        css`
            background-color: var(--color-primary-dark);

            :hover {
                color: var(--color-black);
                background-color: var(--color-primary-light);
                border-color: var(--color-primary-light);
            }
        `}
`
