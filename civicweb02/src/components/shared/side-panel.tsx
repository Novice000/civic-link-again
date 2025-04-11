import {
  FolderIcon,
  LayoutDashboardIcon,
  NotebookPen,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import { FaQuestion } from "react-icons/fa";

const items = [
  {
    icon: <UserIcon />,
    label: "Account",
  },
  {
    icon: <LayoutDashboardIcon />,
    label: "Dashboard",
  },
  {
    icon: <NotebookPen />,
    label: "Officials",
  },
  {
    icon: <PlusIcon />,
    label: "New Report",
  },
  {
    icon: <SearchIcon />,
    label: "Find",
  },
  {
    icon: <FolderIcon />,
    label: "Volunteer",
  },
  {
    icon: <FaQuestion />,
    label: "Help Center",
  },
];

function SidePanel() {
  return (
    <div className="bg-home h-screen px-5 py-10 text-white">
      <p className="text-4xl mb-5">
        <span className="text-green-300">Civic</span>Link
      </p>
      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        {items.map((item) => (
          <div>
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidePanel;
