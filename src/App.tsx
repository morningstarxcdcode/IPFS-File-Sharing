import React from 'react';
import { GithubIcon, Menu } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import WorkflowTemplates from './pages/WorkflowTemplates';
import CustomActions from './pages/CustomActions';
import Documentation from './pages/Documentation';
import DeveloperTools from './pages/DeveloperTools';
import Examples from './pages/Examples';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workflows" element={<WorkflowTemplates />} />
              <Route path="/custom-actions" element={<CustomActions />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/developer-tools" element={<DeveloperTools />} />
              <Route path="/examples" element={<Examples />} />
            </Routes>
          </main>
          
          <footer className="bg-white p-4 shadow-inner border-t border-gray-200">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <GithubIcon size={20} />
                <span className="text-sm text-gray-600">GitHub Actions Workflow Library</span>
              </div>
              <div className="text-sm text-gray-600">
                &copy; {new Date().getFullYear()} - MIT License
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;