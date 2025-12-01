// ================ //
// What-If Explorer //
// ================ //

import { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import Navbar from '../components/Navbar'

export default function WhatIf() {
  const [selectedMajor, setSelectedMajor] = useState('Computer Science BS')

  const majors = [
    'Computer Science BS',
    'Data Science BS',
    'Computer Engineering',
    'Information Technology BS',
  ]

  const currentPlan = {
    graduation: 'Fall 2026',
    credits: 30,
    semesters: 2,
  }

  const comparisonPlan = {
    graduation: 'Fall 2026',
    credits: 30,
    semesters: 2,
  }

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto px-6 py-6 w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-1">What-If Major Explorer</h1>
            <p className="text-gray-400 text-sm">Explore how changing your major would affect your timeline</p>
          </div>

          {/* Comparison Selector */}
          <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-6 mb-4">
            <div className="flex items-center justify-center gap-6">
              <div>
                <div className="text-gray-400 text-xs mb-1">Current Major</div>
                <div className="text-xl font-bold text-white">Computer Science BS</div>
              </div>

              <HiArrowRight className="text-gray-500 text-2xl" />

              <div>
                <div className="text-gray-400 text-xs mb-1">Compare With</div>
                <select
                  value={selectedMajor}
                  onChange={(e) => setSelectedMajor(e.target.value)}
                  className="bg-[#3d3d3d] border border-gray-600 rounded-lg px-4 py-2 text-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC904] cursor-pointer"
                >
                  {majors.map((major) => (
                    <option key={major} value={major} className="bg-[#3d3d3d] text-white">
                      {major}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* Current Plan */}
            <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-5">
              <h2 className="text-lg font-bold text-white mb-4">Current Plan</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-3">
                  <div className="text-gray-400 text-xs mb-1">Expected Graduation</div>
                  <div className="text-xl font-bold text-white">{currentPlan.graduation}</div>
                </div>

                <div className="border-b border-gray-700 pb-3">
                  <div className="text-gray-400 text-xs mb-1">Remaining Credits</div>
                  <div className="text-xl font-bold text-white">{currentPlan.credits} credits</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs mb-1">Remaining Semesters</div>
                  <div className="text-xl font-bold text-white">{currentPlan.semesters} semesters</div>
                </div>
              </div>
            </div>

            {/* Comparison Plan */}
            <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-5">
              <h2 className="text-lg font-bold text-white mb-4">{selectedMajor}</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-3">
                  <div className="text-gray-400 text-xs mb-1">Expected Graduation</div>
                  <div className="text-xl font-bold text-white">{comparisonPlan.graduation}</div>
                </div>

                <div className="border-b border-gray-700 pb-3">
                  <div className="text-gray-400 text-xs mb-1">Remaining Credits</div>
                  <div className="text-xl font-bold text-white">{comparisonPlan.credits} credits</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs mb-1">Remaining Semesters</div>
                  <div className="text-xl font-bold text-white">{comparisonPlan.semesters} semesters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}