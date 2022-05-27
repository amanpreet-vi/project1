/** @format */

import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../controller/authentication";
import "../resource/stylesheet/navbar.css";

export default function NavBar({ setRender }) {
  let history = useHistory();
  return (
    <div className="nav">
      <div className="navContainer">
        <a className="title" href="/">
          <div>
            Vote<span>chain</span>
          </div>
        </a>
        <div className="hamBurger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="links">
          <a href="/about">
            <div>about</div>
          </a>
          <a href="/contact">
            <div>contact us</div>
          </a>

          {!isAuthenticated() && (
            <Fragment>
              <div>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </div>
              <div>
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              </div>
            </Fragment>
          )}
          {isAuthenticated() && (
            <div>
              <span
                onClick={() => {
                  signout(() => {
                    setRender(false);
                    history.push("/");
                  });
                }}
              >
                Sign Out
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
