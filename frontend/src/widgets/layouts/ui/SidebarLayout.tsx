import { useState } from 'react';
import { Menu, Home, Users, Settings, LogOut } from 'lucide-react';
import { Outlet } from 'react-router-dom';

export const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 text-white ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="space-y-6 p-6">
          <h2 className="text-2xl font-bold">MyApp</h2>
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Home size={18} /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Users size={18} /> Users
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Settings size={18} /> Settings
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <LogOut size={18} /> Logout
            </a>
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1">
        {/* Mobile Top Bar */}
        <header className="flex items-center justify-between bg-white px-4 py-3 shadow md:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </button>
          <span className="text-lg font-semibold">Dashboard</span>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
