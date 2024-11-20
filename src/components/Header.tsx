import { Layout, Avatar } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import Logo from "../assets/images/Logo.png"; // Logo path
import { Link } from "react-router-dom"; // Import Link for navigation

export const Header = () => {
  const currentDate = new Date().toLocaleDateString(); // Example: "11/19/2024"
  const currentTime = new Date().toLocaleTimeString(); // Example: "10:30 AM"

  return (
    <Layout.Header className="fixed top-0 w-full z-50 h-[30vh] px-5 py-0 flex items-center bg-black">
      {/* Left Section: User Info */}
      <div className="flex items-center gap-3">
        <Avatar
          icon={<UserOutlined />}
          className="shadow-lg bg-black cursor-pointer hover:opacity-80 transition-opacity duration-300"
        />
        <div className="flex flex-col items-start w-28">
          <p className="text-white text-sm font-bold">Tayyab Sohail</p>
          <p className="text-white text-xs font-semibold">User</p>
        </div>
      </div>

      {/* Center Section: Logo and Navigation */}
      <div className="flex flex-col items-center mx-80 translate-y-[2vh]">
        {/* Adjusted positioning */}
        {/* Bigger Logo without hover */}
        <img
          src={Logo}
          alt="Logo"
          className="h-[15vh] hover:opacity-100 transition-opacity duration-300"
        />
        <div className="flex gap-10 mt-4">
          {["Home", "Profile", "Chatbot", "Vision", "Contact", "About"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`} // Example routing path, change as needed
                className="text-white text-lg font-normal cursor-pointer hover:text-neutral-500 transition-colors duration-300"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Right Section: Time, Date, and Vertical Line */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="text-white text-sm font-medium">
          <p>{currentTime}</p>
          <p>{currentDate}</p>
        </div>

        {/* Bold Vertical Line */}
        <div className="border-l-2 border-white h-16 mx-4"></div>

        {/* Settings Icon */}
        <SettingOutlined className="text-white text-xl cursor-pointer hover:text-gray-400 transition-colors duration-300" />
      </div>
    </Layout.Header>
  );
};
