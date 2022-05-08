import React from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function Entry() {
  const [signIn, setSignIn] = React.useState("inactive");

  return (
    <>
      <div>
        <button
          onClick={() => {
            setSignIn("active");
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            setSignIn("inactive");
          }}
        >
          Sign Up
        </button>
      </div>
      <div>{signIn === "active" ? <SignIn /> : <SignUp />}</div>
    </>
  );
}
