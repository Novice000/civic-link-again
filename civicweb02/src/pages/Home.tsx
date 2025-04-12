import { Link } from "react-router-dom";
import LatestUpdates from "../components/latestUpdates";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-[Open Sans]">
      <section className="pb-20">
        <div className="flex flex-col items-center gap-4 ">
          <h1 className="text-center font-bold pt-20 leading-[100%] text-[2.5rem]">
            Connecting Citizens to <br /> Government Responsibly
          </h1>
          <p className="py-4 text-center font-[400] leading-[150%] text-normal ">
            Welcome to CivicLink! Find your representative or engage <br /> with
            government officials.
          </p>
          {/* Button to got o sign up page */}
          <Link to="/authpage">
            <button className="bg-white text-[#003D25] border border-[#003D25] px-6 py-2 rounded hover:bg-[#003D25] hover:text-white transition cursor-pointer">
              Sign Up
            </button>
          </Link>

          <button
            className="py-[12px] px-[20px] h-[50px] w-[328px] bg-home rounded-[8px] text-white"
            onClick={() => {
              navigate("/learn-more");
            }}
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="pb-30 flex items-center justify-center">
        <div className="flex w-full flex-col md:flex-row px-4 md:px-0 md:w-[80%] mx-auto gap-x-3 justify-between items-center">
          <div className="font-bold text-[2.5rem] text-center">
            Explore Government Structure
          </div>
          <div className="md:w-2/4 w-full mb-10 md:mb-0">
            <ul className="flex flex-col gap-[20px]">
              <li className="flex items-center border-b-1 border-b-gray-300 py-4">
                <p className="flex py-3 px-4 bg-gray-100 rounded-full items-center justify-center">
                  👤
                </p>
                <p className="ml-4">Submit a Complaint</p>
              </li>
              <li className="flex items-center border-b-1 border-b-gray-300 py-4">
                <p className="flex py-3 px-4 bg-gray-200 rounded-full items-center justify-center">
                  🔍
                </p>
                <p className="ml-4">For Government Officials</p>
              </li>
              <li className="flex items-center border-b-1 border-b-gray-300 py-4">
                <p className="flex py-3 px-4 bg-gray-200 rounded-full items-center justify-center">
                  🏛️
                </p>
                <p className="ml-4">For Civil Society & Media</p>
              </li>
              <li className="flex items-center border-b-1 border-b-gray-300 py-4">
                <p className="flex py-3 px-4 bg-gray-200 rounded-full items-center justify-center">
                  📰
                </p>
                <p className="ml-4">Submit a Complaint</p>
              </li>
              <li className="flex items-center border-b-1 border-b-gray-300 py-4">
                <p className="flex py-3 px-4 bg-gray-200 rounded-full items-center justify-center">
                  ⛎
                </p>
                <p className="ml-4">Categories of Services</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="h-[220px] flex bg-home text-white ">
        <div className="mx-auto w-[76%] flex items-center">
          <img
            className="w-[100px] h-[100px]"
            src="/image.png"
            alt="An image of the Nigerian Flag"
          />
          <div className="ml-10 ">
            <p className="">Government of Nigeria</p>
            <p className="mt-3">Empowering citizens through CivicLink</p>
          </div>
        </div>
      </section>

      <section className="h-[523px] flex items-center justify-center">
        <div className="mx-auto w-full h-auto md:w-[76%]">
          <img src="/nigeria-girl.png" />
        </div>
      </section>

      <section className="h-[679px] flex items-center justify-center">
        <div className="mx-auto w-full px-4 md:px-0 md:w-[76%]">
          <h1 className="font-bold text-center text-[2.5rem]">
            Latest Updates
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-[40px] pt-10">
            <LatestUpdates
              heading="Exciting news from the government!"
              image="/map-flag.png"
              tag="Announcement"
              title="GovOfficial1"
            />
            <LatestUpdates
              heading="Join us for a community event."
              image="/flag-hand.png"
              tag="Event"
              title="CivilSocietyOrg"
            />
          </div>
        </div>
      </section>

      <section className="h-[280px] border-b-1 border-b-gray-300 flex items-center justify-center">
        <div className="mx-auto mt-32 md:mt-0 md:mb-0 w-full px-4 md:px-0  md:w-[76%] pb-10 flex flex-col md:gap-[60px] gap-10">
          <h1 className="md:text-[2.5rem]  font-bold text-center">
            Language Selector for your best translation
          </h1>

          <ul className="flex justify-between text-[1.1rem]">
            <li>
              <Link to="#">English</Link>
            </li>
            <li>
              <Link to="#">Yoruba</Link>
            </li>
            <li>
              <Link to="#">Igbo</Link>
            </li>
            <li>
              <Link to="#">Hausa</Link>
            </li>
            <li>
              <Link to="#">Other</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
