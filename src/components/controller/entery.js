import React from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import "../resource/stylesheet/entry.css";

export default function Entry() {
  const [signIn, setSignIn] = React.useState("active");

  function change() {
    var sign_in = document.getElementById("signIn");
    var sign_up = document.getElementById("signUp");
    if (signIn === "active") {
      sign_in.style.backgroundColor("red");
    } else {
      sign_up.style.backgroundColor("red");
    }
  }

  return (
    <>
      <div
        style={{
          width: "98vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="buttonContainer ">
          <div>
            <button
              id={`${signIn}`}
              onClick={() => {
                setSignIn("active");
                change();
              }}
            >
              Sign In
            </button>
            <button
              id={`${signIn === "active" ? "inactive" : "active"}`}
              onClick={() => {
                setSignIn("inactive");
                change();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div style={{ padding: "20vh 0vw" }}>
          <div>{signIn === "active" ? <SignIn /> : <SignUp />}</div>
        </div>
      </div>
    </>
  );
}
