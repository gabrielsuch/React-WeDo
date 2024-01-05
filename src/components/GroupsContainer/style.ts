import styled from "styled-components";
import GroupsBehindPicture from "../../assets/groups-behind-picture.png";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100%;
  background-color: var(--color-white-light);
  background-image: url(${GroupsBehindPicture});
  background-repeat: no-repeat;
  background-position: center;
  height: 650px;
  border-radius: 8px;
  padding: 8px;
  transition: 0.3s;
  margin-top: 8px;

  section.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 16px;
        text-shadow: 2px 2px 10px var(--color-white-light);
      }
    }

    main {
      height: 500px;

      margin: 16px 0;
      display: flex;
      align-items: center;
      justify-content: center;

      p.empty__container {
        max-width: 400px;
        margin: 4px;
        padding: 16px;
        border-radius: 8px;
        background-color: var(--color-white-light);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        text-align: center;
        font-size: var(--font-size-h2);
        line-height: var(--font-line-height-h2);
        color: var(--color-black-light);
        font-style: italic;
      }
    }

    footer {
      display: flex;

      button {
        width: 100%;
        align-self: stretch;
      }
    }
  }

  @media screen and (min-width: 800px) {
    max-width: 856px;
    padding: 16px;
    margin-top: 0;

    section.content {
      header {
        justify-content: space-between;

        h2 {
          margin-bottom: 0;
        }
      }

      footer {
        justify-content: flex-end;
        button {
          width: 216px;
          align-self: stretch;
        }
      }
    }
  }

  @media (max-width: 920px) {
    header {
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 16px;
      }
    }
  }
`;
