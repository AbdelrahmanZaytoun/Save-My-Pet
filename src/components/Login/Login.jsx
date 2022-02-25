import { login } from "../../api";

export const Login = (props) => {
  const tryLogin = (e) => {
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;
    login({ email, password }).then(({ data: { token } }) => {
      localStorage.setItem("token", token);
      props.isLogged();
    });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button onClick={tryLogin}>Login</button>
      <p>
        Go to <a onClick={props.toggleLogin}>Register</a>
      </p>
    </div>
  );
};
