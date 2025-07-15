import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-premium"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-premium floating-delay-1"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl floating-premium floating-delay-2"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-3xl font-bold premium-gradient-text slide-up">
              DeeDeep
            </a>
            
            <div className="hidden md:flex space-x-8 slide-up">
              <a href="/#features" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Возможности</a>
              <a href="/#testimonials" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Отзывы</a>
              <a href="/#download" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Скачать</a>
              <a href="/contact" className="text-white hover:text-white transition-all duration-300 hover:scale-105">Контакты</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-white/60">
            <a href="mailto:support@deedeep.ru" className="hover:text-white transition-colors">Поддержка</a>
            <a href="mailto:feedback@deedeep.ru" className="hover:text-white transition-colors">Отзывы</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 slide-up">
            <h1 className="text-6xl md:text-7xl font-black mb-8 premium-heading">
              <span className="premium-gradient-text">Свяжитесь</span>
              <br />
              <span className="text-white">с нами</span>
            </h1>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto premium-body">
              Мы всегда готовы помочь и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12 slide-up">
              <div>
                <h2 className="text-3xl font-bold mb-8 premium-gradient-text">Контактные данные</h2>
                <div className="space-y-6">
                  <div className="premium-card p-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">📧</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Поддержка пользователей</h3>
                        <a href="mailto:support@deedeep.ru" className="text-blue-300 hover:text-blue-200 transition-colors">
                          support@deedeep.ru
                        </a>
                        <p className="text-white/60 mt-2">Техническая поддержка и помощь с приложением</p>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card p-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">💬</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Обратная связь</h3>
                        <a href="mailto:feedback@deedeep.ru" className="text-blue-300 hover:text-blue-200 transition-colors">
                          feedback@deedeep.ru
                        </a>
                        <p className="text-white/60 mt-2">Предложения по улучшению и отзывы</p>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card p-8">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">⚙️</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Разработка</h3>
                        <a href="mailto:dev@deedeep.ru" className="text-blue-300 hover:text-blue-200 transition-colors">
                          dev@deedeep.ru
                        </a>
                        <p className="text-white/60 mt-2">Предложения по улучшению разработки</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 premium-gradient-text">Часто задаваемые вопросы</h2>
                <div className="space-y-4">
                  <div className="premium-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Когда выйдет приложение?</h3>
                    <p className="text-white/80">Планируемый запуск - август 2025 года для iOS.</p>
                  </div>
                  <div className="premium-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Будет ли Android версия?</h3>
                    <p className="text-white/80">Пока мы фокусируемся на iOS. Android версия в планах на будущее.</p>
                  </div>
                  <div className="premium-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Приложение действительно бесплатное?</h3>
                    <p className="text-white/80">Да, приложение полностью бесплатное без скрытых платежей.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-up">
              <div className="premium-card p-12">
                <h2 className="text-3xl font-bold mb-8 premium-gradient-text">Напишите нам</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white/80 mb-2">Тема</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                      required
                    >
                      <option value="">Выберите тему</option>
                      <option value="support">Техническая поддержка</option>
                      <option value="feedback">Обратная связь</option>
                      <option value="development">Предложения по разработке</option>
                      <option value="partnership">Партнерство</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2">Сообщение</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Опишите ваш вопрос или предложение..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full premium-button-large px-8 py-4 text-xl rounded-2xl hover-lift-premium"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 premium-gradient-text">DeeDeep</h3>
              <p className="text-white/60 premium-body leading-relaxed">
                Первое приложение для голосового управления долгами на iOS. 
                Бесплатно и оффлайн.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Продукт</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="/#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="/#download" className="hover:text-white transition-colors">Скачать</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Компания</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="/#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Условия</a></li>
                <li><a href="/#careers" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Поддержка</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="mailto:support@deedeep.ru" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="mailto:feedback@deedeep.ru" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="mailto:dev@deedeep.ru" className="hover:text-white transition-colors">Разработка</a></li>
                <li><a href="/#status" className="hover:text-white transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
            <p>&copy; 2025 DeeDeep. Все права защищены. Сделано с ❤️ в России</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 