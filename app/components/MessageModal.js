"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { IoColorFilterSharp } from "react-icons/io5";
import { FaEnvelope, FaUserAlt, FaCheckCircle, FaTimesCircle, FaShippingFast } from "react-icons/fa";
import { MdEmail, MdOutlineBorderColor } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";

export default function MessageModal({ onClose, target }) {
  const [email, setEmail] = useState("");
  const [emailAccessGranted, setEmailAccessGranted] = useState(false);

  const handleEnableEmailAccess = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmailAccessGranted(true);
    toast.success(`Email access granted to ${email}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px] max-w-full">
        {/* Header */}
        <div className="flex items-center mb-6">
          <IoColorFilterSharp className="text-red-800 text-3xl mr-3" /> 
          <h2 className="text-2xl font-semibold text-gray-800">Agent Skills</h2>
        </div>

        {/* Skills and Instructions */}
        <div className="mb-6 text-black">
          <p className="text-base mb-4">
            Check if on-hand inventory will allow all sales orders to ship without delay. 
        </p>      
        </div>

        {/* Instructions */}
        <div className="mb-6 text-black shadow-lg p-4 rounded-md">
  <p>
    When <FaUserAlt className="text-blue-500 inline-block" /> any vendor sends an email with changes to <span className="text-blue-500"><FaEnvelope className="inline-block" /> confirmed purchase order</span>, check if the resulting <span className="text-blue-500"><CiBoxList className="inline-block" /> on-hand inventory</span> will allow <span className="text-blue-500"><MdOutlineBorderColor className="inline-block" /> all sales orders</span> to <span className="text-blue-500"><FaShippingFast className="inline-block" /> ship without delay</span>. If so, <span className="text-blue-500"><GrDocumentUpdate className="inline-block" /> update the purchase order</span> to reflect the change.
  </p>
</div>

        {/* Enable Email Access Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3"><MdEmail className="inline text-blue-500" /> Enable Email Access</h3>
          <p className="text-sm text-gray-600 mb-3">
            Allow the agent to access email inboxes to read mail from known vendors.
          </p>
          <div className="flex space-x-2 text-black">
            <input
              type="email"
              placeholder="Vendor Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleEnableEmailAccess}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition"
            >
              Allow Access
            </button>
          </div>
          {emailAccessGranted && (
            <div className="mt-2 text-green-500">
              <FaCheckCircle className="inline mr-2" /> Email access granted to {email}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black p-3 rounded-lg flex items-center space-x-2 hover:bg-gray-400 transition"
          >
            <FaTimesCircle /> <span>Close</span>
          </button>
          <button
            onClick={handleEnableEmailAccess}
            className="bg-blue-500 text-white p-3 rounded-lg flex items-center space-x-2 hover:bg-blue-600 transition"
          >
            <FaCheckCircle /> <span>Activate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
