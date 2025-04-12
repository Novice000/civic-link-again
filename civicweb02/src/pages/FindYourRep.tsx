import { useState } from 'react'
// import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaSearch,
  FaBuilding,
  FaBriefcase,
  FaUsers,
} from 'react-icons/fa'

const FindYourRep = () => {
  const [state, setState] = useState('')
  const [lg, setLG] = useState('')
  const [year, setYear] = useState('')

  const tabs = ['Find', 'Projects', 'Policy', 'Budget', 'Your Representative']
  const activeTab = 'Find'

  const quickLinks = [
    { icon: <FaBuilding />, label: 'Government Officials' },
    { icon: <FaUsers />, label: 'Categories of Services' },
    { icon: <FaBriefcase />, label: 'Jobs and Unemployment' },
    { icon: <FaUsers />, label: 'Civil Society and Media' },
    { icon: <FaBalanceScale />, label: 'Track a complaint' },
  ]

  return (
    <>   
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Main content */}
      <main className="flex-1 bg-white">
        <div className="relative w-full h-[300px]">
          <img
            src="flaggy.png"
            alt="Nigeria Flag"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/70 px-4 py-2 rounded">
            <span className="font-semibold text-sm">CivicLink</span>
            <span>&gt;</span>
            <span className="text-sm">Find</span>
          </div>
        </div>
        {/* Tabs */}
        <div className="px-4 mt-6 flex space-x-10 justify-center items-center text-sm lg:text-base">
          {tabs.map((tab) => (
            <span
              key={tab}
              className={`font-semibold ${
                tab === activeTab ? 'text-black' : 'text-gray-500'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-4 px-4">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col lg:flex-row gap-4 items-center">
            <select
              className="border p-2 rounded w-full lg:w-1/4"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">State</option>
              <option value="Lagos">Lagos</option>
              <option value="Kano">Kano</option>
            </select>
            <select
              className="border p-2 rounded w-full lg:w-1/4"
              value={lg}
              onChange={(e) => setLG(e.target.value)}
            >
              <option value="">LG</option>
              <option value="Ikeja">Ikeja</option>
              <option value="Badagry">Badagry</option>
            </select>
            <select
              className="border p-2 rounded w-full lg:w-1/4"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <button className="bg-gray-800 text-white p-2 px-4 rounded">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-green-900 text-white px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {quickLinks.map((link) => (
              <div key={link.label} className="flex flex-col items-center space-y-2">
                <div className="text-2xl">{link.icon}</div>
                <span className="text-sm">{link.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    </>   
  )
}

export default FindYourRep
