/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/controller/landingPage";
import SignIn from "./components/controller/signIn";
import SignUp from "./components/controller/signUp";

import NavBar from "./components/view/navBar";
import "./components/resource/stylesheet/app.css";

import CandidateController from "./components/controller/candidateController";
import AdminController from "./components/controller/adminController";
// import CardController from './components/controller/cardController';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="base">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/candidate">
            <CandidateController />
          </Route>
          <Route path="/admin">
            <AdminController />
          </Route>
        </Switch>
      </div>
    </>
  );
}
