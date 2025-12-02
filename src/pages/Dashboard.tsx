// ============== //
// Dashboard Page //
// ============== //

import { BiInfoCircle } from 'react-icons/bi'
import { IoWarningOutline } from 'react-icons/io5'
import Navbar from '../components/Navbar'
import { ReactFlow, Background, BackgroundVariant } from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const nodeStyles = {
  completed: {
    background: '#16a34a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: 'bold',
    width: 144,
  },
  current: {
    background: '#FFC904',
    color: 'black',
    border: '2px solid #eab308',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: 'bold',
    width: 144,
  },
  future: {
    background: '#3d3d3d',
    color: '#d1d5db',
    border: '2px solid #4b5563',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: 'bold',
    width: 144,
  },
}

interface CourseNodeProps {
  code: string
  name: string
  professor: string
  semester: string
  credits: number
}

function CourseNode({ code, name, professor, semester, credits }: CourseNodeProps) {
  return (
    <div className="group relative">
      <div className="opacity-100 group-hover:opacity-0 transition-opacity">
        <div>{code}</div>
        <div style={{ fontSize: '11px', fontWeight: 'normal' }}>{name}</div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center text-xs">
        <div className="text-[10px] leading-tight">
          <div>{professor}</div>
          <div>{semester}</div>
          <div>{credits} CR</div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const nodes: Node[] = [
    // Row 1 - Completed prerequisites
    {
      id: '1',
      data: { 
        label: <CourseNode code="COP 3502" name="Programming I" professor="Dr. Sarah Johnson" semester="Spring 2023" credits={3} />
      },
      position: { x: 0, y: 0 },
      style: nodeStyles.completed,
    },
    {
      id: '2',
      data: { 
        label: <CourseNode code="COP 3503" name="Programming II" professor="Dr. Michael Chen" semester="Fall 2023" credits={3} />
      },
      position: { x: 165, y: 0 },
      style: nodeStyles.completed,
    },
    {
      id: '3',
      data: { 
        label: <CourseNode code="COT 3100" name="Discrete Math" professor="Dr. Emily Rodriguez" semester="Fall 2023" credits={3} />
      },
      position: { x: 330, y: 0 },
      style: nodeStyles.completed,
    },
    {
      id: '4',
      data: { 
        label: <CourseNode code="MAC 2311" name="Calculus I" professor="Dr. James Patterson" semester="Spring 2023" credits={4} />
      },
      position: { x: 495, y: 0 },
      style: nodeStyles.completed,
    },
    // Row 2 - Current and upcoming
    {
      id: '5',
      data: { 
        label: <CourseNode code="COP 3530" name="Data Structures" professor="Dr. Lisa Anderson" semester="Fall 2024 (Current)" credits={3} />
      },
      position: { x: 82, y: 120 },
      style: nodeStyles.current,
    },
    {
      id: '6',
      data: { 
        label: <CourseNode code="COT 4210" name="Algorithms" professor="Dr. Robert Kim" semester="Spring 2025 (Planned)" credits={3} />
      },
      position: { x: 247, y: 120 },
      style: nodeStyles.future,
    },
    {
      id: '7',
      data: { 
        label: <CourseNode code="STA 3032" name="Statistics" professor="Dr. Amanda White" semester="Spring 2025 (Planned)" credits={3} />
      },
      position: { x: 412, y: 120 },
      style: nodeStyles.future,
    },
    // Row 3 - Future courses
    {
      id: '8',
      data: { 
        label: <CourseNode code="COP 4520" name="Parallel Computing" professor="Dr. David Martinez" semester="Fall 2025 (Planned)" credits={3} />
      },
      position: { x: 82, y: 240 },
      style: nodeStyles.future,
    },
  ]

  const edges: Edge[] = [
    { id: 'e1-5', source: '1', target: '5', animated: false, style: { stroke: '#6b7280', strokeWidth: 2 } },
    { id: 'e2-5', source: '2', target: '5', animated: false, style: { stroke: '#6b7280', strokeWidth: 2 } },
    { id: 'e3-6', source: '3', target: '6', animated: false, style: { stroke: '#6b7280', strokeWidth: 2 } },
    { id: 'e4-7', source: '4', target: '7', animated: false, style: { stroke: '#6b7280', strokeWidth: 2 } },
    { id: 'e5-8', source: '5', target: '8', animated: false, style: { stroke: '#6b7280', strokeWidth: 2 } },
  ]

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
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-white">
                      Your Degree Roadmap - Computer Science BS
                    </h1>
                    <div className="group relative">
                      <BiInfoCircle className="text-gray-400 hover:text-gray-300 cursor-help text-lg" />
                      <div className="absolute left-0 top-full mt-2 w-64 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        Your degree roadmap shows all courses and their prerequisites in a visual flow. Completed courses are green, current courses are yellow, and future courses are gray.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Course flowchart with React Flow */}
                <div className="flex-1">
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={true}
                    panOnDrag={false}
                    zoomOnScroll={false}
                    preventScrolling={false}
                    proOptions={{ hideAttribution: true }}
                    style={{ background: '#2d2d2d' }}
                  >
                    <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#404040" />
                  </ReactFlow>
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
                  <div className="text-md font-bold text-white">90 / 120</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Current Semester</div>
                  <div className="text-md font-bold text-white">Fall 2024</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Expected Graduation</div>
                  <div className="text-md font-bold text-white">Fall 2026</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">GPA</div>
                  <div className="text-md font-bold text-white">3.65</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Elective Credits Needed</div>
                  <div className="text-md font-bold text-white">6</div>
                </div>
              </div>

              {/* Alerts Card */}
              <div className="bg-[#2d2d2d] rounded-lg shadow-xl p-4">
                <h3 className="text-sm font-bold text-white mb-3">Alerts</h3>
                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <div className="w-1 bg-yellow-500 rounded-full shrink-0 self-stretch"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-300">
                        <IoWarningOutline className="text-yellow-500 text-base" />
                        <span className="text-xs">COP 4520 has limited seats</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="w-1 bg-blue-500 rounded-full shrink-0 self-stretch"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray-300">
                        <BiInfoCircle className="text-blue-500 text-base" />
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