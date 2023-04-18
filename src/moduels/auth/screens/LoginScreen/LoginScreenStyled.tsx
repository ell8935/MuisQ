import styled from "styled-components";

const LoginScreenStyled = styled.div`
  display: flex;
  gap: 5px;

  .abstractBox {
    width: 40vw;
    height: auto;
    display: flex;
    max-width: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    img {
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .loginBox {
    width: 20vw;
    height: 80vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};

    .logo {
      display: flex;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .loginButton {
      height: 5rem;
    }

    .title {
      text-align: center;
      font-size: 1rem;
    }
  }

  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 3px;
    grid-row-gap: 3px;

    .top {
      grid-area: 1 / 1 / 2 / 5;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    .right {
      grid-area: 1 / 5 / 5 / 6;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    .bottom {
      grid-area: 5 / 2 / 6 / 6;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    .left {
      grid-area: 2 / 1 / 6 / 2;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
    }

    .abstractBox {
      display: none;
    }

    .loginBox {
      width: 50vw;
      height: 30vh;
      grid-area: 2 / 2 / 5 / 5;
    }
  }
`;

export default LoginScreenStyled;
