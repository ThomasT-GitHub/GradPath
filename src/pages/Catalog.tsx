// ============= //
// Catalog Page  //
// ============= //

import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from '../components/Navbar'

interface Course {
  code: string
  name: string
  credits: number
  prereq: string
  category: string
}

export default function Catalog() {
  const allCourses: Course[] = [
    { code: 'COP 3502', name: 'Programming I', credits: 3, prereq: 'No prerequisites', category: 'Computer Science' },
    { code: 'COP 3503', name: 'Programming II', credits: 3, prereq: 'Prereq: COP 3502', category: 'Computer Science' },
    { code: 'COP 3530', name: 'Data Structures', credits: 3, prereq: 'Prereq: COP 3503', category: 'Computer Science' },
    { code: 'COP 4520', name: 'Parallel Computing', credits: 3, prereq: 'Prereq: COP 3530', category: 'Computer Science' },
    { code: 'COT 3100', name: 'Discrete Math', credits: 3, prereq: 'No prerequisites', category: 'Computer Science' },
    { code: 'COT 4210', name: 'Algorithms', credits: 3, prereq: 'Prereq: COP 3530, COT 3100', category: 'Computer Science' },
    { code: 'MAC 2311', name: 'Calculus I', credits: 4, prereq: 'No prerequisites', category: 'Math' },
    { code: 'STA 3032', name: 'Statistical Methods', credits: 3, prereq: 'Prereq: MAC 2311', category: 'Math' },
    { code: 'CDA 3103', name: 'Computer Organization', credits: 3, prereq: 'Prereq: COP 3502', category: 'Computer Science' },
    { code: 'EEL 4768', name: 'Computer Architecture', credits: 3, prereq: 'Prereq: CDA 3103', category: 'Computer Science' },
    { code: 'ENC 1101', name: 'Composition I', credits: 3, prereq: 'No prerequisites', category: 'Gen Ed' },
    { code: 'AMH 2010', name: 'US History', credits: 3, prereq: 'No prerequisites', category: 'Gen Ed' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Computer Science', 'Math', 'Gen Ed']

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="bg-[#2d2d2d] border-b border-gray-700 px-6 py-4">
          {/* Search Bar */}
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-white rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFC904]"
            />
            <button className="bg-black text-[#4a9eff] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
              <FiSearch className="text-xl" />
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeFilter === category
                    ? 'bg-[#FFC904] text-black'
                    : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="flex-1 overflow-auto px-6 py-6">
          <div className="grid grid-cols-4 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.code}
                className="bg-[#2d2d2d] border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-bold text-white text-base">{course.code}</div>
                  <div className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs font-medium">
                    {course.credits} CR
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{course.name}</div>
                <div className="text-gray-500 text-xs">{course.prereq}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}