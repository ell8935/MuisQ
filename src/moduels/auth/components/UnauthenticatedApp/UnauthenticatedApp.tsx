import { useAuth } from "../../../../shared/hooks/useAuth";
import UnauthenticatedAppStyled from "./UnauthenticatedAppStyled";

function UnauthenticatedApp() {
  const { login } = useAuth();

  return (
    <UnauthenticatedAppStyled>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login} className="login">
          Login with Google
        </button>
      </div>
    </UnauthenticatedAppStyled>
  );
}

export { UnauthenticatedApp };
