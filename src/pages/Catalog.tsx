// ============= //
// Catalog Page  //
// ============= //

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { useSavedCourses } from '../components/SavedCoursesContext'
import Navbar from '../components/Navbar'

interface Course {
  code: string
  name: string
  credits: number
  prereq: string
  category: string
  description: string
}

export default function Catalog() {
  const navigate = useNavigate()
  const { addSavedCourse, removeSavedCourse, isSaved } = useSavedCourses()
  
  const allCourses: Course[] = [
    { code: 'COP 3502', name: 'Programming I', credits: 3, prereq: 'No prerequisites', category: 'Computer Science', description: 'Introduction to programming fundamentals.' },
    { code: 'COP 3503', name: 'Programming II', credits: 3, prereq: 'COP 3502', category: 'Computer Science', description: 'Object-oriented programming concepts.' },
    { code: 'COP 3530', name: 'Data Structures', credits: 3, prereq: 'COP 3503', category: 'Computer Science', description: 'Advanced data structures and algorithms.' },
    { code: 'COP 4520', name: 'Parallel Computing', credits: 3, prereq: 'COP 3530', category: 'Computer Science', description: 'Parallel programming techniques and concepts.' },
    { code: 'COT 3100', name: 'Discrete Math', credits: 3, prereq: 'No prerequisites', category: 'Computer Science', description: 'Mathematical foundations for computer science.' },
    { code: 'COT 4210', name: 'Algorithms', credits: 3, prereq: 'COP 3530, COT 3100', category: 'Computer Science', description: 'Design and analysis of algorithms.' },
    { code: 'MAC 2311', name: 'Calculus I', credits: 4, prereq: 'No prerequisites', category: 'Math', description: 'Differential and integral calculus.' },
    { code: 'STA 3032', name: 'Statistical Methods', credits: 3, prereq: 'MAC 2311', category: 'Math', description: 'Introduction to statistical analysis.' },
    { code: 'CDA 3103', name: 'Computer Organization', credits: 3, prereq: 'COP 3502', category: 'Computer Science', description: 'Computer hardware and organization.' },
    { code: 'EEL 4768', name: 'Computer Architecture', credits: 3, prereq: 'CDA 3103', category: 'Computer Science', description: 'Advanced computer architecture topics.' },
    { code: 'ENC 1101', name: 'Composition I', credits: 3, prereq: 'No prerequisites', category: 'Gen Ed', description: 'Academic writing and composition.' },
    { code: 'AMH 2010', name: 'US History', credits: 3, prereq: 'No prerequisites', category: 'Gen Ed', description: 'United States history survey.' },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)

  const categories = ['All', 'Computer Science', 'Math', 'Gen Ed']

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter
    return matchesSearch && matchesFilter
  })

  const handleBookmarkToggle = (course: Course) => {
    if (isSaved(course.code)) {
      removeSavedCourse(course.code)
    } else {
      addSavedCourse({
        code: course.code,
        name: course.name,
        credits: course.credits,
        prereq: course.prereq,
        description: course.description
      })
    }
  }

  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-1 overflow-hidden flex flex-col">
        <div className="bg-[#1a1a1a] px-6 py-4">
          {/* Search Bar */}
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-[#2d2d2d] rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC904]"
            />
            <button className="bg-black text-[#4a9eff] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center gap-2">
              <FiSearch className="text-xl text-gray-400" />
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
                onClick={() => setSelectedCourse(course)}
                className="bg-[#1a1a1a] rounded-lg p-4 transition-colors cursor-pointer"
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

        {/* Course Detail Modal */}
        {selectedCourse && (
          <div 
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedCourse(null)}
          >
            <div 
              className="bg-[#1a1a1a] rounded-lg p-8 max-w-lg w-full mx-4 relative border border-[#FFC904]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 text-2xl"
              >
                <IoClose />
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-1">{selectedCourse.code}</h2>
              <h3 className="text-lg text-gray-300 mb-6">{selectedCourse.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Description</h4>
                  <p className="text-gray-300">{selectedCourse.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Credits</h4>
                  <p className="text-gray-300">{selectedCourse.credits}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Prerequisites</h4>
                  <p className="text-gray-300">{selectedCourse.prereq}</p>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => navigate('/planner')}
                  className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Add to Planner
                </button>
                <button 
                  onClick={() => selectedCourse && handleBookmarkToggle(selectedCourse)}
                  className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  {selectedCourse && isSaved(selectedCourse.code) ? 'Remove Saved' : 'Bookmark'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}