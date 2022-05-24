/** @format */

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignInView from "../view/signInView";
import { authenticate, isAuthenticated, signin } from "./authentication";

export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const redirectTo = () => {
    const user = isAuthenticated().user;
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => console.log("Error in Signin"));
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading....</h2>
        </div>
      )
    );
  };

  const { email, password, error, loading, didRedirect } = values;

  return (
    <>
      <SignInView
        handlechange={handleChange}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
      />
      {redirectTo()}
    </>
  );
}
