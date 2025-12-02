// ============== //
// Navigation Bar //
// ============== //

import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  IoPersonOutline, 
  IoSettingsOutline, 
  IoHelpCircleOutline, 
  IoInformationCircleOutline, 
  IoDocumentTextOutline, 
  IoLogOutOutline
} from 'react-icons/io5'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [showDropdown, setShowDropdown] = useState(false)

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
    <>
      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <nav className="bg-black border-b border-gray-800">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
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

          <div className="flex items-center relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img
                src={`${import.meta.env.BASE_URL}aj-pfp.gif`}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowDropdown(false)}
                  style={{
                    animation: 'fadeIn 0.15s ease-out'
                  }}
                />
                <div 
                  className="absolute right-0 top-full mt-2 w-56 bg-[#2d2d2d] border border-gray-600 rounded-lg shadow-2xl z-50"
                  style={{
                    animation: 'dropdownSlide 0.2s ease-out',
                    transformOrigin: 'top right'
                  }}
                >
                  {/* User Info Header */}
                  <div className="p-4 border-b border-gray-600">
                    <div className="text-white font-bold text-lg">Anthony Terry</div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <button className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors">
                      <IoPersonOutline className="text-xl" />
                      <span className="text-sm">My Profile</span>
                    </button>
                    <button className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors">
                      <IoSettingsOutline className="text-xl" />
                      <span className="text-sm">Account Settings</span>
                    </button>
                  </div>

                  <div className="border-t border-gray-600 py-2">
                    <button className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors">
                      <IoHelpCircleOutline className="text-xl" />
                      <span className="text-sm">FAQs</span>
                    </button>
                    <button className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors">
                      <IoInformationCircleOutline className="text-xl" />
                      <span className="text-sm">Help</span>
                    </button>
                    <button className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors">
                      <IoDocumentTextOutline className="text-xl" />
                      <span className="text-sm">Terms and Privacy</span>
                    </button>
                  </div>

                  <div className="border-t border-gray-600 py-2">
                    <button 
                      onClick={() => navigate('/')}
                      className="w-full px-4 py-3 flex items-center gap-3 text-gray-200 hover:bg-gray-700 transition-colors"
                    >
                      <IoLogOutOutline className="text-xl" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}