'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Голосовое распознавание",
      description: "Записывайте долги голосом и получайте автоматическую расшифровку",
      icon: "🎤",
      gradient: "gradient-apple-blue"
    },
    {
      title: "Умная аналитика",
      description: "Анализируйте свои долги с помощью ИИ и получайте персональные рекомендации",
      icon: "📊",
      gradient: "gradient-apple-purple"
    },
    {
      title: "Безопасность",
      description: "Ваши данные защищены банковским уровнем шифрования",
      icon: "🔒",
      gradient: "gradient-apple-pink"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold apple-gradient-text"
          >
            DeeDeep
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Возможности</a>
            <a href="#download" className="text-white/80 hover:text-white transition-colors">Скачать</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">О нас</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Контакты</a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="apple-button px-6 py-3 rounded-full"
          >
            Скачать бесплатно
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* NEW: Development Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-pulse">В разработке</div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Управляйте</span>
              <br />
              <span className="text-white">долгами умно</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto apple-body">
              DeeDeep — сервис для голосового управления долгами. Сейчас мы активно работаем над запуском, чтобы сделать ваш финансовый опыт проще и удобнее.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="apple-button px-8 py-4 text-lg rounded-full hover-lift">
              Скачать для iOS
            </button>
            <button className="apple-glass px-8 py-4 text-lg rounded-full hover-lift">
              Скачать для Android
            </button>
          </motion.div>

          {/* Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="relative"
          >
            <div className="apple-card p-8 max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 ${features[currentFeature].gradient} rounded-full flex items-center justify-center text-3xl mx-auto mb-6`}>
                    {features[currentFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {features[currentFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Возможности</span>
              <br />
              <span className="text-white">уровня Apple</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Мы создали приложение, которое сочетает в себе красоту дизайна Apple 
              и мощь современных технологий ИИ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Голосовое управление",
                description: "Просто скажите 'Я должен 5000 рублей Ивану' и приложение автоматически создаст запись",
                icon: "🎤",
                gradient: "gradient-apple-blue"
              },
              {
                title: "ИИ аналитика",
                description: "Получайте персональные рекомендации по управлению долгами на основе ваших данных",
                icon: "🤖",
                gradient: "gradient-apple-purple"
              },
              {
                title: "Банковская безопасность",
                description: "Ваши данные защищены тем же уровнем шифрования, что и в банковских приложениях",
                icon: "🔐",
                gradient: "gradient-apple-pink"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="apple-card p-8 hover-lift"
              >
                <div className={`w-16 h-16 ${feature.gradient} rounded-full flex items-center justify-center text-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80 apple-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: User Pains Block */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Какие проблемы мы решаем?</h2>
          <ul className="text-white/90 space-y-2 text-left mx-auto max-w-lg">
            <li>• Сложность и ошибки при ручном учёте долгов</li>
            <li>• Неудобство голосового ввода в других приложениях <span className="text-xs text-gray-400">(42% жалоб)</span></li>
            <li>• Потеря контроля над финансами и забытые долги</li>
            <li>• Нет единого места для долгов, напоминаний и аналитики</li>
          </ul>
        </div>
      </section>

      {/* NEW: Customer Journey Mapping */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/10 rounded-xl shadow p-8">
          <h2 className="text-xl font-semibold mb-3 text-white">Путь пользователя (CJM)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-700 rounded-lg">
              <thead>
                <tr className="bg-gray-900/60">
                  <th className="px-3 py-2 font-medium text-white">Этап</th>
                  <th className="px-3 py-2 font-medium text-white">Проблема</th>
                  <th className="px-3 py-2 font-medium text-white">Данные</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2">Ввод долга</td>
                  <td className="px-3 py-2">5+ шагов, 67% ошибок на шаге 3</td>
                  <td className="px-3 py-2">Юзабилити-тесты N=15</td>
                </tr>
                <tr className="bg-gray-900/30">
                  <td className="px-3 py-2">Голосовой ввод</td>
                  <td className="px-3 py-2">42% жалоб на распознавание имён</td>
                  <td className="px-3 py-2">App Store отзывы</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Напоминания</td>
                  <td className="px-3 py-2">31% забывают о сроках возврата</td>
                  <td className="px-3 py-2">Опросы пользователей</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEW: Privacy Policy Link */}
      <section className="relative z-10 px-6 py-6 text-center">
        <a href="/privacy-policy" className="inline-block underline text-blue-300 hover:text-blue-500 transition">Политика конфиденциальности</a>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="apple-card p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Скачайте</span>
              <br />
              <span className="text-white">бесплатно</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 apple-body">
              Присоединяйтесь к тысячам пользователей, которые уже управляют своими долгами умно
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-button px-8 py-4 text-lg rounded-full"
              >
                App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-glass px-8 py-4 text-lg rounded-full hover-lift"
              >
                Google Play
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold apple-gradient-text mb-4">DeeDeep</h3>
              <p className="text-white/60 apple-body">
                Умное управление долгами с помощью ИИ
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Продукт</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Компания</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пресс-кит</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Поддержка</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сообщество</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 DeeDeep. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

