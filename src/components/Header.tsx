import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 md:hidden hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold text-gray-800">GitHub Actions Workflow Library</h1>
            </div>
          </div>

          <div className="flex-1 max-w-lg mx-auto px-4 lg:max-w-xs lg:px-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search workflows..."
                type="search"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none">
              <Bell size={20} />
            </button>
            <div className="relative">
              <button className="flex items-center text-sm rounded-full hover:bg-gray-100 p-1">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;