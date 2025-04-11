import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./topbar";
 
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar for large screens */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex flex-col flex-1">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 bg-white">
          <Outlet />{" "}
          {/* This renders /dashboard/home, /dashboard/settings etc. */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
