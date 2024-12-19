import React from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaEye, FaPlus, FaSyncAlt, FaUsers, FaTrashAlt, FaEllipsisV, FaRegLightbulb, FaRegShareSquare } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import { HiFilter } from 'react-icons/hi';
import { BsColumns } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md hidden md:flex">
      <div className="flex items-center justify-between">
        {/* Text on the Left */}
        <h1 className="text-black font-bold text-xs md:text-sm">My Open Leads</h1>
        <IoIosArrowDown className="mr-1 text-black" />
        
        {/* Buttons and Icons on the Right */}
        <div className="flex items-center space-x-3">
          {/* Show Cart */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaShoppingCart className="mr-1" />
            Show Cart
          </button>
          
          {/* Focused View */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaEye className="mr-1" />
            Focused View
          </button>
          
          {/* New */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaPlus className="mr-1" />
            New
          </button>
          
          {/* Refresh */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaSyncAlt className="mr-1" />
            Refresh
          </button>
          
          {/* Collaborate */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaUsers className="mr-1" />
            Collaborate
          </button>
          
          {/* Delete */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaTrashAlt className="mr-1" />
            Delete
          </button>
          
          {/* Dropdown Icon */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <IoIosArrowDown className="mr-1" />
            <FaEllipsisV className="mr-1" />
          </button>
          
          {/* Smart Data */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <FaRegLightbulb className="mr-1" />
            Smart Data
          </button>
          
          {/* Edit Filters */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <HiFilter className="mr-1" />
            Edit Filters
          </button>
          
          {/* Edit Columns */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-inherit flex items-center">
            <BsColumns className="mr-1" />
            Edit Columns
          </button>
          
          {/* Dropdown Icon (Blue Background) */}
          <button className="text-xs md:text-sm border rounded-full p-1 text-black bg-blue-500 flex items-center">
            <FaRegShareSquare className="mr-1 text-white" />
            <IoIosArrowDown className="mr-1 text-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}
