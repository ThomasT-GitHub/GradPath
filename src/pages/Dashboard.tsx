// ============== //
// Dashboard Page //
// ============== //

import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome to GradPath</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard widgets will go here */}
          <div className="bg-[#2d2d2d] rounded-lg p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-2">Quick Start</h2>
            <p className="text-gray-400 text-sm">Get started with your academic planning</p>
          </div>
        </div>
      </main>
    </div>
  )
}