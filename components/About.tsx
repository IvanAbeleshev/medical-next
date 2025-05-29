import Image from "next/image";


export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
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
            <div className="relative w-full max-w-lg">
              <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-[20px] shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/about.jpeg"
                    alt="Професійна медична допомога"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
