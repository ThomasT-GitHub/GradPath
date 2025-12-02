// ================ //
// What-If Explorer //
// ================ //

import { useState } from 'react'
import { HiArrowRight, HiArrowUp, HiArrowDown } from 'react-icons/hi'
import { BiInfoCircle } from 'react-icons/bi'
import Navbar from '../components/Navbar'

export default function WhatIf() {
  const [selectedMajor, setSelectedMajor] = useState('Computer Engineering')

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
    coreCourses: 18,
  }

  // Different stats for each major
  const majorPlans: Record<string, { graduation: string; credits: number; semesters: number; coreCourses: number }> = {
    'Computer Science BS': {
      graduation: 'Fall 2026',
      credits: 30,
      semesters: 2,
      coreCourses: 18,
    },
    'Data Science BS': {
      graduation: 'Spring 2027',
      credits: 36,
      semesters: 3,
      coreCourses: 21,
    },
    'Computer Engineering': {
      graduation: 'Summer 2027',
      credits: 48,
      semesters: 4,
      coreCourses: 24,
    },
    'Information Technology BS': {
      graduation: 'Spring 2027',
      credits: 33,
      semesters: 3,
      coreCourses: 19,
    },
  }

  const comparisonPlan = majorPlans[selectedMajor]

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      <main className="flex-1 overflow-auto flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto px-6 py-4 w-full">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-xl font-bold text-white">What-If Major Explorer</h1>
              <div className="group relative">
                <BiInfoCircle className="text-gray-400 hover:text-[#FFC904] cursor-help transition-colors" size={18} />
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#2d2d2d] border border-gray-600 rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                  <p className="text-xs text-gray-300">Explore how changing your major would affect your timeline</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Selector */}
          <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4 mb-3">
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="text-gray-400 text-xs mb-1">Current Major</div>
                <div className="text-base font-bold text-white">Computer Science BS</div>
              </div>

              <HiArrowRight className="text-gray-500 text-xl" />

              <div>
                <div className="text-gray-400 text-xs mb-1">Compare With</div>
                <select
                  value={selectedMajor}
                  onChange={(e) => setSelectedMajor(e.target.value)}
                  className="bg-[#3d3d3d] border border-gray-600 rounded-lg px-3 py-1.5 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFC904] cursor-pointer"
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
          <div className="grid grid-cols-2 gap-3">
            {/* Current Plan */}
            <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4">
              <h2 className="text-base font-bold text-white mb-3">Current Plan</h2>
              
              <div className="space-y-3">
                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Expected Graduation</div>
                  <div className="text-base font-bold text-white">{currentPlan.graduation}</div>
                </div>

                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Remaining Credits</div>
                  <div className="text-base font-bold text-white">{currentPlan.credits} credits</div>
                </div>

                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Remaining Semesters</div>
                  <div className="text-base font-bold text-white">{currentPlan.semesters} semesters</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Core Major Courses</div>
                  <div className="text-base font-bold text-white">{currentPlan.coreCourses} courses</div>
                </div>
              </div>
            </div>

            {/* Comparison Plan */}
            <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4">
              <h2 className="text-base font-bold text-white mb-3">{selectedMajor}</h2>
              
              <div className="space-y-3">
                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Expected Graduation</div>
                  <div className="flex items-center gap-2">
                    <div className={`text-base font-bold ${comparisonPlan.graduation !== currentPlan.graduation ? 'text-[#FFC904]' : 'text-white'}`}>
                      {comparisonPlan.graduation}
                    </div>
                    {comparisonPlan.graduation !== currentPlan.graduation && (
                      <HiArrowDown className="text-red-500" size={16} />
                    )}
                  </div>
                  {comparisonPlan.graduation !== currentPlan.graduation && (
                    <div className="text-xs text-red-500 mt-0.5">Delayed graduation</div>
                  )}
                </div>

                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Remaining Credits</div>
                  <div className="flex items-center gap-2">
                    <div className={`text-base font-bold ${comparisonPlan.credits !== currentPlan.credits ? 'text-[#FFC904]' : 'text-white'}`}>
                      {comparisonPlan.credits} credits
                    </div>
                    {comparisonPlan.credits > currentPlan.credits && (
                      <HiArrowUp className="text-red-500" size={16} />
                    )}
                    {comparisonPlan.credits < currentPlan.credits && (
                      <HiArrowDown className="text-green-500" size={16} />
                    )}
                  </div>
                  {comparisonPlan.credits !== currentPlan.credits && (
                    <div className={`text-xs mt-0.5 ${comparisonPlan.credits > currentPlan.credits ? 'text-red-500' : 'text-green-500'}`}>
                      {comparisonPlan.credits > currentPlan.credits ? '+' : ''}{comparisonPlan.credits - currentPlan.credits} credits
                    </div>
                  )}
                </div>

                <div className="border-b border-gray-700 pb-2">
                  <div className="text-gray-400 text-xs mb-0.5">Remaining Semesters</div>
                  <div className="flex items-center gap-2">
                    <div className={`text-base font-bold ${comparisonPlan.semesters !== currentPlan.semesters ? 'text-[#FFC904]' : 'text-white'}`}>
                      {comparisonPlan.semesters} semesters
                    </div>
                    {comparisonPlan.semesters > currentPlan.semesters && (
                      <HiArrowUp className="text-red-500" size={16} />
                    )}
                    {comparisonPlan.semesters < currentPlan.semesters && (
                      <HiArrowDown className="text-green-500" size={16} />
                    )}
                  </div>
                  {comparisonPlan.semesters !== currentPlan.semesters && (
                    <div className={`text-xs mt-0.5 ${comparisonPlan.semesters > currentPlan.semesters ? 'text-red-500' : 'text-green-500'}`}>
                      {comparisonPlan.semesters > currentPlan.semesters ? '+' : ''}{comparisonPlan.semesters - currentPlan.semesters} {Math.abs(comparisonPlan.semesters - currentPlan.semesters) === 1 ? 'semester' : 'semesters'}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-gray-400 text-xs mb-0.5">Core Major Courses</div>
                  <div className="flex items-center gap-2">
                    <div className={`text-base font-bold ${comparisonPlan.coreCourses !== currentPlan.coreCourses ? 'text-[#FFC904]' : 'text-white'}`}>
                      {comparisonPlan.coreCourses} courses
                    </div>
                    {comparisonPlan.coreCourses > currentPlan.coreCourses && (
                      <HiArrowUp className="text-red-500" size={16} />
                    )}
                    {comparisonPlan.coreCourses < currentPlan.coreCourses && (
                      <HiArrowDown className="text-green-500" size={16} />
                    )}
                  </div>
                  {comparisonPlan.coreCourses !== currentPlan.coreCourses && (
                    <div className={`text-xs mt-0.5 ${comparisonPlan.coreCourses > currentPlan.coreCourses ? 'text-red-500' : 'text-green-500'}`}>
                      {comparisonPlan.coreCourses > currentPlan.coreCourses ? '+' : ''}{comparisonPlan.coreCourses - currentPlan.coreCourses} {Math.abs(comparisonPlan.coreCourses - currentPlan.coreCourses) === 1 ? 'course' : 'courses'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}