"use client";
import { useState } from "react";
import { defaultCRMData } from "../assets";
import { FaCaretDown } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";

export default function CRMTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(defaultCRMData);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="mb-4 flex items-center space-x-2">
        <GoCopilot className="text-black" />
        <input
          type="text"
          placeholder="Sort, filter and search with co-pilot..."
          className="w-auto text-black max-w-sm p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left text-black">
                <div className="flex items-center space-x-2">
                  <span>Name</span>
                  <FaCaretDown className="text-gray-500" />
                </div>
              </th>
              <th className="p-3 text-left text-black">
                <div className="flex items-center space-x-2">
                  <span>Topic</span>
                  <FaCaretDown className="text-gray-500" />
                </div>
              </th>
              <th className="p-3 text-left text-black">
                <div className="flex items-center space-x-2">
                  <span>Status Reason</span>
                  <FaCaretDown className="text-gray-500" />
                </div>
              </th>
              <th className="p-3 text-left text-black">
                <div className="flex items-center space-x-2">
                  <span>Created On</span>
                  <FaArrowDownLong className="text-black" />
                  <FaCaretDown className="text-gray-500" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="p-3 border-b border-gray-300 text-black">
                    <input type="checkbox" className="text-gray-500" />
                    {item.name}
                  </td>
                  <td className="p-3 border-b border-gray-300 text-black">
                    {item.topic}
                  </td>
                  <td
                    className={`p-3 border-b border-gray-300 font-semibold ${
                      item.status === "Active"
                        ? "text-green-500"
                        : item.status === "In Progress"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="p-3 border-b border-gray-300 text-black">
                    {item.created}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-3 text-center text-gray-500 italic border-b border-gray-300"
                >
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
