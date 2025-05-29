'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white overflow-hidden">
      {/* Water Drop Effect - similar to Hero component */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Drop 1 */}
        <div className="absolute top-1/4 left-1/4">
          <div className="relative">
            <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-drop-fall"></div>
            <div className="absolute -top-1 -left-1 w-4 h-4 border border-white/30 rounded-full animate-ripple-1"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border border-white/20 rounded-full animate-ripple-2"></div>
            <div className="absolute -top-4 -left-4 w-10 h-10 border border-white/10 rounded-full animate-ripple-3"></div>
          </div>
        </div>

        {/* Drop 2 */}
        <div className="absolute top-1/3 right-1/3">
          <div className="relative">
            <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-drop-fall" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -top-1 -left-1 w-4 h-4 border border-white/30 rounded-full animate-ripple-1" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border border-white/20 rounded-full animate-ripple-2" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -top-4 -left-4 w-10 h-10 border border-white/10 rounded-full animate-ripple-3" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Drop 3 */}
        <div className="absolute bottom-1/3 left-1/2">
          <div className="relative">
            <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-drop-fall" style={{ animationDelay: '4s' }}></div>
            <div className="absolute -top-1 -left-1 w-4 h-4 border border-white/30 rounded-full animate-ripple-1" style={{ animationDelay: '4s' }}></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border border-white/20 rounded-full animate-ripple-2" style={{ animationDelay: '4s' }}></div>
            <div className="absolute -top-4 -left-4 w-10 h-10 border border-white/10 rounded-full animate-ripple-3" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Medical Cross Icon */}
          <div className="mb-8">
            <div className="mx-auto w-32 h-32 relative">
              <div className="absolute inset-0 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <div className="text-6xl">
                  <div className="relative">
                    <div className="w-16 h-4 bg-white rounded-full absolute top-6 left-2"></div>
                    <div className="w-4 h-16 bg-white rounded-full absolute top-0 left-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold mb-4 text-white/90">
            404
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 section-title-underline inline-block">
            Сторінку не знайдено
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl mx-auto leading-relaxed">
            На жаль, сторінка, яку ви шукаєте, не існує або була переміщена.
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-xl mx-auto">
            Можливо, ви перейшли за застарілим посиланням або ввели неправильну адресу.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏠 Повернутися на головну
            </Link>
            
            <Link 
              href="/#contacts"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              {"📞 Зв'язатися з нами"}
            </Link>
          </div>

          {/* Medical Center Info */}
          <div className="mt-12 text-white/80">
            <p className="text-sm mb-2">
              🏥 Медичний центр безпеки судноплавства
            </p>
            <p className="text-sm">
              📍 Одеса | ⚓ Медичний огляд моряків з 2008 року
            </p>
          </div>
        </div>
      </div>

      {/* Floating Medical Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>
        ⚕️
      </div>
      <div className="absolute bottom-20 right-10 text-3xl animate-bounce" style={{ animationDelay: '3s' }}>
        🩺
      </div>
      <div className="absolute top-1/2 right-20 text-2xl animate-bounce" style={{ animationDelay: '5s' }}>
        ⚓
      </div>
      <div className="absolute bottom-1/3 left-20 text-3xl animate-bounce" style={{ animationDelay: '2s' }}>
        🛟
      </div>
    </div>
  );
}
