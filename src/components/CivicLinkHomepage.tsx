import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function CivicLinkHomepage(): JSX.Element {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* Navbar */}
      <header className="bg-green-900 text-white px-12 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">CivicLink</div>
        <nav className="space-x-8 text-sm font-medium">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Sectors</a>
          <a href="#" className="hover:underline">Officials</a>
          <span className="ml-6 px-3 py-1 bg-white text-green-900 rounded flex items-center">
            <FaSearch className="mr-2" /> Search in site
          </span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-12 py-20">
        <motion.h1
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connecting Citizens to Government Responsibly
        </motion.h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Welcome to CivicLink! Find your representative or engage with government officials.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Learn More
          </button>
          <button className="border border-green-900 text-green-900 px-6 py-2 rounded hover:bg-green-50 transition">
            Connect with your CivicLink
          </button>
        </div>
      </section>

      {/* Government Structure Section */}
      <section className="px-12 py-16">
        <h2 className="text-2xl font-bold mb-8">Explore Government Structure</h2>
        <div className="grid gap-4">
          {[
            "Submit a Complaint",
            "Track Complaints",
            "For Government Officials",
            "For Civil Society & Media",
            "Categories of Services",
          ].map((text, index) => (
            <motion.div
              key={index}
              className="bg-white border px-6 py-4 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Government Strip */}
      <section className="bg-green-900 text-white px-12 py-6 flex items-center space-x-6">
        <div className="w-10 h-10 bg-white rounded-full" />
        <div>
          <p className="text-sm font-bold">Government of Nigeria</p>
          <p className="text-xs">Empowering citizens through CivicLink</p>
        </div>
      </section>

      {/* Image Highlight */}
      <section className="px-12 py-12">
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/civiclink-lips.jpg"
            alt="Green lips with Nigeria flag"
            className="w-full object-cover"
          />
          <div className="text-center py-4 font-medium">
            Stay informed and engaged with CivicLink
          </div>
        </motion.div>
      </section>

      {/* Latest Updates */}
      <section className="px-12 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Latest Updates</h2>
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            className="border rounded-xl p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/img/nigeria-update1.jpg" alt="Update 1" className="mb-4 rounded" />
            <p className="font-medium text-sm">Exciting news from the government!</p>
            <p className="text-xs">Announcement</p>
            <p className="font-bold text-sm mt-1">GovOfficial1</p>
          </motion.div>

          <motion.div
            className="border rounded-xl p-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="/img/nigeria-event.jpg" alt="Update 2" className="mb-4 rounded" />
            <p className="font-medium text-sm">Join us for a community event.</p>
            <p className="text-xs">Event</p>
            <p className="font-bold text-sm mt-1">CivilSocietyOrg</p>
          </motion.div>
        </div>
      </section>

      {/* Language Selector */}
      <footer className="bg-gray-100 px-12 py-12 text-center">
        <h3 className="text-xl font-semibold mb-6">Language Selector for your best translation</h3>
        <div className="flex justify-center space-x-10 mb-6">
          {['English', 'Yoruba', 'Igbo', 'Hausa', 'other'].map(lang => (
            <span key={lang} className="text-sm hover:underline cursor-pointer">{lang}</span>
          ))}
        </div>
        <p className="text-xs text-gray-600">© 2025 CivicLink. All rights reserved.</p>
        <div className="text-xs mt-2 text-gray-600 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
