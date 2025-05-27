import { useState } from 'react';
import { Menu, Home, Users, Settings, LogOut } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 text-white ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="space-y-6 p-6">
          <h2 className="text-2xl font-bold">
            <Link to="/">MyApp</Link>
          </h2>
          <nav className="space-y-2">
            <Link
              to="/home"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Home size={18} /> Home
            </Link>
            <Link
              to="/users"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Users size={18} /> Users
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <Settings size={18} /> Settings
            </Link>
            <Link
              to="/logout"
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-700"
            >
              <LogOut size={18} /> Logout
            </Link>
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
          <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
            <div className="layout-container flex h-full grow flex-col">
              <div className="px-5 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[100%] flex-1">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};
