// ============= //
// Saved Courses //
// ============= //

import { useNavigate } from 'react-router-dom'
import { useSavedCourses } from '../components/SavedCoursesContext'
import Navbar from '../components/Navbar'

export default function Saved() {
  const navigate = useNavigate()
  const { savedCourses, removeSavedCourse } = useSavedCourses()

  const handleRemove = (code: string) => {
    removeSavedCourse(code)
  }

  return (
    <div className="h-screen flex flex-col bg-black">
      <Navbar />
      
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Saved Courses</h1>

          <div className="space-y-3">
            {savedCourses.map((course) => (
              <div
                key={course.code}
                className="bg-[#1a1a1a] rounded-lg p-4 transition-colors"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <h2 className="text-lg font-bold text-white min-w-[100px]">{course.code}</h2>
                    <p className="text-gray-300 flex-1">{course.name}</p>
                    <span className="bg-gray-600 text-gray-200 px-3 py-1 rounded text-sm font-medium">
                      {course.credits} CR
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => navigate('/planner')}
                      className="bg-black text-white px-5 py-1.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors text-sm"
                    >
                      Add to Planner
                    </button>
                    <button
                      onClick={() => handleRemove(course.code)}
                      className="bg-transparent text-gray-300 px-5 py-1.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {savedCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No saved courses yet</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}