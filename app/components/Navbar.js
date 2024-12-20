"use client";
import React, { useState } from "react";
import {
  FaEye,
  FaPlus,
  FaSyncAlt,
  FaUsers,
  FaTrashAlt,
  FaRegLightbulb,
  FaRegShareSquare,
} from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  // Open "New Lead" modal
  const openNewLeadModal = () => {
    setIsNewLeadModalOpen(true);
  };

  // Close "New Lead" modal
  const closeNewLeadModal = () => {
    setIsNewLeadModalOpen(false);
    setNewLead({ name: "", email: "", phone: "" });
  };

  // Handle input change in the "New Lead" form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead((prevLead) => ({ ...prevLead, [name]: value }));
  };

  // Save new lead and show Toastify notification
  const saveNewLead = () => {
    toast.success("Lead successfully added!");
    closeNewLeadModal();
  };

  return (
    <>
      <nav className="bg-white p-4 shadow-md hidden md:flex">
        <div className="flex items-center justify-between w-full">
          {/* Text on the Left */}
          <div className="flex items-center">
            <h1 className="text-black font-bold text-xs md:text-sm">
              My Open Leads
            </h1>
            <IoIosArrowDown className="ml-2 text-black" />
          </div>

          {/* Buttons and Icons on the Right */}
          <div className="flex items-center space-x-3">
            {/* Buttons with pop-up functionality */}
            {[
              {
                icon: <FaChartLine className="mr-1" />,
                label: "Show Chart",
                modal: "Chart loading! Please wait.",
              },
              {
                icon: <FaEye className="mr-1" />,
                label: "Focused View",
                modal: "Focused view activated. Adjust your settings as needed.",
              },
              {
                icon: <FaPlus className="mr-1" />,
                label: "New",
                action: openNewLeadModal,
              },
              {
                icon: <FaSyncAlt className="mr-1" />,
                label: "Refresh",
                modal: "Refreshing your data. Please wait...",
              },
              {
                icon: <FaUsers className="mr-1" />,
                label: "Collaborate",
                modal: "Invite team members to collaborate on this project.",
              },
              {
                icon: <FaTrashAlt className="mr-1" />,
                label: "Delete",
                modal: "Are you sure you want to delete this item?",
              },
              {
                icon: <FaRegLightbulb className="mr-1" />,
                label: "Smart Data",
                modal: "Smart Data is now enabled. View recommendations.",
              },
            ].map((button, index) => (
              <button
                key={index}
                className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center hover:bg-gray-100 hover:text-gray-900 hover:shadow-md transition duration-200"
                onClick={() => (button.action ? button.action() : openModal(button.modal))}
              >
                {button.icon}
                {button.label}
              </button>
            ))}

            {/* Dropdown Icon with Hover Text */}
            <button
              title="Share"
              className="text-xs md:text-sm border rounded-full p-1 text-white bg-blue-500 flex items-center hover:bg-blue-600 hover:shadow-md transition duration-200"
            >
              <FaRegShareSquare className="mr-1" />
              <IoIosArrowDown className="mr-1" />
            </button>
          </div>
        </div>

        {/* General Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-lg text-black font-semibold mb-4">
                Notification
              </h2>
              <p className="text-sm text-gray-600">{modalContent}</p>
              <button
                className="mt-4 bg-gray-900 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Okay
              </button>
            </div>
          </div>
        )}

        {/* "New Lead" Modal */}
        {isNewLeadModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-lg font-semibold text-black mb-4">
                Add New Lead
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  name="Title"
                  value={newLead.name}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="Lead"
                  value={newLead.email}
                  onChange={handleInputChange}
                  placeholder="Lead"
                  className="w-full p-2 border rounded"
                />
                <button
                  type="button"
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded"
                  onClick={saveNewLead}
                >
                  Save
                </button>
              </form>
              <button
                className="mt-4 w-full bg-gray-200 text-black px-4 py-2 rounded"
                onClick={closeNewLeadModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Toastify Container */}
      <ToastContainer />
    </>
  );
}
