import React from 'react';
import { AiOutlineClose, AiOutlineEdit, AiOutlineCheckCircle, AiOutlineDislike } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    toast.success('Liked!', {
      position: 'bottom-right',
      autoClose: 3000,
    });
    onClose();
  };

  const handleCancel = () => {
    toast.info('Not Liked.', {
      position: 'bottom-right',
      autoClose: 3000,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-hidden="true"
    >
      <div className="bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg shadow-2xl w-[700px] max-w-full overflow-hidden transform transition-all duration-300 scale-100 hover:scale-105">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 bg-white rounded-t-lg">
          <h2 id="modal-title" className="text-2xl font-semibold text-gray-800">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close modal"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6 bg-white">
          {/* Engagement Section */}
          <div> 
            <div className="flex gap-4 mt-4">
            <h3 className="text-sm font-semibold text-gray-800">Is interested in engaging with you</h3>
              <button className="flex items-center px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none">
                <AiOutlineEdit className="mr-2" />
                Edit
              </button>
              <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
                <AiOutlineCheckCircle className="mr-2" />
                Approve and Send
              </button>
            </div>
          </div>

          {/* Reason Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Why I picked this lead</h3>
            <ul className="list-disc pl-5 text-gray-600 mt-3 text-xs">
              <li>User has extensive experience in the field of data science and has been browsing tech blogs frequently.</li>
              <li>They recently posted on LinkedIn about a potential job change, which aligns with our goals.</li>
              <li>They have attended several conferences in the past year related to emerging technologies.</li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">About User</h3>
            <p className="text-gray-600 mt-3 text-xs">This user has been an active member of the tech community for over 5 years, contributing articles and actively engaging with startup founders. They specialize in AI-driven solutions and are a thought leader in their space.</p>
          </div>

          {/* Children Content */}
          <div className="text-gray-700 text-xs">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-6 px-8 py-6 border-t bg-gray-50">
          <button
            onClick={handleCancel}
            className="flex items-center bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200"
          >
            <AiOutlineDislike className="mr-2" />
            Dislike
          </button>
          <button
            onClick={handleConfirm}
            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            <AiOutlineCheckCircle className="mr-2" />
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
