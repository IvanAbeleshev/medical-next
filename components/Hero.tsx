'use client';

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contacts');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white overflow-hidden">      {/* Water Drop Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Drop 1 */}
        <div className="absolute top-1/4 left-1/4">
          <div className="relative">
            {/* Falling droplet */}
            <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-drop-fall"></div>
            {/* Ripple circles */}
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

        {/* Drop 4 */}
        <div className="absolute top-2/3 right-1/4">
          <div className="relative">
            <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-drop-fall" style={{ animationDelay: '6s' }}></div>
            <div className="absolute -top-1 -left-1 w-4 h-4 border border-white/30 rounded-full animate-ripple-1" style={{ animationDelay: '6s' }}></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border border-white/20 rounded-full animate-ripple-2" style={{ animationDelay: '6s' }}></div>
            <div className="absolute -top-4 -left-4 w-10 h-10 border border-white/10 rounded-full animate-ripple-3" style={{ animationDelay: '6s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/images/logo.jpeg" 
                alt="Shipping Safety Medical Centre Logo" 
                className="mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl object-cover border-4 border-white/30"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              <span className="block mb-2">Shipping Safety</span>
              <span className="block">Medical Centre</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 opacity-90">
              Ласкаво просимо в Медичний центр безпеки судноплавства
            </h2>
            
            <p className="text-lg sm:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
              Професійний медичний огляд моряків з 2008 року
            </p>
            
            <a
              href="#contacts"
              onClick={handleContactClick}
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
            >
              Зв&apos;язатися з нами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
