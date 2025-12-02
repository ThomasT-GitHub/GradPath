import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SavedCoursesProvider } from './components/SavedCoursesContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Planner from './pages/Planner'
import Catalog from './pages/Catalog'
import WhatIf from './pages/What-If'
import Progress from './pages/Progress'
import Saved from './pages/Saved'
import History from './pages/History'
import Help from './pages/Help'

export default function App() {
  return (
    <SavedCoursesProvider>
      <BrowserRouter basename="/GradPath"> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/what-if" element={<WhatIf />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/history" element={<History />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </SavedCoursesProvider>
  )
}
