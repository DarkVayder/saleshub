import React from 'react';
import { FaUser, FaGithub } from 'react-icons/fa';
import { TbMessagePlus } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-7xl mx-auto md:grid-cols-2 gap-8">
        {/* Top Section (Greeting and Progress Bar) */}
        <div className="bg-white p-8 rounded-lg shadow-xl mb-8 flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-2 max-w-xl">
              <h1 className="text-sm font-semibold text-gray-800">
                Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and the rest will be achieved by focusing on 20 leads.
              </h1>
            </div>

            {/* Progress Bar */}
            <div className="relative w-2/3 h-4 rounded-full bg-gray-200">
              <div className="absolute top-0 left-0 h-4 bg-gradient-to-r from-green-800 to-yellow-500" style={{ width: '68%' }}></div>
            </div>
          </div>

          {/* Target Info */}
          <div className="flex justify-between w-full text-gray-800 text-sm">
            <span className="font-semibold">Target: $45M</span>
            <span className="font-semibold">68% of Budget achieved</span>
            <MdOutlineKeyboardArrowUp className="text-green-500" />
          </div>

          {/* Write-Up Below Progress Bar */}
          <div className="text-gray-500 text-sm">
            Co-pilot has identified 20 key points leads that show strong purchase intent and are actively engaging. These leads need your focus.
          </div>
        </div>

        {/* Profile and Activities Section */}
        <div className="flex justify-between space-x-8">
          {/* Profile Section */}
          <div className="flex flex-col space-y-8 w-2/3">
            {/* Profile 1 */}
            <div className="flex items-center space-x-6">
              <FaUser className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Jane Reyes</h3>
                <p className="italic text-gray-500">COO, Northern Traders</p>
                <p className="text-sm text-black bg-slate-100 p-2 rounded-md">
                  <TbMessagePlus className="inline mr-2" /> Jane may be interested in upgrading the espresso machine in her store. 
                  <BsStars className="inline ml-2" />
                </p>
                <p className="text-sm text-gray-400">Expand Business</p>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="flex items-center space-x-6">
              <FaUser className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Alan Munger</h3>
                <p className="italic text-gray-500">Head of Real Estate Development, Contoso Coffee</p>
                <p className="text-sm text-black bg-slate-100 p-2 rounded-md">
                  <SlCalender className="inline mr-2" /> Prepare for high buying intent meeting scheduled for 2pm regarding upgrading service contact.
                  <BsStars className="inline ml-2" />
                </p>
                <p className="text-sm text-gray-400">Upcoming meeting today at 2pm</p>
              </div>
            </div>
          </div>

          {/* Other Activities Section on the Right */}
          <div className="flex flex-col space-y-8 w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other Key Activities</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex flex-col">
                  <span className="text-sm">Cafe A100 for Woodland Bank</span>
                  <span className="text-xs text-gray-400">1 day ago</span>
                  <div>Review draft and reply</div>
                </div>
                <BsStars className="text-blue-800" />
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex flex-col">
                  <span className="text-sm">Partnership Opportunity</span>
                  <span className="text-xs text-gray-400">3 days to go</span>
                  <div>Review draft and reply</div>
                </div>
                <BsStars className="text-blue-800" />
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex flex-col">
                  <span className="text-sm">Customer feedback received</span>
                  <span className="text-xs text-gray-400">9 days to go</span>
                  <div>Review draft and reply</div>
                </div>
                <BsStars className="text-blue-800" />
              </div>
            </div>
            <p className='text-bold text-sm cursor-pointer hover:text-blue-950 text-blue-800'>Show other activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
