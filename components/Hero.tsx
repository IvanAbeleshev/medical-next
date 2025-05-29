'use client';

import { useState, useTransition } from 'react';
import { sendToTelegram } from '../app/actions/telegram';

export default function Hero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white overflow-hidden">
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 via-transparent to-cyan-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-600/10 to-indigo-600/20"></div>
      
      {/* Water Drop Effect */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              {/* Logo */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Shipping Safety Medical Centre Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl object-cover border-4 border-white/30"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 drop-shadow-lg">
                <span className="block mb-2">Shipping Safety</span>
                <span className="block">Medical Centre</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 opacity-90">
                Ласкаво просимо в Медичний центр безпеки судноплавства
              </h2>
              
              <p className="text-lg sm:text-xl mb-8 opacity-80 max-w-2xl lg:max-w-none">
                Професійний медичний огляд моряків з 2008 року
              </p>
              
              <a
                href="#contacts"
                onClick={handleContactClick}
                className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                Дізнатися більше
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="lg:ml-8">
            {isSuccess ? (
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
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
                    Подати нову заявку
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
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
                      </label>
                      <input
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
                      </label>
                      <input
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
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
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

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                      Коментарій
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={3}
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
                  </div>

                  <button
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
