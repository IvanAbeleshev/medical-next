'use client';

import { useState, useTransition } from 'react';
import { sendToTelegram } from '../app/actions/telegram';

export default function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Поле обов\'язкове';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Поле обов\'язкове';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Поле обов\'язкове';
    }

    if (!formData.consent) {
      newErrors.consent = 'Необхідно дати згоду на обробку даних';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      setIsSubmitting(true);
      
      try {
        const result = await sendToTelegram({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          comments: formData.comments || undefined,
        });

        if (result.success) {
          setIsSuccess(true);
          setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            comments: '',
            consent: false
          });
        } else {
          console.error('Error sending message:', result.error);
          // Можно добавить обработку ошибки для пользователя
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-3xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Заявка відправлена!
              </h3>
              <p className="text-gray-600 mb-8">
                Дякуємо за вашу заявку. Ми зв&apos;яжемося з вами найближчим часом для підтвердження запису.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Повернутися до контактів
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Контакти
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
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

          {/* Appointment Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Запис на прийом</h3>
                <p className="text-gray-600 text-sm">Заповніть форму і ми зв&apos;яжемося з вами</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Ім&apos;я *
                  </label>                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Прізвище *
                  </label>                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-black ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+38(0XX) XXX-XX-XX"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder:text-gray-500 text-black ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Коментарій
                </label>                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Додаткова інформація або особливі побажання..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none placeholder:text-gray-500 text-black"
                />
              </div>

              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    Я даю згоду на обробку персональних даних *
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
                )}
              </div>              <button
                type="submit"
                disabled={isSubmitting || isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {(isSubmitting || isPending) ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Відправляємо...</span>
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13"/>
                      <polygon points="22,2 15,22 11,13 2,9"/>
                    </svg>
                    <span>Відправити заявку</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
