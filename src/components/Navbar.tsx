// ============== //
// Navigation Bar //
// ============== //

export default function Navbar() {
  return (
    <nav className="bg-[#2d2d2d] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="UCF Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-bold text-xl">
              <span className="text-white">Grad</span>
              <span className="text-[#FFC904]">Path</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              My Courses
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Plan
            </button>
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