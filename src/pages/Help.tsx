// ==== //
// Help //
// ==== //

import Navbar from '../components/Navbar'
import { 
  MdDashboard, 
  MdCalendarMonth, 
  MdMenuBook, 
  MdCompare, 
  MdShowChart, 
  MdBookmark, 
  MdHistory 
} from 'react-icons/md'

export default function Help() {
  const helpSections = [
    {
      icon: <MdDashboard className="text-3xl text-blue-400" />,
      title: 'Dashboard',
      description: 'The dashboard shows your degree roadmap with course prerequisites. Click any course to view details.',
    },
    {
      icon: <MdCalendarMonth className="text-3xl text-purple-400" />,
      title: 'Planner',
      description: 'Drag courses from the available list into semester slots. The system will alert you if prerequisites are missing or if your plan delays graduation.',
    },
    {
      icon: <MdMenuBook className="text-3xl text-green-400" />,
      title: 'Catalog',
      description: 'Search and filter courses. Click any course to see details and add it to your saved list or planner.',
    },
    {
      icon: <MdCompare className="text-3xl text-orange-400" />,
      title: 'What-If',
      description: 'Explore different majors and see how they would affect your graduation timeline.',
    },
    {
      icon: <MdShowChart className="text-3xl text-teal-400" />,
      title: 'Progress',
      description: 'View your completion progress across major requirements, general education, and electives.',
    },
    {
      icon: <MdBookmark className="text-3xl text-pink-400" />,
      title: 'Saved Courses',
      description: 'Access your bookmarked courses and quickly add them to your planner.',
    },
    {
      icon: <MdHistory className="text-3xl text-yellow-400" />,
      title: 'History',
      description: 'Review past semesters, grades, and track your academic journey.',
    },
  ]

  return (
    <div className="h-screen flex flex-col bg-[#1a1a1a]">
      <Navbar />

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-white mb-8">Help & Support</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {helpSections.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#2d2d2d] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">{section.icon}</div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFC904] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Need More Help?</h2>
            <p className="text-black text-lg">
              Contact UCF Academic Advising or visit the Student Success Center
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}