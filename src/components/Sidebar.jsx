import React, { useState } from 'react';
import { PlusIcon, MagnifyingGlassIcon, CogIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      {isOpen && (
        <div className="w-64 bg-gray-900 text-white flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <button onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-700">
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="text-sm block px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="text-sm block px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  <PlusIcon className="h-6 w-6 text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Options */}
          <nav className="flex-grow overflow-y-auto">
            <div className="p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <CogIcon className="h-6 w-6 text-gray-400" />
                <a
                  href="#"
                  className="text-sm block px-2 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  Settings
                </a>
              </div>
            </div>
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-700">
            <button className="w-full px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
              Upgrade Plan
            </button>
          </div>
        </div>
      )}

      {/* Open Sidebar Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="p-3 bg-gray-900 text-white rounded-full fixed top-4 left-4 hover:bg-gray-800 transition"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
