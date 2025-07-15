import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: "Голосовое управление",
      description: "Записывайте долги голосом и получайте мгновенную расшифровку с помощью нейросети",
      icon: "🎤",
      gradient: "from-purple-500 to-pink-500",
      stats: "менее 100 мс"
    },
    {
      title: "Полностью оффлайн",
      description: "Приложение работает без интернета. Все данные хранятся локально на вашем устройстве",
      icon: "📱",
      gradient: "from-blue-500 to-cyan-500",
      stats: "100% приватность"
    },
    {
      title: "Абсолютно бесплатно",
      description: "Никаких подписок и скрытых платежей. Все функции доступны бесплатно навсегда",
      icon: "💎",
      gradient: "from-emerald-500 to-teal-500",
      stats: "0₽ всегда"
    }
  ];

  const testimonials = [
    {
      name: "Александр К.",
      role: "Предприниматель",
      text: "DeeDeep сэкономил мне 3 часа в неделю на управлении долгами. И это бесплатно!",
      rating: 5
    },
    {
      name: "Мария С.",
      role: "Финансовый консультант",
      text: "Лучшее приложение для управления долгами. Работает оффлайн и полностью бесплатно.",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      role: "Инвестор",
      text: "Умная аналитика помогла мне оптимизировать долговую нагрузку. И всё это бесплатно!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 via-purple-900 to-pink-900"></div>
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        {/* Premium floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-premium"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-premium floating-delay-1"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl floating-premium floating-delay-2"></div>
      </div>

      {/* Premium Navigation */}
      <nav className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold premium-gradient-text slide-up">
              DeeDeep
            </div>
            
            <div className="hidden md:flex space-x-8 slide-up">
              <a href="#features" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Возможности</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Отзывы</a>
              <a href="#download" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Скачать</a>
              <a href="/contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Контакты</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-white/60">
            <a href="mailto:support@deedeep.ru" className="hover:text-white transition-colors">Поддержка</a>
            <a href="mailto:feedback@deedeep.ru" className="hover:text-white transition-colors">Отзывы</a>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 mb-8 slide-up">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white/90 font-medium">В разработке для iOS</span>
          </div>

          <div className="mb-12 slide-up">
            <h1 className="text-7xl md:text-9xl font-black mb-8 premium-heading leading-tight">
              <span className="premium-gradient-text">Управляйте</span>
              <br />
              <span className="text-white">долгами умно</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto premium-body leading-relaxed">
              Первое приложение для голосового управления долгами на iOS. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> Бесплатно и оффлайн.</span>
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 slide-up">
            <button className="premium-button-large px-12 py-6 text-xl rounded-2xl hover-lift-premium">
              <span className="flex items-center space-x-3">
                <span>Скачать бесплатно</span>
                <span className="text-2xl">📱</span>
              </span>
            </button>
            <button className="premium-glass-button px-12 py-6 text-xl rounded-2xl hover-lift-premium">
              <span className="flex items-center space-x-3">
                <span>Узнать больше</span>
                <span className="text-2xl">ℹ️</span>
              </span>
            </button>
          </div>

          {/* Premium Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 slide-up">
            <div className="premium-stat-card">
              <div className="text-4xl font-bold premium-gradient-text">10K+</div>
              <div className="text-white/60">Ожидающих пользователей</div>
            </div>
            <div className="premium-stat-card">
              <div className="text-4xl font-bold premium-gradient-text">100%</div>
              <div className="text-white/60">Оффлайн работа</div>
            </div>
            <div className="premium-stat-card">
              <div className="text-4xl font-bold premium-gradient-text">0₽</div>
              <div className="text-white/60">Навсегда бесплатно</div>
            </div>
          </div>

          {/* Premium Feature Showcase */}
          <div className="max-w-5xl mx-auto slide-up">
            <div className="premium-card p-12 text-center">
              <div className="text-6xl mb-6">{features[currentFeature].icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{features[currentFeature].title}</h3>
              <p className="text-xl text-white/80 mb-6">{features[currentFeature].description}</p>
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 font-semibold">
                {features[currentFeature].stats}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-6xl md:text-7xl font-black mb-8 premium-heading">
              <span className="premium-gradient-text">Уникальные</span>
              <br />
              <span className="text-white">возможности</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto premium-body">
              Бесплатное приложение с премиум качеством
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="premium-feature-card p-10 hover-lift-premium slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-6xl mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/80 premium-body mb-6">{feature.description}</p>
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 font-semibold">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-6xl md:text-7xl font-black mb-8 premium-heading">
              <span className="premium-gradient-text">Отзывы</span>
              <br />
              <span className="text-white">бета-тестеров</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="premium-testimonial-card p-8 slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 mb-6 premium-body italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Download Section */}
      <section id="download" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="premium-card p-16 max-w-5xl mx-auto slide-up">
            <h2 className="text-6xl md:text-7xl font-black mb-8 premium-heading">
              <span className="premium-gradient-text">Скачайте</span>
              <br />
              <span className="text-white">скоро</span>
            </h2>
            <p className="text-2xl text-white/80 mb-12 premium-body">
              Присоединяйтесь к 10,000+ пользователей, которые уже ждут запуска DeeDeep
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <button className="premium-button-large px-16 py-6 text-2xl rounded-2xl hover-lift-premium">
                <span className="flex items-center space-x-4">
                  <span>App Store</span>
                  <span className="text-3xl">🍎</span>
                </span>
              </button>
              <button className="premium-glass-button px-16 py-6 text-2xl rounded-2xl hover-lift-premium">
                <span className="flex items-center space-x-4">
                  <span>Уведомить о запуске</span>
                  <span className="text-3xl">📧</span>
                </span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold premium-gradient-text">iOS 15+</div>
                <div className="text-white/60">Поддерживаемые версии</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold premium-gradient-text">10K+</div>
                <div className="text-white/60">Ожидающих пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold premium-gradient-text">Август 2025</div>
                <div className="text-white/60">Планируемый запуск</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
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
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Скачать</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Компания</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Условия</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Поддержка</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="mailto:support@deedeep.ru" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="mailto:feedback@deedeep.ru" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="mailto:dev@deedeep.ru" className="hover:text-white transition-colors">Разработка</a></li>
                <li><a href="#status" className="hover:text-white transition-colors">Статус</a></li>
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