import { LoginForm } from "../../components/LoginForm";
import "./styles.css";

const LoginPage = () => {
  return (
    <div>
      <h2 className="login">Login</h2>
      <LoginForm tokenSetter={PaymentResponse.tokenSetter} />
    </div>
  );
};

export { LoginPage };
