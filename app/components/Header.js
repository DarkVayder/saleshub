import { FiSettings, FiSun, FiHelpCircle, FiUser } from "react-icons/fi";
import { RxDragHandleDots1 } from "react-icons/rx";
import { FaPlus, FaLightbulb } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
      {/* Left Section */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center sm:space-x-2">
        <div className="flex items-center space-x-2">
          <RxDragHandleDots1 size={20} className="cursor-pointer" />
          <h1 className="text-lg sm:text-xl font-bold">Dynamics 365</h1>
        </div>
        <div className="flex items-start sm:items-center sm:space-x-2 mt-2 sm:mt-0">
          <div className="border-l border-gray-500 h-5 mx-2 hidden sm:block"></div>
          <h2 className="text-xs sm:text-sm">Sales Hub</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-auto flex justify-end items-center mt-4 sm:mt-0">
        {/* Hidden on Mobile Except Profile */}
        <div className="flex space-x-4 sm:space-x-6">
          <FaLightbulb size={20} className="hidden sm:block cursor-pointer hover:text-blue-500 transition-colors" title="Insights" />
          <FaPlus size={20} className="hidden sm:block cursor-pointer hover:text-blue-500 transition-colors" title="Add" />
          <FiSettings size={20} className="hidden sm:block cursor-pointer hover:text-blue-500 transition-colors" title="Settings" />
          <FiHelpCircle size={20} className="hidden sm:block cursor-pointer hover:text-blue-500 transition-colors" title="Help" />
          <FiSun size={20} className="hidden sm:block cursor-pointer hover:text-blue-500 transition-colors" title="Theme" />
          <FiUser size={20} className="cursor-pointer hover:text-blue-500 transition-colors" title="Profile" />
        </div>
      </div>
    </div>
  );
}
