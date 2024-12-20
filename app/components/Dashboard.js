"use client"
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { TbMessagePlus } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Modal from './Modal';

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', details: '' });

  const handleOpenModal = (title, details) => {
    setModalContent({ title, details });
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-7xl mx-auto grid gap-8">
        {/* Top Section (Greeting and Progress Bar) */}
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-2 max-w-xl">
              <h1 className="font-semibold text-gray-800">
                <span className="text-2xl">Hi Mona,</span>{' '}
                <span className="text-blue-600">68%</span> of goal achieved and
                the rest will be achieved by focusing on 20 leads.
              </h1>
            </div>

            {/* Progress Bar with Target */}
            <div className="relative w-2/3 h-4 rounded-full bg-gray-200">
              <div
                className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-green-800 to-yellow-500"
                style={{ width: '68%' }}
              ></div>
              <div className="absolute -top-6 left-2/3 transform -translate-x-1/2 text-gray-800 text-xs font-semibold bg-white px-2 py-1 rounded shadow">
                Target: $45M
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            Co-pilot has identified 20 key points leads that show strong
            purchase intent and are actively engaging. These leads need your
            focus.
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex justify-between space-x-8">
          <div className="flex flex-col space-y-8 w-2/3">
            {/* Profile 1 */}
            <div className="flex items-center space-x-6">
              <FaUser className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Jane Reyes
                </h3>
                <p className="italic text-gray-500">COO, Northern Traders</p>
                <p className="text-sm text-black bg-slate-100 p-2 rounded-md">
                  <TbMessagePlus className="inline mr-2" /> Jane may be
                  interested in upgrading the espresso machine in her store.
                  <BsStars className="inline ml-2" />
                </p>
                <p className="text-sm text-gray-400">Expand Business</p>
                {/* Engage Button */}
                <button
                  className="mt-2 text-blue-600 hover:underline"
                  onClick={() =>
                    handleOpenModal(
                      'Jane Reyes - Profile Details',
                      `Position: COO, Northern Traders\n\nLead Info: Jane may be interested in upgrading the espresso machine in her store.`
                    )
                  }
                >
                  Engage
                </button>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="flex items-center space-x-6">
              <FaUser className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Alan Munger
                </h3>
                <p className="italic text-gray-500">
                  Head of Real Estate Development, Contoso Coffee
                </p>
                <p className="text-sm text-black bg-slate-100 p-2 rounded-md">
                  <SlCalender className="inline mr-2" /> Prepare for high buying
                  intent meeting scheduled for 2pm regarding upgrading service
                  contact.
                  <BsStars className="inline ml-2" />
                </p>
                <p className="text-sm text-gray-400">
                  Upcoming meeting today at 2pm
                </p>
                {/* Engage Button */}
                <button
                  className="mt-2 text-blue-600 hover:underline"
                  onClick={() =>
                    handleOpenModal(
                      'Alan Munger - Profile Details',
                      `Position: Head of Real Estate Development, Contoso Coffee\n\nLead Info: Prepare for high buying intent meeting scheduled for 2pm regarding upgrading service contact.`
                    )
                  }
                >
                  Engage
                </button>
              </div>
            </div>
          </div>

          {/* Other Activities Section */}
          <div className="w-1/3 flex flex-col bg-white rounded-lg shadow-lg p-4 space-y-4">
            <h2 className="font-semibold text-gray-800 text-xl">
              Other Activities
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600 flex items-center space-x-2">
                <MdOutlineKeyboardArrowUp className="text-gray-800" />
                <span>New product demo session with the design team</span>
              </li>
              <li className="text-gray-600 flex items-center space-x-2">
                <MdOutlineKeyboardArrowUp className="text-gray-800" />
                <span>Monthly review meeting with stakeholders</span>
              </li>
              <li className="text-gray-600 flex items-center space-x-2">
                <MdOutlineKeyboardArrowUp className="text-gray-800" />
                <span>Follow-up with regional sales team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalContent.title}
      >
        <pre>{modalContent.details}</pre>
      </Modal>
    </div>
  );
};

export default Dashboard;
