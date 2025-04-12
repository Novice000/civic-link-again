import { useState } from "react";

const officials = [
  {
    name: "President",
    title: "Head of State and government",
    source: "Nigeria Constitution",
    level: "Federal Level",
    image: "../assets/tinubu.png",
  },
  {
    name: "Vice President",
    title: "Assists the President in governing the country",
    source: "Nigeria Constitution",
    level: "Federal Level",
    image: "../assets/shatima.png",
  },
  {
    name: "Ministers",
    title: "Appointed officials for specific departments",
    source: "Nigeria Constitution",
    level: "Federal Level",
    image: "../assets/minister.png",
  },
  {
    name: "Senators",
    title: "National Assembly Representatives from each state",
    source: "Nigeria Constitution",
    level: "Federal Level",
    image: "../assets/senator.png",
  },
  {
    name: "House of Reps",
    title: "Represents the people in the National Assembly",
    source: "Nigeria Constitution",
    level: "Federal Level",
    image: "../assets/reps.png",
  },
];

const OfficialsPage = () => {
  const [activeTab, setActiveTab] = useState("Federal");

  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Government Officials</h1>

        {/* Search */}
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
              activeTab === tab ? "border-b-2 border-green-900" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Officials List */}
      <div className="space-y-6">
        {officials.map((official, index) => (
          <div
            key={index}
            className="flex items-start md:items-center justify-between border-b pb-4"
          >
            {/* Left side */}
            <div className="flex gap-4">
              <img
                src={official.image}
                alt={official.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="space-y-1">
                <h3 className="text-base font-semibold">{official.name}</h3>
                <p className="text-sm text-gray-600">{official.title}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-2 h-2 bg-gray-300 rounded-full" />
                  <span>{official.source}</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                    {official.level}
                  </span>
                </div>
              </div>
            </div>

            {/* View Button */}
            <button className="bg-green-900 text-white px-6 py-2 rounded text-sm hover:bg-green-800">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialsPage;
