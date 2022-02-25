import { register } from "../../api";

export const Register = (props) => {
  const tryRegister = (e) => {
    const email = document.getElementsByName("email")[0].value;
    const firstName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementsByName("lastName")[0].value;
    const phone = document.getElementsByName("phone")[0].value;
    const password = document.getElementsByName("password")[0].value;
    register({ email, password, firstName, lastName, phone }).then(
      ({ data: { token } }) => {
        localStorage.setItem("token", token);
        props.isLogged();
      }
    );
  };
  return (
    <div className="form-container">
      <h2>Register</h2>
      <input type="email" placeholder="Email" name="email" />
      <input type="text" placeholder="First Name" name="firstName" />
      <input type="text" placeholder="Last Name" name="lastName" />
      <input type="text" placeholder="Phone" name="phone" />
      <input type="password" placeholder="Password" name="password" />
      <button onClick={tryRegister}>Register</button>
      <p>
        Go to <a onClick={props.toggleLogin}>Login</a>
      </p>
    </div>
  );
};
