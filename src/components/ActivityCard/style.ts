import styled from "styled-components"

export const Card = styled.div`
    width: 280px;
    height: 95px;
    background-color: white;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    background-color: var(--color-primary-dark);
    margin: 4px;
    transition: 0.3s;

    .title {
        margin: 4px;

        h3 {
            word-break: break-word;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .date {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        font-style: italic;
    }

    .alignItems {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 4px;

        svg {
            width: 24px;
            height: 24px;
            color: var(--color-primary-light);
            transition: 0.3s;
        }

        p:nth-child(2) {
            padding-left: 10px;
        }
    }

    .icon {
        display: none;
    }

    :hover {
        background-color: var(--color-primary);
        box-shadow: var(--box-shadow-y);

        .icon {
            display: block;
        }

        .alignItems {
            svg {
                color: var(--color-primary-dark);
            }
        }

        .icon {
            button {
                background-color: transparent;
                color: var(--color-primary-dark);

                :hover {
                    background-color: var(--color-secondary);
                    color: var(--color-primary-light);
                    border-radius: 0px;
                    border-bottom-right-radius: 10px;
                    border-color: var(--color-secondary);
                }
            }
        }

        background-color: var(--color-primary);
    }
`