import { motion } from 'framer-motion';

export default function AboutPage() {
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
              <span className="apple-gradient-text">О нас</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto apple-body">
              Мы создаем будущее управления финансами с помощью искусственного интеллекта
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 apple-heading">
                <span className="apple-gradient-text">Наша миссия</span>
              </h2>
              <p className="text-lg text-white/80 mb-6 apple-body">
                Мы верим, что управление долгами должно быть простым, интуитивным и доступным каждому. DeeDeep объединяет передовые технологии ИИ с элегантным дизайном, чтобы создать лучший опыт управления личными финансами.
              </p>
              <p className="text-lg text-white/80 apple-body">
                Наша команда состоит из экспертов в области машинного обучения, дизайна и финансов, которые работают над тем, чтобы сделать управление долгами максимально удобным.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="apple-card p-8"
            >
              <div className="text-center">
                <div className="w-24 h-24 gradient-apple-blue rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Ценности</h3>
                <ul className="text-white/80 space-y-3 text-left">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Инновации в каждой детали
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Безопасность превыше всего
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Простота использования
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Забота о пользователях
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="apple-gradient-text">Команда</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto apple-body">
              Знакомьтесь с людьми, которые создают будущее финансовых технологий
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей Петров",
                role: "CEO & Основатель",
                bio: "Эксперт в области ИИ и финансовых технологий с 10-летним опытом",
                avatar: "👨‍💼"
              },
              {
                name: "Мария Сидорова",
                role: "CTO",
                bio: "Специалист по машинному обучению и архитектуре приложений",
                avatar: "👩‍💻"
              },
              {
                name: "Дмитрий Козлов",
                role: "Head of Design",
                bio: "Создаёт пользовательский опыт уровня Apple и Google",
                avatar: "🎨"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="apple-card p-8 text-center hover-lift"
              >
                <div className="w-20 h-20 gradient-apple-purple rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-white/80 apple-body">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="apple-card p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 apple-heading">
              <span className="apple-gradient-text">Наши достижения</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "10K+", label: "Пользователей" },
                { number: "4.8★", label: "Рейтинг в App Store" },
                { number: "50K+", label: "Долгов отслежено" },
                { number: "99.9%", label: "Время работы" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold apple-gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              <span className="apple-gradient-text">Присоединяйтесь</span>
              <br />
              <span className="text-white">к нам</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 apple-body">
              Станьте частью революции в управлении личными финансами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-button px-8 py-4 text-lg rounded-full"
              >
                Скачать приложение
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-glass px-8 py-4 text-lg rounded-full hover-lift"
              >
                Связаться с нами
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 