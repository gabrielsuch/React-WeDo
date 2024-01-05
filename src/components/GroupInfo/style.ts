import styled from "styled-components";
import imageInfo from "../../assets/ImageInfo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;

  button {
    width: 100%;
  }

  @media (min-width: 970px) {
    background-image: url(${imageInfo});
    background-repeat: no-repeat;
    background-position: right;
  }

  .description {
    color: var(--color-black);
    font-style: normal;
    font-weight: bold;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    margin-bottom: 4px;
  }

  .description-group {
    background-color: var(--color-white-light);
    min-height: 156px;
    max-width: 420px;
    width: 100%;
    border-radius: 8px;
    text-align: center;
    display: grid;
    place-items: center;
    margin-bottom: 16px;
    padding: 8px;
    overflow-y: scroll;
    flex-direction: column;
  }

  .p-description-group {
    color: var(--color-black);
    font-style: italic;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    font-weight: 400;
    word-break: break-word;
  }

  .creator {
    text-align: center;
    color: var(--color-black);
    font-style: italic;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    font-weight: 400;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .forOne {
      font-size: var(--font-size-h3);
      line-height: var(--font-line-height-h3);
    }

    @media (min-width: 660px) {
      text-align: center;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      button {
        width: 146px;
      }

      .forOne {
        width: 200px;
        text-align: right;
      }
    }
  }

  .creator-span {
    color: var(--color-secondary-dark);
    font-style: italic;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    font-weight: 400;
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: var(--font-size-h3);
    line-height: var(--font-line-height-h3);
    margin-left: 16px;
  }

  .users-group,
  .activitis-groups,
  .goals-group {
    background-color: var(--color-white-light);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 8px;
    font-size: var(--font-size-p);
    line-height: var(--font-line-height-p);
    font-style: italic;
  }
`;
