import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface SavedCourse {
  code: string
  name: string
  credits: number
  prereq: string
  description: string
}

interface SavedCoursesContextType {
  savedCourses: SavedCourse[]
  addSavedCourse: (course: SavedCourse) => void
  removeSavedCourse: (code: string) => void
  isSaved: (code: string) => boolean
}

const SavedCoursesContext = createContext<SavedCoursesContextType | undefined>(undefined)

export function SavedCoursesProvider({ children }: { children: ReactNode }) {
  const [savedCourses, setSavedCourses] = useState<SavedCourse[]>([
    { code: 'STA 3032', name: 'Statistical Methods', credits: 3, prereq: 'MAC 2311', description: 'Introduction to statistical analysis.' },
    { code: 'EEL 4768', name: 'Computer Architecture', credits: 3, prereq: 'CDA 3103', description: 'Advanced computer architecture topics.' },
    { code: 'COT 4210', name: 'Algorithms', credits: 3, prereq: 'COP 3530, COT 3100', description: 'Design and analysis of algorithms.' },
  ])

  const addSavedCourse = (course: SavedCourse) => {
    setSavedCourses(prev => {
      // Check if already saved
      if (prev.some(c => c.code === course.code)) {
        return prev
      }
      return [...prev, course]
    })
  }

  const removeSavedCourse = (code: string) => {
    setSavedCourses(prev => prev.filter(c => c.code !== code))
  }

  const isSaved = (code: string) => {
    return savedCourses.some(c => c.code === code)
  }

  return (
    <SavedCoursesContext.Provider value={{ savedCourses, addSavedCourse, removeSavedCourse, isSaved }}>
      {children}
    </SavedCoursesContext.Provider>
  )
}

export function useSavedCourses() {
  const context = useContext(SavedCoursesContext)
  if (context === undefined) {
    throw new Error('useSavedCourses must be used within a SavedCoursesProvider')
  }
  return context
}
