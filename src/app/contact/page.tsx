'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <span className="apple-gradient-text">Свяжитесь</span>
              <br />
              <span className="text-white">с нами</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto apple-body">
              У вас есть вопросы или предложения? Мы всегда рады общению
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 apple-heading">
                <span className="apple-gradient-text">Напишите нам</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Расскажите нам о вашем вопросе или предложении..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="apple-button px-8 py-4 text-lg rounded-lg w-full"
                >
                  Отправить сообщение
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="apple-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Способы связи</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-apple-blue rounded-full flex items-center justify-center text-xl mr-4">
                      📧
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-white/80">hello@deedeep.app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-apple-purple rounded-full flex items-center justify-center text-xl mr-4">
                      📱
                    </div>
                    <div>
                      <p className="font-semibold text-white">Телефон</p>
                      <p className="text-white/80">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-apple-pink rounded-full flex items-center justify-center text-xl mr-4">
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-white">Адрес</p>
                      <p className="text-white/80">Москва, Россия</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="apple-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Время работы</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
              <span className="apple-gradient-text">Частые вопросы</span>
            </h2>
            <p className="text-xl text-white/80 apple-body">
              Ответы на самые популярные вопросы о DeeDeep
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Как работает голосовое распознавание?",
                answer: "DeeDeep использует передовые технологии ИИ для распознавания речи. Просто скажите 'Я должен 5000 рублей Ивану' и приложение автоматически создаст структурированную запись."
              },
              {
                question: "Безопасны ли мои данные?",
                answer: "Да, все ваши данные шифруются и хранятся локально на вашем устройстве. Мы используем банковский уровень безопасности для защиты вашей информации."
              },
              {
                question: "Приложение работает офлайн?",
                answer: "Да, основные функции DeeDeep работают без интернета. Голосовое распознавание и анализ данных происходят локально на вашем устройстве."
              },
              {
                question: "Есть ли платная версия?",
                answer: "DeeDeep полностью бесплатен для всех пользователей. Мы верим, что управление долгами должно быть доступно каждому."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="apple-card p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-white/80 apple-body">{faq.answer}</p>
              </motion.div>
            ))}
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
              <span className="apple-gradient-text">Готовы начать?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 apple-body">
              Скачайте DeeDeep и начните управлять долгами умно уже сегодня
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