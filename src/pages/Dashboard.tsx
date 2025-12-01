// ============== //
// Dashboard Page //
// ============== //

import Navbar from '../components/Navbar'

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 h-full">
            {/* Left side - Degree Roadmap */}
            <div className="flex-1 flex flex-col min-w-0">
              <div className="bg-[#2d2d2d] rounded-lg shadow-xl flex-1 flex flex-col overflow-hidden">
                <div className="p-4 border-b border-gray-700">
                  <h1 className="text-xl font-bold text-white">
                    Your Degree Roadmap - Computer Science BS
                  </h1>
                </div>
                
                {/* Course flowchart */}
                <div className="flex-1 overflow-auto p-6">
                  <div className="relative">
                    {/* SVG for connecting lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                      {/* COP 3502 to COP 3530 */}
                      <line x1="145" y1="50" x2="220" y2="150" stroke="#4b5563" strokeWidth="2" />
                      {/* COP 3503 to COP 3530 */}
                      <line x1="310" y1="50" x2="260" y2="150" stroke="#4b5563" strokeWidth="2" />
                      {/* COT 3100 to COT 4210 */}
                      <line x1="475" y1="50" x2="390" y2="150" stroke="#4b5563" strokeWidth="2" />
                      {/* MAC 2311 to STA 3032 */}
                      <line x1="640" y1="50" x2="550" y2="150" stroke="#4b5563" strokeWidth="2" />
                      {/* COP 3530 to COP 4520 */}
                      <line x1="240" y1="190" x2="240" y2="250" stroke="#4b5563" strokeWidth="2" />
                    </svg>

                    {/* Row 1 - Prerequisites */}
                    <div className="flex gap-3 mb-16 relative" style={{ zIndex: 1 }}>
                      <div className="bg-green-600 text-white rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm">COP 3502</div>
                        <div className="text-xs">Programming I</div>
                      </div>
                      <div className="bg-green-600 text-white rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm">COP 3503</div>
                        <div className="text-xs">Programming II</div>
                      </div>
                      <div className="bg-green-600 text-white rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm">COT 3100</div>
                        <div className="text-xs">Discrete Math</div>
                      </div>
                      <div className="bg-green-600 text-white rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm">MAC 2311</div>
                        <div className="text-xs">Calculus I</div>
                      </div>
                    </div>

                    {/* Row 2 - Current/In Progress */}
                    <div className="flex gap-3 mb-16 pl-24 relative" style={{ zIndex: 1 }}>
                      <div className="bg-[#FFC904] text-black rounded-lg px-4 py-3 shadow-lg border-2 border-yellow-500 w-36">
                        <div className="font-bold text-sm">COP 3530</div>
                        <div className="text-xs">Data Structures</div>
                      </div>
                      <div className="bg-[#3d3d3d] border-2 border-gray-600 rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm text-gray-300">COT 4210</div>
                        <div className="text-xs text-gray-400">Algorithms</div>
                      </div>
                      <div className="bg-[#3d3d3d] border-2 border-gray-600 rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm text-gray-300">STA 3032</div>
                        <div className="text-xs text-gray-400">Statistics</div>
                      </div>
                    </div>

                    {/* Row 3 - Future courses */}
                    <div className="flex gap-3 pl-24 relative" style={{ zIndex: 1 }}>
                      <div className="bg-[#3d3d3d] border-2 border-gray-600 rounded-lg px-4 py-3 shadow-lg w-36">
                        <div className="font-bold text-sm text-gray-300">COP 4520</div>
                        <div className="text-xs text-gray-400">Parallel Computing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Stats and Alerts */}
            <div className="w-64 space-y-3 flex flex-col overflow-auto">
              {/* Progress Circle */}
              <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#3d3d3d"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#FFC904"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.75)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-white">75%</div>
                    <div className="text-gray-400 text-xs">Complete</div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4 space-y-3">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Credits Earned</div>
                  <div className="text-xl font-bold text-white">90 / 120</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Expected Graduation</div>
                  <div className="text-xl font-bold text-white">Fall 2026</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">GPA</div>
                  <div className="text-xl font-bold text-white">3.65</div>
                </div>
              </div>

              {/* Alerts Card */}
              <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4 flex-1">
                <h3 className="text-sm font-bold text-white mb-3">Alerts</h3>
                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <div className="w-1 bg-yellow-500 rounded-full shrink-0 self-stretch"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-yellow-500">⚠</span>
                        <span className="text-xs">COP 4520 has limited seats</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="w-1 bg-blue-500 rounded-full shrink-0 self-stretch"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-blue-500">ℹ</span>
                        <span className="text-xs">Registration opens in 2 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}