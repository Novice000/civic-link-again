import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="px-16 py-10">
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Learn More
      </motion.h1>
      <p className="text-center max-w-xl mx-auto mb-6">
        Explore the hierarchical structure and officials responsible for various
        services.
      </p>
      <div className="text-center mb-10">
        <Link to="/authpage">
          <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer">
            Sign-in
          </button>
        </Link>
      </div>
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search for official"
          className="border rounded px-4 py-2 w-full max-w-md mx-auto block"
        />
      </div>
      <div className="bg-gray-100 h-64 flex items-center justify-center mb-10">
        <p>
          🗺️ Navigate through the levels of government to find the relevant
          officials
        </p>
      </div>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Federal Officials</h2>
        <ul className="space-y-4">
          {[
            "President",
            "Vice President",
            "Ministers",
            "Senators",
            "House of Reps",
          ].map((role) => (
            <li key={role} className="border p-4 rounded shadow">
              <strong>{role}</strong>
              <br />
              <span className="text-sm text-gray-700">Federal Level</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">State Officials</h2>
        <ul className="space-y-4">
          {[
            "Governor",
            "Deputy Governor",
            "Commissioners",
            "State Assembly Members",
          ].map((role) => (
            <li key={role} className="border p-4 rounded shadow">
              <strong>{role}</strong>
              <br />
              <span className="text-sm text-gray-700">State Level</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Local Officials</h2>
        <ul className="space-y-4">
          {["Councilors", "LGA Chairman"].map((role) => (
            <li key={role} className="border p-4 rounded shadow">
              <strong>{role}</strong>
              <br />
              <span className="text-sm text-gray-700">Local Level</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LearnMore;
