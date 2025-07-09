'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-4xl font-bold mb-4">DeeDeep</div>
      <div className="text-xl text-gray-500">Разработка сайта в процессе</div>
      <div className="mt-8 text-base text-gray-400">Скоро здесь появится современный сайт для управления долгами с голосовым распознаванием.</div>
    </main>
  );
}

