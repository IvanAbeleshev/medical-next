import Image from 'next/image';

export default function Team() {
  const specialists = [
    {
      id: 'victor',
      name: "Зав'ялов Віктор Аполлонович",
      nameEng: 'Zavyalov Viktor',
      role: 'Голова комісії',
      image: '/images/team/victor-zavyalov.svg',
      experience: '15+ років досвіду',
      specialty: 'Морська медицина',
      description: 'Досвідчений лікар з експертизи морських медичних сертифікатів. Спеціалізується на медичних оглядах моряків згідно з міжнародними стандартами.',
      credentials: [
        'Ліцензований лікар',
        'Експерт МЛК 2006',
        'ISO 9001 сертифікований'
      ]
    }
  ];  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Large decorative square figures */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-1/3 right-8 w-28 h-28 bg-gradient-to-bl from-gray-200/25 to-blue-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-24 left-6 w-24 h-24 bg-gradient-to-tr from-indigo-200/30 to-gray-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-40 right-12 w-36 h-36 bg-gradient-to-tl from-blue-200/25 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute top-2/3 left-2 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-gray-200/25 rounded-2xl rotate-45"></div>
      <div className="absolute top-12 right-2 w-26 h-26 bg-gradient-to-bl from-indigo-300/20 to-blue-200/30 rounded-2xl rotate-45"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side decorative elements */}
        <div className="absolute top-20 left-6 w-14 h-14 border-2 border-gray-300/30 transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-40 left-2 w-9 h-9 bg-gray-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-11 h-11 border border-blue-200/30 transform rotate-45 animate-float-medium" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-4 w-7 h-7 bg-blue-100/20 rounded-full animate-pulse-strong" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-gray-400/25 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '2.7s' }}></div>
        <div className="absolute bottom-32 left-4 w-8 h-8 bg-blue-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '4.2s' }}></div>
        <div className="absolute bottom-16 left-12 w-10 h-10 border border-gray-300/35 transform rotate-45 animate-float-fast" style={{ animationDelay: '1.3s' }}></div>
        
        {/* Right side decorative elements */}
        <div className="absolute top-24 right-12 w-13 h-13 border-2 border-blue-300/25 transform rotate-45 animate-float-medium" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-48 right-6 w-8 h-8 bg-gray-200/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 right-10 w-11 h-11 border border-gray-300/35 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-4 w-6 h-6 bg-blue-200/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-20 right-8 w-12 h-12 border-2 border-blue-400/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-40 right-14 w-9 h-9 bg-gray-100/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-12 right-6 w-10 h-10 border border-blue-300/25 transform rotate-45 animate-float-fast" style={{ animationDelay: '4.8s' }}></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border border-blue-200/25 transform rotate-45 animate-pulse-gentle" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/5 left-2/3 w-10 h-10 bg-gray-200/20 rounded-full animate-float-medium" style={{ animationDelay: '1.7s' }}></div>
        <div className="absolute bottom-1/2 right-1/4 w-11 h-11 border-2 border-gray-300/30 transform rotate-45 animate-slide-diagonal" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-7 h-7 bg-blue-300/25 rounded-full animate-pulse-strong" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-4/5 left-1/3 w-9 h-9 border border-blue-400/30 transform rotate-45 animate-float-slow" style={{ animationDelay: '4.1s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-8 h-8 bg-gray-200/25 rounded-full animate-pulse-gentle" style={{ animationDelay: '1.9s' }}></div>
        
        {/* Large background elements */}
        <div className="absolute -top-20 -left-16 w-36 h-36 border border-gray-100/12 rounded-full animate-rotate-slow"></div>
        <div className="absolute -bottom-20 -right-16 w-44 h-44 border border-blue-100/12 rounded-full animate-rotate-slow" style={{ animationDelay: '25s' }}></div>
        <div className="absolute top-1/2 -left-28 w-40 h-40 border border-gray-200/10 rounded-full animate-rotate-slow" style={{ animationDelay: '15s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Наші спеціалісти
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Карточки команды - слева */}
          <div className="flex flex-col gap-8">
            {specialists.map((specialist) => (
              <div
                key={specialist.id}
                className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer h-[500px] flex flex-col hover:-translate-y-3 hover:scale-105 hover:border-blue-600"
              >
                {/* Image and Overlay */}
                <div className="relative h-[200px] bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden flex-shrink-0">
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hidden overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-500/80 flex items-center justify-center opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="text-center text-white animate-fade-in-up">
                      <span className="block text-xl font-bold mb-2">{specialist.experience}</span>
                      <span className="block text-base opacity-90">{specialist.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center flex-1 flex flex-col justify-between relative">
                  <div>
                    <h3 className="text-blue-600 text-lg font-bold mb-4 uppercase tracking-wide">
                      {specialist.role}
                    </h3>
                    <p className="text-gray-800 text-xl font-bold mb-2 leading-tight">
                      {specialist.name}
                    </p>
                    <p className="text-gray-600 italic text-base mb-5">
                      ({specialist.nameEng})
                    </p>
                  </div>
                  
                  {/* Sliding details panel */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-50/98 backdrop-blur-sm p-5 text-left border-t border-gray-200 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      {specialist.description}
                    </p>
                    
                    <div className="flex flex-col gap-1">
                      {specialist.credentials.map((credential, index) => (
                        <span key={index} className="text-blue-600 text-sm font-medium">
                          • {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Блок "Професійна команда" - справа */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-lg w-full">
              <div className="bg-blue-50 rounded-2xl p-8 text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Професійна команда
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Наші лікарі мають багаторічний досвід роботи в галузі морської медицини та регулярно підвищують свою кваліфікацію відповідно до міжнародних стандартів та вимог морських адміністрацій.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
