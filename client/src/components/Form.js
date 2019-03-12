import React from "react";

const Form = (props) => (
  <form className="login">
    <h3>Register</h3>
    <input
      name="reguser"
      placeholder="Username"
      className="inputField"
      onChange={props.onChangeHandler}
    />
    <input
      name="regpw"
      type="password"
      placeholder="Password"
      className="inputField"
      onChange={props.onChangeHandler}
    />
    <button className="loginButton" onClick={props.regHandler}>
      {" "}
      Register{" "}
    </button>

    <h3>Login</h3>
    <input
      name="username"
      placeholder="Username"
      className="inputField"
      onChange={props.onChangeHandler}
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      className="inputField"
      onChange={props.onChangeHandler}
    />
    <button className="loginButton" onClick={props.loginHandler}>
      {" "}
      Login{" "}
    </button>
  </form>
);

export default Form;
