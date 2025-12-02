// ============= //
// Planner Page  //
// ============= //

import { useState } from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { HiDownload } from 'react-icons/hi'
import { IoWarning, IoClose } from 'react-icons/io5'
import Navbar from '../components/Navbar'

interface Course {
  code: string
  name: string
  credits: number
  prereq: string
}

interface SemesterCourse {
  course: Course
  id: string
}

export default function Planner() {
  const allCourses: Course[] = [
    { code: 'COP 3502', name: 'Programming I', credits: 3, prereq: 'No prerequisites' },
    { code: 'COP 3503', name: 'Programming II', credits: 3, prereq: 'Prereq: COP 3502' },
    { code: 'COP 3530', name: 'Data Structures', credits: 3, prereq: 'Prereq: COP 3503' },
    { code: 'COP 4520', name: 'Parallel Computing', credits: 3, prereq: 'Prereq: COP 3530' },
    { code: 'COT 3100', name: 'Discrete Math', credits: 3, prereq: 'No prerequisites' },
    { code: 'COT 4210', name: 'Algorithms', credits: 3, prereq: 'Prereq: COT 3100' },
  ]

  const [availableCourses, setAvailableCourses] = useState<Course[]>(allCourses)
  const [semesters, setSemesters] = useState<{ [key: string]: SemesterCourse[] }>({
    'Fall 2025': [],
    'Spring 2026': [],
    'Summer 2026': [],
    'Fall 2026': [],
  })
  const [alert, setAlert] = useState<{ message: string; show: boolean }>({ message: '', show: false })

  const semesterInfo = [
    { name: 'Fall 2025', maxCredits: 15 },
    { name: 'Spring 2026', maxCredits: 15 },
    { name: 'Summer 2026', maxCredits: 12 },
    { name: 'Fall 2026', maxCredits: 15 },
  ]

  const checkPrerequisites = (course: Course, targetSemester: string) => {
    if (course.prereq === 'No prerequisites') return null
    
    // Extract prerequisite course codes from the prereq string
    const prereqMatch = course.prereq.match(/([A-Z]{3} \d{4})/g)
    if (!prereqMatch) return null

    // Check if any prerequisites are missing from completed/planned semesters
    const semesterOrder = ['Fall 2025', 'Spring 2026', 'Summer 2026', 'Fall 2026']
    const targetIndex = semesterOrder.indexOf(targetSemester)
    
    // Get all courses planned before target semester
    const plannedCourses = new Set<string>()
    for (let i = 0; i < targetIndex; i++) {
      semesters[semesterOrder[i]].forEach(item => plannedCourses.add(item.course.code))
    }

    // Check if all prerequisites are in the planned courses
    const missingPrereqs = prereqMatch.filter(prereq => !plannedCourses.has(prereq))
    
    if (missingPrereqs.length > 0) {
      return `${course.code} requires: ${missingPrereqs.join(', ')}`
    }
    
    return null
  }

  const handleDragStart = (e: React.DragEvent, course: Course, source: string) => {
    e.dataTransfer.setData('course', JSON.stringify(course))
    e.dataTransfer.setData('source', source)
  }

  const handleDrop = (e: React.DragEvent, target: string) => {
    e.preventDefault()
    const course: Course = JSON.parse(e.dataTransfer.getData('course'))
    const source = e.dataTransfer.getData('source')

    // Check prerequisites
    const prereqError = checkPrerequisites(course, target)
    if (prereqError) {
      setAlert({ message: prereqError, show: true })
      setTimeout(() => setAlert({ message: '', show: false }), 5000)
    }

    if (source === 'available') {
      // Moving from available courses to semester
      setSemesters(prev => ({
        ...prev,
        [target]: [...prev[target], { course, id: `${course.code}-${Date.now()}` }]
      }))
      setAvailableCourses(prev => prev.filter(c => c.code !== course.code))
    } else if (source !== target) {
      // Moving between semesters
      setSemesters(prev => {
        const newSemesters = { ...prev }
        newSemesters[source] = newSemesters[source].filter(c => c.course.code !== course.code)
        newSemesters[target] = [...newSemesters[target], { course, id: `${course.code}-${Date.now()}` }]
        return newSemesters
      })
    }
  }

  const handleDropToAvailable = (e: React.DragEvent) => {
    e.preventDefault()
    const course: Course = JSON.parse(e.dataTransfer.getData('course'))
    const source = e.dataTransfer.getData('source')

    if (source !== 'available') {
      // Moving from semester back to available
      setSemesters(prev => ({
        ...prev,
        [source]: prev[source].filter(c => c.course.code !== course.code)
      }))
      setAvailableCourses(prev => [...prev, course])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const getCreditsForSemester = (semesterName: string) => {
    return semesters[semesterName].reduce((sum, item) => sum + item.course.credits, 0)
  }

  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full flex gap-4 px-4 py-4">
          {/* Left sidebar - Available Courses */}
          <div 
            className="w-80 bg-[#1a1a1a] rounded-lg shadow-xl p-4 flex flex-col"
            onDrop={handleDropToAvailable}
            onDragOver={handleDragOver}
          >
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-bold text-white">Available Courses</h2>
              <div className="group relative">
                <BiInfoCircle className="text-gray-400 hover:text-gray-300 cursor-help text-lg" />
                <div className="absolute left-0 top-full mt-2 w-64 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  These are the courses available in your major. Drag them into semester slots to plan your schedule.
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto space-y-2 scrollbar-hide">
              {availableCourses.map((course) => (
                <div
                  key={course.code}
                  className="bg-[#3d3d3d] rounded-lg p-3 cursor-move hover:bg-[#4d4d4d] transition-colors"
                  draggable
                  onDragStart={(e) => handleDragStart(e, course, 'available')}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold text-white text-sm">{course.code}</div>
                    <div className="bg-gray-600 text-gray-200 px-2 py-0.5 rounded text-xs">
                      {course.credits} CR
                    </div>
                  </div>
                  <div className="text-gray-300 text-xs mb-1">{course.name}</div>
                  <div className="text-gray-500 text-xs">{course.prereq}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Semester Planning */}
          <div className="flex-1 bg-[#1a1a1a] rounded-lg shadow-xl p-4 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">Plan Your Semesters</h2>
              <button className="flex items-center gap-2 bg-[#FFC904] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#e6b503] transition-colors">
                <HiDownload className="text-lg" />
                Download Plan
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-4 gap-4 h-full">
                {semesterInfo.map((semester) => (
                  <div
                    key={semester.name}
                    className="border-2 border-dashed border-gray-600 rounded-lg p-4 flex flex-col min-h-[400px]"
                    onDrop={(e) => handleDrop(e, semester.name)}
                    onDragOver={handleDragOver}
                  >
                    <div className="mb-3">
                      <div className="font-bold text-white text-base mb-1">
                        {semester.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {getCreditsForSemester(semester.name)} / {semester.maxCredits} CR
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {semesters[semester.name].map((item) => (
                        <div
                          key={item.id}
                          className="bg-[#3d3d3d] border border-gray-600 rounded-lg p-3 cursor-move hover:bg-[#4d4d4d] transition-colors"
                          draggable
                          onDragStart={(e) => handleDragStart(e, item.course, semester.name)}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <div className="font-bold text-white text-sm">{item.course.code}</div>
                            <div className="bg-gray-600 text-gray-200 px-2 py-0.5 rounded text-xs">
                              {item.course.credits} CR
                            </div>
                          </div>
                          <div className="text-gray-300 text-xs">{item.course.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prerequisite Alert */}
        {alert.show && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
            <div className="bg-red-600 text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-2 max-w-md">
              <IoWarning className="text-xl shrink-0" />
              <span className="font-semibold text-sm">{alert.message}</span>
              <button 
                onClick={() => setAlert({ message: '', show: false })}
                className="ml-2 bg-white text-red-600 px-1 py-1 rounded text-sm font-semibold hover:bg-gray-100 hover:opacity-70 transition-all flex items-center"
              >
                <IoClose />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}