// ============== //
// Navigation Bar //
// ============== //

import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Planner', path: '/planner' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'What-If', path: '/what-if' },
    { name: 'Progress', path: '/progress' },
    { name: 'Saved', path: '/saved' },
    { name: 'History', path: '/history' },
    { name: 'Help', path: '/help' },
  ]

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="UCF Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold text-xl">
              <span className="text-white">Grad</span>
              <span className="text-[#FFC904]">Path</span>
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#FFC904] text-black'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#FFC904] rounded-full flex items-center justify-center">
              <span className="text-black font-semibold text-sm">U</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}