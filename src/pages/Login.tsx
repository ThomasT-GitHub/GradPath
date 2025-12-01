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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left side - Branding */}
          <div className="lg:w-5/12 bg-gradient-to-br from-black to-gray-800 p-8 lg:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <div className="relative z-10 w-full max-w-sm text-center mx-auto">
              <div className="mb-8">
                <img
                  src="/logo.png"
                  alt="UCF Logo"
                  className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
                  onError={handleImageError}
                />
                
                <div className="bg-[#FFC904] h-1 w-16 mx-auto mb-6 rounded-full"></div>
                
                <h2 className="text-xl font-bold mb-2">University of Central Florida</h2>
                <p className="text-gray-300 text-sm">Academic Planning Portal</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-300">Plan your degree path</p>
                <p className="text-sm text-gray-300">Track your progress</p>
                <p className="text-sm text-gray-300">Graduate on time</p>
              </div>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="lg:w-7/12 p-8 lg:p-12 xl:p-16 flex flex-col justify-center items-center">
            <div className="max-w-lg mx-auto w-full text-center">
              <div className="mb-6">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
                  Welcome to{' '}
                  <span className="text-black">Grad</span>
                  <span className="text-[#FFC904]">Path</span>
                </h1>
                <div className="h-1 w-16 bg-gradient-to-r from-[#FFC904] to-black rounded-full mx-auto"></div>
              </div>

              <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed">
                Your personalized academic planning tool to help you navigate your educational journey with confidence and clarity.
              </p>

              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3.5 px-6 rounded-xl text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group mx-auto"
                  onClick={handleSignIn}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign in with UCF</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  Use your UCF credentials to access GradPath
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-400 text-center">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}