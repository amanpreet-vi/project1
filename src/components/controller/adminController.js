import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AdminPanelView from "../view/adminPanelView";
import CandidateInfo from "../view/candidateInfo";

export default function AdminController() {
  return (
    <>
      <div className="adminContainer">
        <Switch />
        <Route path="/admin/candidateInfo">
          <CandidateInfo />
        </Route>
        <Switch />
        <AdminPanelView />
      </div>
    </>
  );
}
