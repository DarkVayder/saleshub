"use client"
import { useState, useEffect } from 'react';
import { FiHome, FiClock, FiBriefcase, FiUsers, FiTrendingUp, FiFileText, FiMessageSquare } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { TbPinnedFilled } from "react-icons/tb";
import { IoIosRocket } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import MessageModal from './MessageModal'; 

export default function SidebarLeft() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalTarget, setModalTarget] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openModal = (target) => {
    setModalTarget(target);
    setIsModalOpen(true); // Open the modal when Agent Skills is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="relative">
      {/* Hamburger icon */}
      {isMobile && (
        <FiAlignJustify
          className="text-2xl text-black absolute top-4 left-4 cursor-pointer md:hidden"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        />
      )}

      {/* Backdrop for mobile view */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-20 w-64 bg-white text-black h-full p-4 overflow-y-auto transform transition-transform duration-300 ${
          sidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <ul className="space-y-4">
          {/* Home Section */}
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <FiHome size={20} /> Home
          </li>

          {/* Recent Section */}
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <FiClock size={20} /> Recent
            <MdOutlineArrowDropDown className="ml-auto text-xl" />
          </li>

          {/* Pinned Section */}
          <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
            <TbPinnedFilled size={20} /> Pinned
            <MdOutlineArrowDropDown className="ml-auto text-xl" />
          </li>

          {/* My Work */}
          <div className="mt-4 border-t border-gray-300 pt-4">
            <h2 className="text-gray-500 text-sm uppercase mb-2">My Work</h2>
            <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
              <IoIosRocket size={20} /> Sales Accelerator
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
              <FiBriefcase size={20} /> Dashboard
            </li>
            <li className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
              <FaTasks size={20} /> Activities
            </li>
          </div>

          {/* Additional Sections */}
          {[{
            title: "Customers",
            items: [
              { icon: <MdManageAccounts size={20} />, label: "Accounts" },
              { icon: <FiUsers size={20} />, label: "Contacts" },
            ],
          },
          {
            title: "Sales",
            items: [
              { icon: <FiTrendingUp size={20} />, label: "Leads" },
              { icon: <MdOutlineLeaderboard size={20} />, label: "Opportunities" },
              { icon: <FaPeopleCarryBox size={20} />, label: "Competitors" },
            ],
          },
          {
            title: "Collateral",
            items: [
              { icon: <MdMenuBook size={20} />, label: "Quotes" },
              { icon: <FaBookOpen size={20} />, label: "Orders" },
              { icon: <FiFileText size={20} />, label: "Invoices" },
              { icon: <MdOutlineProductionQuantityLimits size={20} />, label: "Products" },
              { icon: <FaBookBookmark size={20} />, label: "Sales Literature" },
            ],
          },
          {
            title: "Marketing",
            items: [
              { icon: <FaClipboardList size={20} />, label: "Marketing Listing" },
              { icon: <FiMessageSquare size={20} />, label: "Quick Campaigns" },
            ],
          },
          {
            title: "Performance",
            items: [{ icon: <FiTrendingUp size={20} />, label: "Agent Skills", onClick: () => openModal("Agent Skills") }],
          },
          ].map((section, idx) => (
            <div key={idx} className="mt-4 border-t border-gray-300 pt-4">
              <h2 className="text-gray-500 text-sm uppercase mb-2">{section.title}</h2>
              {section.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer"
                  onClick={item.onClick} // Add onClick to open the modal
                >
                  {item.icon} {item.label}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>

      {/* Modal for sending a message */}
      {isModalOpen && <MessageModal onClose={closeModal} target={modalTarget} />}
    </div>
  );
}
