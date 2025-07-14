// Система интернационализации для DeeDeep

export type Language = 'ru' | 'en'
export type Locale = 'ru-RU' | 'en-US'

export interface Translation {
  [key: string]: string | Translation
}

export interface I18nConfig {
  defaultLanguage: Language
  supportedLanguages: Language[]
  fallbackLanguage: Language
  loadPath: string
  debug: boolean
}

export interface I18nInstance {
  t: (key: string, params?: Record<string, any>) => string
  changeLanguage: (language: Language) => Promise<void>
  getLanguage: () => Language
  getLocale: () => Locale
  isRTL: () => boolean
}

// Переводы
const translations: Record<Language, Translation> = {
  ru: {
    common: {
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успешно',
      cancel: 'Отмена',
      save: 'Сохранить',
      delete: 'Удалить',
      edit: 'Редактировать',
      close: 'Закрыть',
      back: 'Назад',
      next: 'Далее',
      previous: 'Предыдущий',
      submit: 'Отправить',
      reset: 'Сбросить',
      search: 'Поиск',
      filter: 'Фильтр',
      sort: 'Сортировка',
      view: 'Просмотр',
      download: 'Скачать',
      upload: 'Загрузить',
      share: 'Поделиться',
      copy: 'Копировать',
      paste: 'Вставить',
      cut: 'Вырезать',
      undo: 'Отменить',
      redo: 'Повторить',
    },
    navigation: {
      home: 'Главная',
      features: 'Возможности',
      about: 'О нас',
      contact: 'Контакты',
      download: 'Скачать',
      pricing: 'Цены',
      support: 'Поддержка',
      blog: 'Блог',
      login: 'Войти',
      register: 'Регистрация',
      profile: 'Профиль',
      settings: 'Настройки',
      logout: 'Выйти',
    },
    hero: {
      title: 'Управление долгами с голосовым распознаванием',
      subtitle: 'Просто, быстро и безопасно. Скачайте DeeDeep для iOS.',
      cta: 'Скачать бесплатно',
      secondaryCta: 'Узнать больше',
    },
    features: {
      title: 'Возможности',
      subtitle: 'Все что нужно для управления долгами',
      voiceRecognition: {
        title: 'Голосовое распознавание',
        description: 'Добавляйте долги голосом - быстро и удобно',
      },
      security: {
        title: 'Безопасность',
        description: 'Ваши данные защищены современными технологиями',
      },
      analytics: {
        title: 'Аналитика',
        description: 'Подробная статистика и отчеты',
      },
      sync: {
        title: 'Синхронизация',
        description: 'Данные синхронизируются между устройствами',
      },
    },
    footer: {
      product: 'Продукт',
      company: 'Компания',
      support: 'Поддержка',
      legal: 'Правовая информация',
      contacts: 'Контакты',
      social: 'Социальные сети',
      newsletter: 'Новости',
      copyright: '© 2024 DeeDeep. Все права защищены.',
      madeWith: 'Сделано с ❤️ в России',
      version: 'Версия',
    },
    forms: {
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      subject: 'Тема',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      agreeToTerms: 'Я согласен с условиями использования',
      subscribe: 'Подписаться на новости',
      send: 'Отправить',
      required: 'Обязательное поле',
      invalidEmail: 'Неверный формат email',
      invalidPhone: 'Неверный формат телефона',
      passwordTooShort: 'Пароль должен содержать минимум 8 символов',
      passwordsDoNotMatch: 'Пароли не совпадают',
    },
    errors: {
      general: 'Произошла ошибка',
      network: 'Ошибка сети',
      notFound: 'Страница не найдена',
      unauthorized: 'Не авторизован',
      forbidden: 'Доступ запрещен',
      serverError: 'Ошибка сервера',
      validation: 'Ошибка валидации',
      unknown: 'Неизвестная ошибка',
    },
    success: {
      saved: 'Сохранено',
      deleted: 'Удалено',
      sent: 'Отправлено',
      downloaded: 'Скачано',
      uploaded: 'Загружено',
      copied: 'Скопировано',
    },
    time: {
      now: 'сейчас',
      seconds: 'секунд',
      minutes: 'минут',
      hours: 'часов',
      days: 'дней',
      weeks: 'недель',
      months: 'месяцев',
      years: 'лет',
      ago: 'назад',
      in: 'через',
    },
    numbers: {
      decimal: ',',
      thousands: ' ',
      currency: '₽',
    },
  },
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      reset: 'Reset',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      view: 'View',
      download: 'Download',
      upload: 'Upload',
      share: 'Share',
      copy: 'Copy',
      paste: 'Paste',
      cut: 'Cut',
      undo: 'Undo',
      redo: 'Redo',
    },
    navigation: {
      home: 'Home',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      download: 'Download',
      pricing: 'Pricing',
      support: 'Support',
      blog: 'Blog',
      login: 'Login',
      register: 'Register',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Logout',
    },
    hero: {
      title: 'Debt Management with Voice Recognition',
      subtitle: 'Simple, fast and secure. Download DeeDeep for iOS.',
      cta: 'Download Free',
      secondaryCta: 'Learn More',
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need for debt management',
      voiceRecognition: {
        title: 'Voice Recognition',
        description: 'Add debts by voice - fast and convenient',
      },
      security: {
        title: 'Security',
        description: 'Your data is protected by modern technologies',
      },
      analytics: {
        title: 'Analytics',
        description: 'Detailed statistics and reports',
      },
      sync: {
        title: 'Sync',
        description: 'Data syncs between devices',
      },
    },
    footer: {
      product: 'Product',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
      contacts: 'Contacts',
      social: 'Social',
      newsletter: 'Newsletter',
      copyright: '© 2024 DeeDeep. All rights reserved.',
      madeWith: 'Made with ❤️ in Russia',
      version: 'Version',
    },
    forms: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      subject: 'Subject',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      agreeToTerms: 'I agree to the terms of service',
      subscribe: 'Subscribe to newsletter',
      send: 'Send',
      required: 'Required field',
      invalidEmail: 'Invalid email format',
      invalidPhone: 'Invalid phone format',
      passwordTooShort: 'Password must be at least 8 characters',
      passwordsDoNotMatch: 'Passwords do not match',
    },
    errors: {
      general: 'An error occurred',
      network: 'Network error',
      notFound: 'Page not found',
      unauthorized: 'Unauthorized',
      forbidden: 'Forbidden',
      serverError: 'Server error',
      validation: 'Validation error',
      unknown: 'Unknown error',
    },
    success: {
      saved: 'Saved',
      deleted: 'Deleted',
      sent: 'Sent',
      downloaded: 'Downloaded',
      uploaded: 'Uploaded',
      copied: 'Copied',
    },
    time: {
      now: 'now',
      seconds: 'seconds',
      minutes: 'minutes',
      hours: 'hours',
      days: 'days',
      weeks: 'weeks',
      months: 'months',
      years: 'years',
      ago: 'ago',
      in: 'in',
    },
    numbers: {
      decimal: '.',
      thousands: ',',
      currency: '$',
    },
  },
}

class I18n implements I18nInstance {
  private config: I18nConfig
  private currentLanguage: Language
  private currentLocale: Locale

  constructor(config: Partial<I18nConfig> = {}) {
    this.config = {
      defaultLanguage: 'ru',
      supportedLanguages: ['ru', 'en'],
      fallbackLanguage: 'ru',
      loadPath: '/locales',
      debug: process.env.NODE_ENV === 'development',
      ...config,
    }

    this.currentLanguage = this.config.defaultLanguage
    this.currentLocale = this.getLocaleFromLanguage(this.currentLanguage)
  }

  private getLocaleFromLanguage(language: Language): Locale {
    return language === 'ru' ? 'ru-RU' : 'en-US'
  }

  private getNestedValue(obj: any, path: string): string | undefined {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined
    }, obj)
  }

  private interpolate(text: string, params?: Record<string, any>): string {
    if (!params) return text

    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key] !== undefined ? String(params[key]) : match
    })
  }

  public t(key: string, params?: Record<string, any>): string {
    const translation = this.getNestedValue(translations[this.currentLanguage], key)
    
    if (!translation) {
      // Fallback to fallback language
      const fallbackTranslation = this.getNestedValue(translations[this.config.fallbackLanguage], key)
      
      if (!fallbackTranslation) {
        if (this.config.debug) {
          console.warn(`Translation key not found: ${key}`)
        }
        return key
      }
      
      return this.interpolate(fallbackTranslation as string, params)
    }

    return this.interpolate(translation as string, params)
  }

  public async changeLanguage(language: Language): Promise<void> {
    if (!this.config.supportedLanguages.includes(language)) {
      throw new Error(`Language ${language} is not supported`)
    }

    this.currentLanguage = language
    this.currentLocale = this.getLocaleFromLanguage(language)

    // Update document language
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.setAttribute('data-locale', this.currentLocale)
    }

    // Trigger language change event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language, locale: this.currentLocale }
      }))
    }
  }

  public getLanguage(): Language {
    return this.currentLanguage
  }

  public getLocale(): Locale {
    return this.currentLocale
  }

  public isRTL(): boolean {
    return false // Russian and English are LTR languages
  }

  public getSupportedLanguages(): Language[] {
    return [...this.config.supportedLanguages]
  }

  public getLanguageName(language: Language): string {
    const names: Record<Language, string> = {
      ru: 'Русский',
      en: 'English',
    }
    return names[language]
  }

  public formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
    return new Intl.NumberFormat(this.currentLocale, options).format(value)
  }

  public formatCurrency(value: number, currency: string = 'RUB'): string {
    return new Intl.NumberFormat(this.currentLocale, {
      style: 'currency',
      currency,
    }).format(value)
  }

  public formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    return new Intl.DateTimeFormat(this.currentLocale, options).format(date)
  }

  public formatRelativeTime(date: Date): string {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (seconds < 60) {
      return this.t('time.now')
    } else if (minutes < 60) {
      return `${minutes} ${this.t('time.minutes')} ${this.t('time.ago')}`
    } else if (hours < 24) {
      return `${hours} ${this.t('time.hours')} ${this.t('time.ago')}`
    } else if (days < 7) {
      return `${days} ${this.t('time.days')} ${this.t('time.ago')}`
    } else {
      return this.formatDate(date)
    }
  }
}

// Создаем глобальный экземпляр i18n
export const i18n = new I18n()

// Хук для использования i18n в React компонентах
export const useI18n = () => {
  return {
    t: i18n.t.bind(i18n),
    language: i18n.getLanguage(),
    locale: i18n.getLocale(),
    changeLanguage: i18n.changeLanguage.bind(i18n),
    isRTL: i18n.isRTL.bind(i18n),
    formatNumber: i18n.formatNumber.bind(i18n),
    formatCurrency: i18n.formatCurrency.bind(i18n),
    formatDate: i18n.formatDate.bind(i18n),
    formatRelativeTime: i18n.formatRelativeTime.bind(i18n),
  }
}

// Утилиты для работы с переводами
export const t = (key: string, params?: Record<string, any>): string => {
  return i18n.t(key, params)
}

export const changeLanguage = (language: Language): Promise<void> => {
  return i18n.changeLanguage(language)
}

export default i18n 