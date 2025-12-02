// ============= //
// Progress Page //
// ============= //

import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Progress() {
  const navigate = useNavigate()
  
  const overallProgress = {
    percentage: 75,
    completed: 90,
    total: 120,
  }

  const categories = [
    { name: 'Major Requirements', completed: 42, total: 60 },
    { name: 'General Education', completed: 27, total: 30 },
    { name: 'Electives', completed: 21, total: 30 },
  ]

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-white mb-8">Your Degree Progress</h1>

          {/* Overall Progress Circle */}
          <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-8 mb-8">
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg className="w-64 h-64 transform -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="#3d3d3d"
                    strokeWidth="24"
                    fill="none"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="#FFC904"
                    strokeWidth="24"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 112}`}
                    strokeDashoffset={`${2 * Math.PI * 112 * (1 - overallProgress.percentage / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-white">{overallProgress.percentage}%</div>
                  <div className="text-gray-400 text-lg mt-2">Complete</div>
                  <div className="text-gray-500 text-sm mt-1">
                    {overallProgress.completed} of {overallProgress.total} credits
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Progress Bars */}
          <div className="grid grid-cols-3 gap-6">
            {categories.map((category) => {
              const percentage = Math.round((category.completed / category.total) * 100)
              return (
                <div 
                  key={category.name} 
                  onClick={() => navigate('/catalog')}
                  className="bg-[#2d2d2d] rounded-lg shadow-xl p-6 cursor-pointer hover:border hover:border-gray-600 transition-all"
                >
                  <h2 className="text-lg font-bold text-white mb-4">{category.name}</h2>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-[#FFC904] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="text-gray-400 text-sm">
                    {category.completed} / {category.total} credits
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}