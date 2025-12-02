// ======= //
// History //
// ======= //

import { useState } from 'react'
import Navbar from '../components/Navbar'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

interface Course {
  code: string
  name: string
  grade: string
}

interface Semester {
  id: number
  term: string
  credits: number
  gpa: number
  courses: Course[]
  expanded: boolean
}

export default function History() {
  const [semesters, setSemesters] = useState<Semester[]>([
    {
      id: 1,
      term: 'Fall 2024',
      credits: 15,
      gpa: 3.8,
      expanded: true,
      courses: [
        { code: 'COP 3530', name: 'Data Structures', grade: 'A' },
        { code: 'COT 3100', name: 'Discrete Math', grade: 'A-' },
        { code: 'MAC 2311', name: 'Calculus I', grade: 'B+' },
        { code: 'ENC 1101', name: 'Composition I', grade: 'A' },
        { code: 'AMH 2010', name: 'US History', grade: 'A-' },
      ],
    },
    {
      id: 2,
      term: 'Spring 2024',
      credits: 15,
      gpa: 3.6,
      expanded: false,
      courses: [
        { code: 'COP 3503', name: 'Programming II', grade: 'A' },
        { code: 'COP 3502', name: 'Programming I', grade: 'B+' },
        { code: 'MAC 1105', name: 'College Algebra', grade: 'A-' },
        { code: 'PSY 2012', name: 'General Psychology', grade: 'A' },
      ],
    },
  ])

  const toggleSemester = (id: number) => {
    setSemesters(
      semesters.map((sem) =>
        sem.id === id ? { ...sem, expanded: !sem.expanded } : sem
      )
    )
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-500'
    if (grade.startsWith('B')) return 'text-green-400'
    if (grade.startsWith('C')) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Course History</h1>

          <div className="space-y-4">
            {semesters.map((semester) => (
              <div key={semester.id} className="bg-[#2d2d2d] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSemester(semester.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#353535] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-white">{semester.term}</h2>
                    <span className="text-gray-400">
                      {semester.credits} credits • GPA: {semester.gpa}
                    </span>
                  </div>
                  {semester.expanded ? (
                    <IoChevronUp className="text-white text-xl" />
                  ) : (
                    <IoChevronDown className="text-white text-xl" />
                  )}
                </button>

                <div
                  className={`border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
                    semester.expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`transition-transform duration-300 ${semester.expanded ? 'translate-y-0' : '-translate-y-4'}`}>
                    {semester.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="px-6 py-4 flex items-center justify-between border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center gap-6">
                          <span className="text-white font-bold min-w-[100px]">
                            {course.code}
                          </span>
                          <span className="text-gray-300">{course.name}</span>
                        </div>
                        <span className={`font-bold text-lg ${getGradeColor(course.grade)}`}>
                          {course.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}