import styled, {css} from "styled-components"

import NoGoals from "../../assets/no-goals.png"


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-height: 360px;
    max-width: 324px;
    align-self: center;

    p {
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
        font-style: italic;
        margin-bottom: 24px;
    }

    ${({habits}) =>
        habits &&
        css`
            margin-top: 104px;
        `
    }

    ${({goals}) =>
        goals &&
        css`
            p {
                margin: 16px auto 0;
                height: 360px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                background-image: url(${NoGoals});
            }
        `
    }

    ${({activity}) =>
        activity &&
        css`
            p {
                margin-bottom: 8px;
                height: 360px;
            }
        `
    }

    ${({user}) =>
        user &&
        css`
            p {
                margin-bottom: 46px;
            }
        `
    }
`
