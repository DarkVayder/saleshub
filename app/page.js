import React from 'react';
import SidebarLeft from "./components/SidebarLeft";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CRMTable from "./components/CRMTable";
import SidebarRight from "./components/SidebarRight";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <SidebarLeft />
        <div className="flex-1">
          <Navbar />
          <Dashboard />
          <CRMTable />
        </div>
        <SidebarRight />
      </div>
    </div>
  );
}
