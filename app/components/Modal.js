import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    toast.success('Action confirmed!', {
      position: 'bottom-right', 
      autoClose: 3000,
    });
    onClose();
  };

  const handleCancel = () => {
    toast.info('Action canceled.', {
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
      <div className="bg-white rounded-lg shadow-2xl w-[700px] max-w-full overflow-hidden transform transition-all duration-300 scale-100 hover:scale-105">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-gray-200">
          <h2 id="modal-title" className="text-2xl font-semibold text-gray-800 tracking-wide">
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

        {/* Content */}
        <div className="p-8 text-gray-700 space-y-4">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end items-center gap-6 px-8 py-6 border-t bg-gray-50">
          <button
            onClick={handleCancel}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-200"
          >
            <span className="text-lg font-medium">Cancel</span>
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            <span className="text-lg font-medium">Confirm</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
