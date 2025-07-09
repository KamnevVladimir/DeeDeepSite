'use client';

import { motion } from 'framer-motion';

export default function DownloadPage() {
  const platforms = [
    {
      name: "iOS",
      icon: "🍎",
      description: "Для iPhone и iPad",
      features: [
        "Оптимизировано для iOS 15+",
        "Поддержка Face ID и Touch ID",
        "Интеграция с Apple Health",
        "Виджеты для быстрого доступа"
      ],
      rating: "4.8★",
      reviews: "1,247 отзывов",
      size: "45.2 MB",
      version: "1.0.0"
    },
    {
      name: "Android",
      icon: "🤖",
      description: "Для всех Android устройств",
      features: [
        "Поддержка Android 8.0+",
        "Биометрическая аутентификация",
        "Интеграция с Google Fit",
        "Адаптивный дизайн"
      ],
      rating: "4.7★",
      reviews: "892 отзыва",
      size: "38.7 MB",
      version: "1.0.0"
    }
  ];

  const testimonials = [
    {
      name: "Александр П.",
      text: "Лучшее приложение для управления долгами! Голосовое распознавание работает идеально.",
      rating: 5,
      platform: "iOS"
    },
    {
      name: "Мария С.",
      text: "Очень удобный интерфейс и полезная аналитика. Рекомендую всем!",
      rating: 5,
      platform: "Android"
    },
    {
      name: "Дмитрий К.",
      text: "Наконец-то нашел приложение, которое действительно помогает управлять долгами.",
      rating: 5,
      platform: "iOS"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Скачайте</span>
              <br />
              <span className="text-white">DeeDeep</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto apple-body">
              Начните управлять долгами умно уже сегодня. Бесплатно для всех пользователей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Selection */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Выберите платформу</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              DeeDeep доступен для всех популярных платформ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="apple-card p-8 hover-lift"
              >
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-3xl font-bold mb-2 text-white">{platform.name}</h3>
                  <p className="text-white/80">{platform.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-white/60">Рейтинг</p>
                      <p className="font-bold text-white">{platform.rating}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Размер</p>
                      <p className="font-bold text-white">{platform.size}</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="apple-button px-8 py-4 text-lg rounded-lg w-full"
                >
                  Скачать для {platform.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Отзывы пользователей</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Узнайте, что говорят о DeeDeep наши пользователи
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="apple-card p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-white/80 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.platform}</p>
                  </div>
                  <div className="w-12 h-12 gradient-apple-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Что вы получите</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Все функции DeeDeep доступны бесплатно
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Голосовое управление",
                description: "Записывайте долги голосом",
                icon: "🎤"
              },
              {
                title: "ИИ аналитика",
                description: "Умные рекомендации",
                icon: "📊"
              },
              {
                title: "Безопасность",
                description: "Банковский уровень защиты",
                icon: "🔒"
              },
              {
                title: "Офлайн работа",
                description: "Без интернета",
                icon: "📱"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 gradient-apple-blue rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="apple-card p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Готовы начать?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 apple-body">
              Скачайте DeeDeep прямо сейчас и начните управлять долгами умно
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-button px-8 py-4 text-lg rounded-full"
              >
                Скачать для iOS
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-glass px-8 py-4 text-lg rounded-full hover-lift"
              >
                Скачать для Android
              </motion.button>
            </div>
            
            <p className="text-white/60 mt-6 text-sm">
              Бесплатно • Без рекламы • Без подписок
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 