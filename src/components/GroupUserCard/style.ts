import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    color: inherit;
    text-decoration: none;
    padding: 0;

    width: 280px;
    height: 95px;
    background: var(--color-primary-dark);
    border-radius: 8px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px;
    transition: 0.3s;

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        span {
          color: var(--color-primary-light);
          margin-right: 12px;
        }

        word-break: break-word;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: var(--font-size-h3);
        line-height: var(--font-line-height-h3);
      }
    }

    .card:hover {
      background: var(--color-primary);

      .username,
      .useremail {
        color: var(--color-primary-dark);
      }
    }

    .name,
    .email {
      display: flex;
      align-items: center;
      font-style: italic;
      font-weight: normal;
    }

    .email {
      p {
        font-size: var(--font-size-p);
        line-height: var(--font-line-height-p);
      }
    }

    .username,
    .useremail {
      color: var(--color-primary);
      margin-right: 12px;
    }
    .username {
      width: 22px;
    }

    svg {
      width: 24px;
      height: 24px;
    }

    :hover {
      box-shadow: var(--box-shadow-y);
      background-color: var(--color-primary-light);

      .name,
      .email {
        span,
        svg {
          color: var(--color-primary-dark);
        }
      }
    }
  }
`;
