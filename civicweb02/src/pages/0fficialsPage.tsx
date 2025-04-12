import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define the type for an official
interface Official {
  _id: string;
  name: string;
  title: string;
  image?: string;
  contact_info?: {
    email?: string;
  };
  level?: {
    level: string;
  };
}

const OfficialsPage = () => {
  const [activeTab, setActiveTab] = useState("Federal");
  const [officials, setOfficials] = useState<Official[]>([]);
  const [loading, setLoading] = useState(false);
  const [levels, setLevels] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  // Fetch levels once on mount
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const res = await axios.get("/api/levels");
        const levelMap: Record<string, string> = {};
        res.data.levels.forEach((lvl: { level: string; _id: string }) => {
          levelMap[lvl.level.toLowerCase()] = lvl._id;
        });
        setLevels(levelMap);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLevels();
  }, []);

  // Fetch officials whenever activeTab or levels changes
  useEffect(() => {
    const fetchOfficials = async () => {
      if (!levels[activeTab.toLowerCase()]) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/officials/levels/${
            levels[activeTab.toLowerCase()]
          }?page=1&limit=40`
        );
        setOfficials(res.data.officials);
      } catch (error) {
        console.error("Error fetching officials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
  }, [activeTab, levels]);

  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Government Officials
        </h1>
        <div className="flex items-center border rounded overflow-hidden w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Commissioner of works"
            className="flex-grow px-4 py-2 outline-none"
          />
          <button className="bg-gray-800 text-white px-4 py-2">
            <span className="text-white text-sm">🔍</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-green-900 font-semibold text-lg mb-6 border-b">
        {["Federal", "State", "Local"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-green-900"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Officials List */}
      {loading ? (
        <p>Loading officials...</p>
      ) : officials.length === 0 ? (
        <p>Coming Soon...</p>
      ) : (
        <div className="space-y-6">
          {officials.map((official) => (
            <div
              key={official._id}
              className="flex items-start md:items-center justify-between border-b pb-4"
            >
              <div className="flex gap-4">
                <img
                  src={official.image || "https://avatar.iran.liara.run/public"}
                  alt={official.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="space-y-1">
                  <h3 className="text-base font-semibold">{official.name}</h3>
                  <p className="text-sm text-gray-600">{official.title}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 bg-gray-300 rounded-full" />
                    <span>{official.contact_info?.email}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                      {official.level?.level}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate(`/officials/${official._id}`)}
                className="bg-green-900 text-white px-6 py-2 rounded text-sm hover:bg-green-800 cursor-pointer"
              >
                View
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfficialsPage;
