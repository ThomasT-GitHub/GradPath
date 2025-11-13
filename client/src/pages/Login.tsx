// ========== //
// Login Page //
// ========== //

import type { SyntheticEvent } from 'react'

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="bg-white rounded-xl p-12 md:p-16 w-full max-w-4xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="UCF Logo"
              className="w-40 md:w-64"
              onError={(e: SyntheticEvent<HTMLImageElement>) => {
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
              }}
            />
          </div>

          <div className="text-center md:text-left w-full">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Welcome to GradPath</h1>
            <p className="text-gray-600 mt-3 mb-8 text-lg md:text-xl">Plan your academic journey with confidence</p>

            <div>
              <button
                className="bg-black text-white py-3 px-10 rounded-lg text-lg md:text-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition"
                onClick={() => { window.location.href = '/dashboard.html' }}
              >
                Sign in with UCF
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}