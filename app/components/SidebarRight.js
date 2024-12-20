import { BsTelephone, BsChat, BsEnvelope, BsBell } from "react-icons/bs";

export default function SidebarRight() {
  return (
    <div className="hidden md:flex w-16 top-0 right-0 h-screen bg-inherit text-black p-4 flex-col items-center space-y-6 z-10">
      {/* Compact action icons */}
      <div className="space-y-6">
        {/* Call Icon */}
        <div className="group relative">
          <BsTelephone
            size={24}
            className="cursor-pointer group-hover:text-blue-600 transition-transform duration-300 transform group-hover:scale-110"
          />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Call
          </span>
        </div>

        {/* Email Icon */}
        <div className="group relative">
          <BsEnvelope
            size={24}
            className="cursor-pointer group-hover:text-green-700 transition-transform duration-300 transform group-hover:scale-110"
          />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Email
          </span>
        </div>

        {/* Chat Icon */}
        <div className="group relative">
          <BsChat
            size={24}
            className="cursor-pointer group-hover:text-yellow-700 transition-transform duration-300 transform group-hover:scale-110"
          />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Chat
          </span>
        </div>

        {/* Notification Icon */}
        <div className="group relative">
          <BsBell
            size={24}
            className="cursor-pointer group-hover:text-red-900 transition-transform duration-300 transform group-hover:scale-110"
          />
          <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Notifications
          </span>
        </div>
      </div>
    </div>
  );
}
