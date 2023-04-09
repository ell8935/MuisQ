import styled from "styled-components";

const LoginScreenStyled = styled.div`
  display: flex;
  gap: 5px;

  .abstractBox {
    width: 40vw;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    display: flex;
    max-width: 100%;
    height: auto;
    text-align: center;

    img {
      max-width: 100%;
      max-height: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .loginBox {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    width: 30vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;

    .logo {
      display: flex;
      align-items: center;
      margin-left: 1.5rem;
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
    }
  }
`;

export default LoginScreenStyled;
