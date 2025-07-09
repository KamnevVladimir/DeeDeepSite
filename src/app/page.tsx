'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="w-full max-w-2xl text-center mt-24 mb-12">
        <div className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">DeeDeep</div>
        <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 animate-pulse">В разработке</div>
        <div className="text-xl md:text-2xl text-gray-600 mb-6">Голосовое управление долгами — скоро!</div>
        <div className="text-base text-gray-400 mb-2">Мы создаём сервис, который поможет вам легко и безопасно вести учёт долгов с помощью голоса.</div>
      </div>

      {/* User Pains Block */}
      <section className="w-full max-w-2xl bg-white/80 rounded-xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Какие проблемы мы решаем?</h2>
        <ul className="text-gray-700 space-y-2 text-left mx-auto max-w-lg">
          <li>• Сложность и ошибки при ручном учёте долгов</li>
          <li>• Неудобство голосового ввода в других приложениях <span className="text-xs text-gray-400">(42% жалоб)</span></li>
          <li>• Потеря контроля над финансами и забытые долги</li>
          <li>• Нет единого места для долгов, напоминаний и аналитики</li>
        </ul>
      </section>

      {/* Customer Journey Mapping */}
      <section className="w-full max-w-2xl bg-white/70 rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Путь пользователя (CJM)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-3 py-2 font-medium">Этап</th>
                <th className="px-3 py-2 font-medium">Проблема</th>
                <th className="px-3 py-2 font-medium">Данные</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2">Ввод долга</td>
                <td className="px-3 py-2">5+ шагов, 67% ошибок на шаге 3</td>
                <td className="px-3 py-2">Юзабилити-тесты N=15</td>
              </tr>
              <tr className="bg-gray-50">
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
      </section>

      {/* Why Important Block */}
      <section className="w-full max-w-2xl bg-white/60 rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Почему это важно?</h2>
        <ul className="text-gray-700 space-y-2 text-left mx-auto max-w-lg">
          <li>• Экономим ваше время и нервы</li>
          <li>• Всё будет просто, прозрачно и безопасно</li>
          <li>• Мы слушаем пользователей и строим продукт на реальных болях</li>
        </ul>
      </section>

      {/* Privacy Policy Block */}
      <section className="w-full max-w-2xl text-center mb-16">
        <Link href="/privacy-policy" className="inline-block underline text-blue-600 hover:text-blue-800 transition">Политика конфиденциальности</Link>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-2xl text-center pb-8 text-gray-400 text-sm">
        <div className="mb-2">DeeDeep © 2025</div>
        <div>Контакты: <a href="mailto:info@deedeep.app" className="underline">info@deedeep.app</a></div>
        <div className="mt-2">Статус: Разработка, релиз — скоро</div>
      </footer>
    </main>
  );
}

