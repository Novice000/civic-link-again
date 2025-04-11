import images from "../../assets/dashboard";

interface TopbarProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Topbar: React.FC<TopbarProps> = ({ setIsSidebarOpen }) => {
  return (
    <header className="p-4 shadow md:hidden bg-white flex justify-between items-center">
      <button onClick={() => setIsSidebarOpen(true)}>
        <img className="w-9" src={images.hamburger} />
      </button>
      <div className="flex items-center justify-evenly gap-2">
        <img src={images.notification} className="w-9" alt="notification" />
        <img src={images.message} className="w-9" alt="message" />
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <img
            src={images.avatar}
            className="w-8 h-8 rounded-full"
            alt="avatar"
          />
        </div>
        <img src={images.arrow_down} className="w-9" alt="arrow down" />
      </div>
    </header>
  );
};

export default Topbar;
