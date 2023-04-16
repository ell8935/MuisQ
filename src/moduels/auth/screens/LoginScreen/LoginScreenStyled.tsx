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
    align-items: center;
    flex-direction: column;

    .abstractBox {
      display: none;
    }
    .loginBox {
      width: 50vw;
      height: 30vh;
    }
  }
`;

export default LoginScreenStyled;
