'use client';

import { motion } from 'framer-motion';

export default function FeaturesPage() {
  const features = [
    {
      title: "Голосовое распознавание",
      description: "Записывайте долги голосом и получайте автоматическую расшифровку с помощью ИИ",
      icon: "🎤",
      gradient: "gradient-apple-blue",
      details: [
        "Высокая точность распознавания русского языка",
        "Работает офлайн без интернета",
        "Автоматическое извлечение суммы и имени",
        "Поддержка сложных фраз и конструкций"
      ]
    },
    {
      title: "Умная аналитика",
      description: "Получайте глубокую аналитику ваших долгов с персональными рекомендациями",
      icon: "📊",
      gradient: "gradient-apple-purple",
      details: [
        "Визуализация долгов в красивых графиках",
        "Прогнозирование финансового состояния",
        "Персональные рекомендации по управлению",
        "Анализ трендов и паттернов"
      ]
    },
    {
      title: "Банковская безопасность",
      description: "Ваши данные защищены тем же уровнем шифрования, что и в банковских приложениях",
      icon: "🔐",
      gradient: "gradient-apple-pink",
      details: [
        "Локальное хранение всех данных",
        "Шифрование AES-256",
        "Биометрическая защита",
        "Никаких данных на серверах"
      ]
    },
    {
      title: "Интуитивный интерфейс",
      description: "Современный дизайн уровня Apple для максимального удобства использования",
      icon: "✨",
      gradient: "gradient-apple-orange",
      details: [
        "Дизайн в стиле iOS и Material Design",
        "Плавные анимации и переходы",
        "Адаптивный интерфейс для всех устройств",
        "Поддержка темной и светлой темы"
      ]
    },
    {
      title: "Быстрая производительность",
      description: "Оптимизированное приложение работает молниеносно и не потребляет много ресурсов",
      icon: "⚡",
      gradient: "gradient-apple-blue",
      details: [
        "Мгновенная загрузка приложения",
        "Низкое потребление памяти",
        "Оптимизированные алгоритмы ИИ",
        "Плавная работа на всех устройствах"
      ]
    },
    {
      title: "Офлайн функциональность",
      description: "Все основные функции работают без интернета для максимальной надежности",
      icon: "📱",
      gradient: "gradient-apple-purple",
      details: [
        "Голосовое распознавание офлайн",
        "Локальная база данных",
        "Синхронизация при подключении",
        "Работа в любых условиях"
      ]
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
              <span className="apple-gradient-text">Возможности</span>
              <br />
              <span className="text-white">DeeDeep</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto apple-body">
              Откройте для себя все возможности приложения, которое изменит ваше отношение к управлению долгами
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="apple-card p-8 hover-lift"
              >
                <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center text-2xl mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 mb-6 apple-body">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-white/70 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
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
              <span className="apple-gradient-text">Технологии</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Мы используем передовые технологии для создания лучшего опыта управления долгами
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Искусственный интеллект",
                description: "Нейронные сети для распознавания речи и анализа данных",
                icon: "🤖"
              },
              {
                name: "Машинное обучение",
                description: "Алгоритмы для персональных рекомендаций",
                icon: "🧠"
              },
              {
                name: "Криптография",
                description: "Банковский уровень шифрования данных",
                icon: "🔒"
              },
              {
                name: "Swift & React Native",
                description: "Нативные технологии для максимальной производительности",
                icon: "📱"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 gradient-apple-blue rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{tech.name}</h3>
                <p className="text-white/70 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              <span className="apple-gradient-text">Почему DeeDeep?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Сравните с другими приложениями для управления долгами
            </p>
          </motion.div>

          <div className="apple-card p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Другие приложения</h3>
                <ul className="space-y-4 text-white/60">
                  <li>Ручной ввод данных</li>
                  <li>Базовые функции</li>
                  <li>Облачное хранение</li>
                  <li>Простой интерфейс</li>
                  <li>Ограниченная аналитика</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 gradient-apple-blue rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  VS
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 apple-gradient-text">DeeDeep</h3>
                <ul className="space-y-4 text-white/80">
                  <li>Голосовое управление</li>
                  <li>ИИ аналитика</li>
                  <li>Локальное хранение</li>
                  <li>Apple-уровень дизайна</li>
                  <li>Персональные рекомендации</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <span className="apple-gradient-text">Попробуйте</span>
              <br />
              <span className="text-white">сегодня</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 apple-body">
              Скачайте DeeDeep и испытайте все возможности на себе
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
          </motion.div>
        </div>
      </section>
    </div>
  );
} 