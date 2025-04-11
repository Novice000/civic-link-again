import { Outlet } from "react-router-dom";
import SidePanel from "../shared/side-panel";
import TopBar from "./topbar";

function DashboardLayout() {
  return (
    <div className="flex">
      <SidePanel />
      <div className="w-4/5">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
