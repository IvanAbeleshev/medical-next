'use client';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Wave-like decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Контакти
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="bg-blue-50 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.92 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                  <path d="M8 12h8M12 8v8"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Медичний центр безпеки судноплавства
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">Адреса:</span>
                  <p className="text-gray-600">Одеса, вул. Жуковського 33, офіс 608</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">Телефони:</span>
                  <p className="text-gray-600">+380487223309 / +380674837251</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">Email:</span>
                  <p className="text-gray-600">
                    <a href="mailto:mmsafety@ukr.net" className="text-blue-600 hover:underline">
                      mmsafety@ukr.net
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 mt-1 mr-4 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <div>
                  <span className="font-medium text-gray-800">Часи прийому:</span>
                  <p className="text-gray-600">
                    10:00 - 15:00<br/>
                    <small className="text-gray-500">(перерва 13:00-13:30)</small>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <p className="text-sm text-blue-700 italic">
                Centre licensed by Ministry of public health of Ukraine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
