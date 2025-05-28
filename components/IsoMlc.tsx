export default function IsoMlc() {
  const isoCards = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: 'ISO 9001:2015',
      description: 'Система управління якістю, що забезпечує постійне поліпшення медичних послуг та відповідність міжнародним стандартам.',
      badges: ['Сертифіковано', 'Щорічний аудит']
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      title: 'MLC 2006',
      description: 'Морська трудова конвенція 2006 року - міжнародний стандарт для захисту прав моряків та забезпечення безпечних умов праці.',
      badges: ['IMO затверджено', 'Міжнародне визнання']
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      title: 'Медичні протоколи',
      description: 'Дотримання сучасних медичних протоколів та стандартів для проведення якісних медичних оглядів моряків.',
      badges: ['МОЗ ліцензія', '15+ років досвіду']
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Навчання персоналу',
      description: 'Регулярне навчання та підвищення кваліфікації медичного персоналу відповідно до найновіших вимог та стандартів.',
      badges: ['Щорічне навчання', 'Професійний розвиток']
    }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ISO / MLC 2006
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Центр впровадив вимоги Конвенції про працю в морському судноплавстві 2006 року в нашій системі управління якістю. 
            Ми проводимо щорічні внутрішні аудити та навчання персоналу.
          </p>
        </div>

        {/* ISO Cards in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {isoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 min-h-80 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Top border that appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="w-18 h-18 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-5 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-lg">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center">
                {card.badges.map((badge, badgeIndex) => (
                  <span
                    key={badgeIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
              Наші стандарти якості
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Медичний центр безпеки судноплавства дотримується найвищих міжнародних стандартів якості в наданні медичних послуг. 
              Наша система управління якістю регулярно проходить аудити та сертифікацію, що гарантує професійність та надійність наших послуг.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
