import React from "react";
import images from "../assets/dashboard";
import { Link } from "react-router-dom";
import Announcements from "../components/dashboard/AnnouncementCard";
import "../styles/Dashboard.css";

const Dashboard: React.FC = () => {
  // dummy data for announcements
  const announcements = [
    { image: images.flag, title: "New Announcements", number: 0 },
    { image: images.resolved_report, title: "Resolved Reports", number: 0 },
    { image: images.submitted_reports, title: "Reports Submitted", number: 0 },
  ];
  return (
    <>
      {/* Heading section */}
      <div className="flex items-center justify-between px-5 my-24">
        <div className="hidden md:flex md:justify-between md:items-center md:w-full ">
          <div className="hidden md:block">
            <h1 className="text-[#484848] font-bold text-3xl">Dashboard</h1>
          </div>
          <div className="flex items-center justify-evenly gap-2">
            <Link to="">
              <img
                src={images.notification}
                className="w-9"
                alt="notification"
              />
            </Link>
            <Link to="">
              {" "}
              <img src={images.message} className="w-9" alt="message" />
            </Link>
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <img
                src={images.avatar}
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
            </div>
            <Link to="">
              <img src={images.arrow_down} className="w-9" alt="arrow down" />
            </Link>
          </div>
        </div>
      </div>
      {/* Inbox section */}
      <div className="flex flex-col justify-center items-center mb-32">
        <p className="open-sans text-3xl text-[#484848] font-bold">
          No New Inbox
        </p>
        <button className="bg-[#D9D9D980] text-[#000000] p-2 rounded border border-[#0000001A] mt-6">
          View details
        </button>
      </div>
      {/* Announcements */}
      {announcements.map((announcement, index) => (
        <Announcements
          key={index}
          image={announcement.image}
          title={announcement.title}
          number={announcement.number}
        />
      ))}

      {/* Footer section */}
    </>
  );
};

export default Dashboard;
