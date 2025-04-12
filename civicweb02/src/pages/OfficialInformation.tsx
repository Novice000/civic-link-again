import Topbar from "../components/dashboard/topbar";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const OfficialInformationPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Topbar */}
      <Topbar setIsSidebarOpen={(isOpen: boolean) => console.log("Sidebar open:", isOpen)} />

      {/* Breadcrumb */}
      <div className="hidden md:flex gap-2 text-gray-500 text-sm px-6 pt-6">
        <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-300">
          Civic
        </p>
        <p className="font-semibold text-black">Link</p>
        <p>&gt;</p>
        <p>Officials</p>
        <p>&gt;</p>
        <p className="font-semibold text-gray-800">Official Information</p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row p-6 md:p-10 gap-10">
        {/* Left Panel */}
        <div className="bg-[#003D1F] text-white rounded-lg py-6 px-4 w-full md:max-w-[250px] flex flex-col items-center gap-4">
          <img
            src="/assets/official.png"
            alt="Official"
            className="w-32 h-40 object-cover rounded-md"
          />
          <p className="font-semibold text-center">Dr. Adekunle Olayinka</p>
          <p className="text-sm bg-gray-500 px-2 py-1 rounded-md text-center">
            Commissioner for Works, Lagos
          </p>

          <div className="text-left w-full mt-6 space-y-4 text-sm">
            <div>
              <p className="font-semibold">Level</p>
              <p>State</p>
            </div>
            <div>
              <p className="font-semibold">Jurisdiction</p>
              <p>Lagos State, Surulere LGA</p>
            </div>
            <div>
              <p className="font-semibold">Status</p>
              <p>Verified</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            Official Information
          </h2>
          <p className="text-sm text-gray-400 mt-1">Last Updated in 2021</p>

          <div className="mt-6 space-y-6 text-sm text-gray-700">
            {/* Email */}
            <div className="flex items-start gap-4 border-b pb-3">
              <div className="text-xl text-gray-400 mt-1">
                <MdEmail />
              </div>
              <div>
                <p className="font-medium text-gray-500">Email</p>
                <p className="text-green-900">aolayinka@lagosstate.gov.ng</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 border-b pb-3">
              <div className="text-xl text-gray-400 mt-1">
                <MdPhone />
              </div>
              <div>
                <p className="font-medium text-gray-500">Phone</p>
                <p className="text-green-900">01-4979030</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-4 border-b pb-3">
              <div className="text-xl text-gray-400 mt-1">
                <MdLocationOn />
              </div>
              <div>
                <p className="font-medium text-gray-500">Office Address</p>
                <p>Lagos State Secretariat in Alausa, Ikeja, Lagos.</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-4 border-b pb-3">
              <div className="text-xl text-gray-400 mt-1">
                <FaLinkedin />
              </div>
              <div>
                <p className="font-medium text-gray-500">Social Media</p>
                <p className="text-green-900">Dr. Adekunle Olayinka, FNSE</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="flex items-start gap-4">
              <div className="text-xl text-gray-400 mt-1">📋</div>
              <div>
                <p className="font-medium text-gray-500">Responsibilities</p>
                <p className="mt-1">
                  Responsible for overseeing Lagos State’s infrastructure
                  projects, advising the Governor on public works policy,
                  monitoring project execution for quality and timeliness,
                  engaging with communities and stakeholders, and promoting
                  sustainable, innovative solutions for urban development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialInformationPage;
