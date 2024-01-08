import styled from "styled-components"


export const Container = styled.section`
    @keyframes fill {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    height: 90px;

    p.content__title {
        font-size: var(--font-size-small);
        line-height: var(--font-line-height-small);
        font-style: italic;
    }

    div.content__graph {
        height: 90px;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 6px;
        border-top: 3px solid;
        border-bottom: 3px solid;
        border-color: var(--color-grey-dark);
        box-sizing: border-box;
        position: relative;
        overflow: hidden;

        ::after,
        ::before {
            content: "";
            width: 300px;
            height: 300px;
            position: absolute;
            border-radius: 40%;
            background-color: var(--color-utility-success);
            transform: translateY(100%) rotate(0deg);
            animation: fill 7s ease-in-out infinite;
            top: calc(100% - 50%);
            top: ${({ timesAchieved, maxTimes }) =>
                `calc(100% - ${(timesAchieved * 100) / maxTimes}%)`};
            right: -25%;
        }

        ::after {
            animation: fill 7s ease-in-out infinite 0.25s;
            top: calc(100% - 50%);
            top: ${({ timesAchieved, maxTimes }) =>
                `calc(100% - ${(timesAchieved * 100) / maxTimes}%)`};
            left: -25%;
        }

        div.graph__green {
            background-color: var(--color-utility-success);
            height: ${({ timesAchieved, maxTimes }) =>
                `calc(${(timesAchieved * 100) / maxTimes}%)`};
            transition: 0.3s;
        }

        p.value {
            font-size: var(--font-size-h1);
            line-height: var(--font-line-height-h1);
            position: absolute;
            top: 15%;
            left: 50%;
            transform: translate(-50%);
            width: 136px;
            height: 84px;
            text-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
            font-weight: 700;
            z-index: 1;
        }
    }
`
