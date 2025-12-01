// ========== //
// Login Page //
// ========== //

import type { SyntheticEvent } from 'react'

export default function Login() {
  const handleSignIn = () => {
    window.location.href = '/dashboard.html'
  }

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    target.style.display = 'none'
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
      <main className="w-full max-w-md">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/logo.png"
              alt="UCF Logo"
              className="w-12 h-12 object-contain"
              onError={handleImageError}
            />
            <div className="text-left">
              <div className="text-white text-sm font-semibold tracking-wide">UNIVERSITY OF</div>
              <div className="text-white text-sm font-semibold tracking-wide">CENTRAL FLORIDA</div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#2d2d2d] rounded-lg p-8 shadow-xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white">
              <span className="text-white">Grad</span>
              <span className="text-[#FFC904]">Path</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Plan your degree path, track your progress, and stay on course for graduation with personalized academic planning.
            </p>
          </div>

          {/* Sign In Button */}
          <button
            type="button"
            className="w-full bg-[#FFC904] hover:bg-[#e6b500] text-black font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            onClick={handleSignIn}
          >
            Sign in with UCF
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-600">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </main>
    </div>
  )
}