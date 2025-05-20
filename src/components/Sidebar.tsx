import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, GitPullRequest, Package, FileText, PenTool as Tool, Code, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Workflow Templates', path: '/workflows', icon: <GitPullRequest size={20} /> },
    { name: 'Custom Actions', path: '/custom-actions', icon: <Package size={20} /> },
    { name: 'Documentation', path: '/documentation', icon: <FileText size={20} /> },
    { name: 'Developer Tools', path: '/developer-tools', icon: <Tool size={20} /> },
    { name: 'Examples', path: '/examples', icon: <Code size={20} /> },
  ];

  return (
    <div
      className={`sidebar-transition fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 md:w-64 md:flex md:flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 p-1 rounded">
            <GitPullRequest size={24} className="text-white" />
          </div>
          <span className="text-lg font-semibold">Workflow Library</span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-gray-800 md:hidden"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto pt-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm ${
                    isActive
                      ? 'bg-gray-800 text-white font-medium'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="bg-gray-800 rounded-md p-3">
          <h3 className="text-sm font-medium text-white mb-2">New to GitHub Actions?</h3>
          <p className="text-xs text-gray-400 mb-3">
            Check out our getting started guide for a quick introduction.
          </p>
          <a
            href="#"
            className="inline-block text-xs font-medium text-blue-400 hover:text-blue-300"
          >
            Read the guide →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;