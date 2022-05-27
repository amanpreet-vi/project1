import React from "react";
import { Switch } from "react-router-dom";
import AdminPanelView from "../view/adminPanelView";

export default function AdminController() {
  return (
    <>
      <div className="adminContainer">
        <Switch />
        <AdminPanelView />
      </div>
    </>
  );
}
