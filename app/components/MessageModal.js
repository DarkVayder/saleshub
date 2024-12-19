"use client"
import React, { useState } from "react";

export default function MessageModal({ onClose, target }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send the message (can integrate with an API or state)
    console.log(`Message sent to ${target}: ${message}`);
    onClose(); // Close the modal after sending the message
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Send Message to {target}</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <div className="mt-4 flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-300 text-black p-2 rounded-lg">
            Cancel
          </button>
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
