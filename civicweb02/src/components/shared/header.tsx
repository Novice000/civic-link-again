import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";

function Header() {
  return (
    <header className="bg-home text-white h-[70px] flex w-full justify-between items-center px-20">
      <div className="flex gap-4 items-center">
        <MenuIcon className="md:hidden" />
        <h1 className="text-[2rem] font-[700]">
          <span className="text-green-300">Civic</span>Link
        </h1>
      </div>
      <nav className="lg:flex hidden justify-between gap-[40px] items-center">
        <ul className="flex gap-[40px] font-[700] ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/learn-more">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="/find-your-rep">Officials</Link>
          </li>
          <li>
            <Link to="#">Complaints</Link>
          </li>
        </ul>
        <div className="relative">
          <Input
            className="text-white w-[150px] h-12 rounded-md"
            placeholder="search in site"
            type="text"
          />
          <FaSearch className="absolute top-[10px] right-[10px]" />
        </div>
      </nav>
      <SearchIcon className="md:hidden" />
    </header>
  );
}

export default Header;
