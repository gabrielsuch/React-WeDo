import styled, {css} from "styled-components"

export const Container = styled.header`
    background: var(--color-white-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    max-width: 1200px;
    width: 100vw;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    position: fixed;
    top: 0;
    z-index: 1;

    p.logo {
        font-size: var(--font-size-h2);
        line-height: var(--font-line-height-h2);
        font-weight: bold;
        cursor: pointer;
    }

    section.menu__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        p.header__username {
            margin-right: 12px;
            font-style: italic;

            span {
                color: var(--color-secondary);
            }
        }

        img.profile {
            transition: 0.3s;
            flex-basis: 100%;
            max-width: 44px;
            height: auto;
            cursor: pointer;
        }
    }

    ${({openHover}) =>
        openHover &&
        css`
            section.menu__info {
                p.header__username {
                    display: none;
                }

                img.profile {
                    z-index: 2;
                }
            }
        `}

    @media screen and (min-width: 800px) {
        padding: 12px;
        height: 124px;
        width: auto;
        margin: 40px 40px 32px;
        position: static;

        p.logo {
            font-size: var(--font-size-h1);
            line-height: var(--font-line-height-h1);
            margin: 28px;
        }

        section.menu__info {
            p.header__username {
                margin-right: 20px;
                font-size: var(--font-size-h3);
                line-height: var(--font-line-height-h3);
            }

            img.profile {
                max-width: 100px;
            }
        }
    }

    :hover {
        section.menu__info {
            img.profile {
                filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.75));
            }
        }
    }

    @media screen and (min-width: 1240px) {
        margin: 40px auto 32px;
    }
`
