import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 premium-gradient-text">DeeDeep</h3>
            <p className="text-white/60 premium-body leading-relaxed">
              Первое в мире приложение с ИИ для голосового управления долгами. 
              Делаем финансы простыми и умными.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Продукт</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Скачать</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Конфиденциальность</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Компания</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Условия</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Карьера</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white text-lg">Поддержка</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href="#help" className="hover:text-white transition-colors">Помощь</a></li>
              <li><a href="mailto:support@deedeep.ru" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#chat" className="hover:text-white transition-colors">Чат</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">Статус</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; 2024 DeeDeep. Все права защищены. Сделано с ❤️ в России</p>
        </div>
      </div>
    </footer>
  );
} 