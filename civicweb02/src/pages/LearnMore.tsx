import { federal, state, local } from "@/components/learn-more/data";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import GovernmentOfficialCard from "@/components/learn-more/government-official-card";

const armColors: { [key: string]: string } = {
  executive: "text-blue-500", // Slightly lighter blue
  legislative: "text-green-500", // Slightly lighter green
  judicial: "text-purple-500", // Slightly lighter purple
};

const LearnMore = () => {
  return (
    <div className="py-16 px-8 md:px-16 lg:px-24">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Your Government
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore the hierarchical structure and connect with officials
          responsible for delivering essential services.
        </p>
        <Link
          to="/signin"
          className="inline-flex items-center justify-center px-6 py-3 bg-home text-white rounded-md shadow-md hover:bg-home-dark transition-colors duration-300"
        >
          Sign In to Access More
        </Link>
      </section>

      {/* Search and Map Section */}
      <section className="relative border border-gray-200 rounded-lg overflow-hidden mb-12">
        <div className="p-4 md:p-6 lg:p-8 flex items-center">
          <Input
            type="text"
            placeholder="Search for official..."
            className="w-full md:w-1/3 h-12 pr-10 focus:ring-green-300 rounded-md border-gray-300"
          />
          <SearchIcon className="absolute top-5 md:top-6 lg:top-7 right-4 md:right-6 lg:right-8 text-gray-500" />
        </div>
        <img src="map-loc.png" alt="Location Map" className="w-full" />
      </section>

      {/* Officials Sections */}
      <section className="space-y-12">
        {/* Federal Section */}
        <section className="bg-home p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Federal Officials
          </h2>
          {Object.entries(federal).map(([arm, positions]) => (
            <div key={arm} className="mb-8">
              <h3
                className={`text-xl font-semibold text-center mb-4 ${
                  armColors[arm.toLowerCase()] || "text-black"
                } text-white`}
              >
                {arm.charAt(0).toUpperCase() + arm.slice(1)} Arm
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position: any) => (
                  <GovernmentOfficialCard
                    key={position.title}
                    title={position.title}
                    description={position.description}
                    duties={position.duties}
                    arm={arm}
                    level="federal"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* State Section */}
        <section className="p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-6">
            State Officials
          </h2>
          {Object.entries(state).map(([arm, positions]) => (
            <div key={arm} className="mb-8">
              <h3
                className={`text-xl font-semibold text-center mb-4 ${
                  armColors[arm.toLowerCase()] || "text-black"
                }`}
              >
                {arm.charAt(0).toUpperCase() + arm.slice(1)} Arm
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position: any) => (
                  <GovernmentOfficialCard
                    key={position.title}
                    title={position.title}
                    description={position.description}
                    duties={position.duties}
                    arm={arm}
                    level="state"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Local Section */}
        <section className="bg-home p-6 md:p-8 lg:p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">
            Local Officials
          </h2>
          {Object.entries(local).map(([arm, positions]) => (
            <div key={arm} className="mb-8">
              <h3
                className={`text-xl font-semibold text-center mb-4 ${
                  armColors[arm.toLowerCase()] || "text-black"
                } text-white`}
              >
                {arm.charAt(0).toUpperCase() + arm.slice(1)} Arm
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position: any) => (
                  <GovernmentOfficialCard
                    key={position.title}
                    title={position.title}
                    description={position.description}
                    duties={position.duties}
                    arm={arm}
                    level="local"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default LearnMore;
