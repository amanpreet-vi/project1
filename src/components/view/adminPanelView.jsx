import React from "react";
import "../resource/stylesheet/admin.css";
import AdminSection from "./adminSection";
import AdminSideBar from "./adminSidebar";

export default function AdminPanelView() {
  return (
    <>
      <div className="headingAdmin">
        <div>Admin Dashboard</div>
      </div>
      <div className="adminInner">
        <AdminSideBar />
        <AdminSection />
      </div>
    </>
  );
}
