import React from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

export default function Entry() {
  const [signIn, setSignIn] = React.useState("inactive");

  return (
    <>
      <div
        style={{
          width: "98vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
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
      </div>
    </>
  );
}
