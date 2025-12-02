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
      <div className="w-full px-6">
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
          
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
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
            <img
              src="/aj-pfp.gif"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}