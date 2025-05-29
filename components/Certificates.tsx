import Image from 'next/image';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Система управління якістю ISO 9001:2015',
      image: '/images/certificates/ISO 9001_1.jpg',
      badge: 'ISO 9001:2015',
      description: 'Міжнародний стандарт системи управління якістю, що підтверджує наше прагнення до постійного поліпшення медичних послуг та задоволення потреб клієнтів.',
      details: [
        { label: 'Сферу дії', value: 'Медичні огляди моряків' },
        { label: 'Статус', value: 'Активний', isActive: true },
        { label: 'Періодичність аудиту', value: 'Щорічно' }
      ]
    },
    {
      id: 2,
      title: 'Атестат відповідності MLC 2006',
      image: '/images/certificates/ATTESTATION OF COMPIANCE.jpg',
      badge: 'MLC 2006',
      description: 'Документ, що підтверджує відповідність нашого центру вимогам Морської трудової конвенції 2006 року (Maritime Labour Convention).',
      details: [
        { label: 'Видано', value: 'Морська адміністрація України' },
        { label: 'Визнання', value: 'Міжнародне', isActive: true },
        { label: 'Відповідність', value: 'IMO стандарти' }
      ]
    },
    {
      id: 3,
      title: 'Ліцензія на медичну практику',
      image: '/images/certificates/a664f8b4-fa1e-4251-b173-5edfad71309b.JPG',
      badge: 'Ліцензія МОЗ',
      description: 'Ліцензія Міністерства охорони здоров\'я України на провадження медичної практики, включаючи проведення медичних оглядів моряків.',
      details: [
        { label: 'Орган ліцензування', value: 'МОЗ України' },
        { label: 'Тип діяльності', value: 'Медична практика' },
        { label: 'Термін дії', value: 'Безстроково', isActive: true }
      ]
    },
    {
      id: 4,
      title: 'Професійна сертифікація',
      image: '/images/certificates/e6059881-3aba-47cd-974b-2aa7bf08a8e7.jpg',
      badge: 'Професійна',
      description: 'Сертифікат професійної компетентності медичного персоналу у сфері проведення медичних оглядів осіб, які бажають працювати на суднах.',
      details: [
        { label: 'Сфера', value: 'Морська медицина' },
        { label: 'Кваліфікація', value: 'Підтверджена', isActive: true },
        { label: 'Оновлення', value: 'Регулярно' }
      ]
    }
  ];

  const achievements = [
    { number: '15+', text: 'Років сертифікованої роботи' },
    { number: '50+', text: 'Країн, що визнають наші сертифікати' },
    { number: '10K+', text: 'Виданих медичних сертифікатів' },
    { number: '100%', text: 'Відповідність міжнародним стандартам' }
  ];  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Geometric decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-2xl rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tl from-gray-200/30 to-blue-200/30 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-100/25 to-transparent rounded-lg rotate-12"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Сертифікати та акредитації
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Наш медичний центр має всі необхідні ліцензії та сертифікати для надання якісних медичних послуг морякам. 
            Всі документи визнані морськими адміністраціями країн світу та відповідають міжнародним стандартам.
          </p>
        </div>{/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-blue-600 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="space-y-3">
                  {cert.details.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">
                        {detail.label}:
                      </span>
                      <span className={`text-sm font-medium ${
                        detail.isActive ? 'text-green-600' : 'text-gray-700'
                      }`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
            Наші досягнення
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 leading-snug">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Протягом багатьох років роботи ми накопичили значний досвід та заслужили довіру тисяч моряків. 
              Наші сертифікати визнаються у всьому світі, що дозволяє морякам працювати на суднах різних прапорів.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
