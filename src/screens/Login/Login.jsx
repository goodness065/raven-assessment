import logo from "../../assets/icons/logo.png";
import LoginForm from "../../components/login-form/LoginForm";

const Login = () => {
  return (
    <main>
      <nav className="navbar-container">
        <div>
          <img src={logo} alt="logo" className="navbar-container__logo" />
        </div>
      </nav>
      <div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
