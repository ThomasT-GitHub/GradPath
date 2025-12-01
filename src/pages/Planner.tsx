// ============= //
// Planner Page  //
// ============= //

import { useState } from 'react'
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

  const semesterInfo = [
    { name: 'Fall 2025', maxCredits: 15 },
    { name: 'Spring 2026', maxCredits: 15 },
    { name: 'Summer 2026', maxCredits: 12 },
    { name: 'Fall 2026', maxCredits: 15 },
  ]

  const handleDragStart = (e: React.DragEvent, course: Course, source: string) => {
    e.dataTransfer.setData('course', JSON.stringify(course))
    e.dataTransfer.setData('source', source)
  }

  const handleDrop = (e: React.DragEvent, target: string) => {
    e.preventDefault()
    const course: Course = JSON.parse(e.dataTransfer.getData('course'))
    const source = e.dataTransfer.getData('source')

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
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full flex gap-4 px-4 py-4">
          {/* Left sidebar - Available Courses */}
          <div 
            className="w-80 bg-[#2d2d2d] rounded-lg shadow-xl p-4 flex flex-col"
            onDrop={handleDropToAvailable}
            onDragOver={handleDragOver}
          >
            <h2 className="text-lg font-bold text-white mb-4">Available Courses</h2>
            <div className="flex-1 overflow-auto space-y-2 scrollbar-hide">
              {availableCourses.map((course) => (
                <div
                  key={course.code}
                  className="bg-[#3d3d3d] border border-gray-600 rounded-lg p-3 cursor-move hover:bg-[#4d4d4d] transition-colors"
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
          <div className="flex-1 bg-[#2d2d2d] rounded-lg shadow-xl p-4 flex flex-col overflow-hidden">
            <h2 className="text-lg font-bold text-white mb-4">Plan Your Semesters</h2>
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
      </main>
    </div>
  )
}