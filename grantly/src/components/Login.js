import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const login = event => {
    console.log("login event", event);
    event.preventDefault();
    props.login(credentials).then(() => {
      props.history.push("/");
    });
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <div>Welcome to Grantly!!</div>
      <div className="create-account-header">CREATE ACCOUNT</div>
      <button
        onClick={() => {
          props.history.push("/create");
        }}
      >
        Create Account
      </btn>
      <form onSubmit={login}>
        <label htmlFor="username">
          {" "}
          username
          <input
            type="text"
            name="username"
            placeholder="username"
            value={credentials.username}
            onChange={handleChanges}
          />{" "}
        </label>
        <label htmlFor="password">
          {" "}
          password
          <input
            type="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={handleChanges}
          />{" "}
        </label>
        <BtnLogin>Login</BtnLogin>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  // error: state.user.error,
  // fetching: state.user.fetching
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
