import styled from 'styled-components';

interface ContainerProps {
  toggle: boolean;
  toggleSubmenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  header {
    background-color: ${({ theme }) => theme.colors.secondary};

    padding: 16px;

    display: flex;
    flex-direction: column;

    height: 160px;

    .sub-menu {
      display: flex;
      flex-direction: column;

      background: white;

      position: absolute;
      top: 160px;
      left: 0;

      width: 70%;
      height: calc(100% - 160px);

      transition: all 0.6s;

      transform: ${({ toggleSubmenu }) =>
        !toggleSubmenu ? `translateX(-100%)` : `translateX(0%)`};

      border-right: 1px solid ${({ theme }) => theme.colors.text_secondary};

      ul {
        width: 100%;
      }

      li {
        display: flex;

        width: 100%;

        border-bottom: 1px solid ${({ theme }) => theme.colors.text_secondary};

        span {
          display: flex;

          justify-content: space-between;
          align-items: center;
        }

        &:last-child {
          border: none;
        }

        a,
        .link {
          color: ${({ theme }) => theme.colors.text_alternative};
          font-size: 1.8rem;

          width: 100%;
          height: 100%;

          padding: 16px;

          font-weight: bold;
        }
      }

      button {
        background-color: rgba(143, 143, 143, 0.15);

        font-size: 1.8rem;

        width: 100%;

        padding: 16px;

        font-weight: bold;

        display: flex;
        gap: 10px;

        justify-content: flex-start;
      }
    }

    .row {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .input {
        margin-top: 20px;

        width: 100%;

        background: white;

        position: relative;

        border-radius: 5px;

        input {
          padding: 16px;
          padding-right: 63px;

          width: 100%;

          border-radius: 5px;
        }

        button {
          position: absolute;
          top: 2px;
          right: 16px;

          background: transparent;

          padding: 10px;

          font-size: 3rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .brand {
      color: white;

      font-size: 3rem;

      line-height: 2.8rem;

      text-align: center;
    }

    .overlay {
      width: 100%;
      height: calc(100% - 160px);

      transition: all 0.6s;

      display: ${({ toggle }) => (!toggle ? `none` : `flex`)};

      position: absolute;

      top: 160px;

      left: 0;

      background: rgba(0, 0, 0, 0.6);
    }

    nav {
      display: flex;

      background: white;

      position: absolute;
      top: 160px;
      left: 0;

      width: 70%;
      height: calc(100% - 160px);

      transition: all 0.6s;

      transform: ${({ toggle }) =>
        !toggle ? `translateX(-100%)` : `translateX(0)`};

      border-right: 1px solid ${({ theme }) => theme.colors.text_secondary};

      ul {
        width: 100%;
      }

      li {
        display: flex;

        width: 100%;

        border-bottom: 1px solid ${({ theme }) => theme.colors.text_secondary};

        span {
          display: flex;

          justify-content: space-between;
          align-items: center;
        }

        &:first-child a {
          display: flex;
          gap: 20px;

          background-color: rgba(143, 143, 143, 0.15);
        }

        &:last-child {
          border: none;
        }

        a,
        .link {
          color: ${({ theme }) => theme.colors.text_alternative};
          font-size: 1.8rem;

          width: 100%;
          height: 100%;

          padding: 16px;

          font-weight: bold;
        }
      }

      .login-button {
        a {
          display: flex;
          align-items: center;
        }
      }
    }

    button.menu {
      background-color: ${({ theme }) => theme.colors.primary};

      border: none;
      border-radius: 5px;

      padding: 10px 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 2.4rem;
      color: white;
    }
  }

  footer {
    display: flex;

    border-top: 1px solid ${({ theme }) => theme.colors.text_secondary};

    font-size: 1.4rem;

    .social {
      display: flex;
      flex-direction: column;

      margin-top: 10px;

      ul {
        display: flex;
        gap: 7px;
      }

      a {
        color: ${({ theme }) => theme.colors.text_alternative};
        font-size: 3rem;
      }
    }

    .wrapper {
      width: 100%;
      max-width: 1200px;

      margin: 0 auto;

      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;
