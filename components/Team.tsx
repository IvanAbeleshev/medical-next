import Image from 'next/image';

export default function Team() {
  const specialists = [
    {
      id: 'georgiy',
      name: 'Шершиков Георгій Степанович',
      nameEng: 'GEORGIY SHERSHIKOV',
      role: 'Голова комісії',
      image: '/images/team/georgiy-shershikov.svg',
      experience: '15+ років досвіду',
      specialty: 'Морська медицина',
      description: 'Досвідчений лікар з експертизи морських медичних сертифікатів. Спеціалізується на медичних оглядах моряків згідно з міжнародними стандартами.',
      credentials: [
        'Ліцензований лікар',
        'Експерт МЛК 2006',
        'ISO 9001 сертифікований'
      ]
    },
    {
      id: 'victor',
      name: 'Лукшин Віктор Вікторович',
      nameEng: 'VICTOR LUKHSHYN',
      role: 'Заступник голови комісії',
      image: '/images/team/victor-lukhshyn.svg',
      experience: '12+ років досвіду',
      specialty: 'Медичні огляди',
      description: 'Кваліфікований спеціаліст з проведення медичних оглядів моряків. Забезпечує дотримання всіх медичних протоколів та стандартів якості.',
      credentials: [
        'Сертифікований лікар',
        'Морська медицина',
        'Якість ISO стандартів'
      ]
    }
  ];  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Наші спеціалісти
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
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

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Професійна команда
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Наші лікарі мають багаторічний досвід роботи в галузі морської медицини та регулярно підвищують свою кваліфікацію відповідно до міжнародних стандартів та вимог морських адміністрацій.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
