import React, { useState } from "react";
import { connect } from "react-redux";
import { createAccount } from "../actions";

const CreateAccount = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    fullname: "",
    email: ""
  });

  const handleChanges = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const createAccount = event => {
    console.log("create account event", event);
    event.preventDefault();
    props.createAccount(credentials);
    setCredentials({
      username: "",
      password: "",
      fullname: ""
    });
  };

  return (
    <div className="create-account">
      <h1>Get Grantly</h1>
      <form onSubmit={createAccount}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="fullname"
          placeholder="fullname"
          value={credentials.fullname}
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={credentials.email}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Create Account</button>
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
  { createAccount }
)(CreateAccount);