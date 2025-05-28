export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Про нас
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-15 items-center max-w-5xl mx-auto">          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Ваш надійний партнер у морській медицині
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-xl text-gray-700">
                Медичний центр почав свою роботу в 2008 роцi. Основний напрямок роботи центру — медичний огляд морякiв.
              </p>
              
              <p className="text-xl text-gray-700">
                Сертифiкати визнані морськими адміністраціями багатьох країн світу, що підтверджує високу якість наших послуг та відповідність міжнародним стандартам.
              </p>
              
              <p className="text-xl text-gray-700">
                Наш центр ліцензований Міністерством Охорони Здоров&apos;я України та працює відповідно до найсучасніших медичних протоколів.
              </p>
              
              <p className="text-lg italic text-gray-600">
                Centre licensed by Ministry of public health of Ukraine.
              </p>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 mt-10 flex-wrap">
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">15+</div>
                <div className="text-sm text-gray-600 mt-1">років досвіду</div>
              </div>
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">10000+</div>
                <div className="text-sm text-gray-600 mt-1">моряків обслужено</div>
              </div>
              <div className="text-center flex-1 min-w-24">
                <div className="text-4xl font-bold text-blue-600 leading-none">100%</div>
                <div className="text-sm text-gray-600 mt-1">ліцензований</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-[20px] py-15 px-10 text-center shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-blue-600 mb-5">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mx-auto"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 12h8M12 8v8"/>
                  </svg>
                </div>
                <p className="text-xl text-blue-600 font-semibold m-0">
                  Професійна медична допомога
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
