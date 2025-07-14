// Система логирования и мониторинга для DeeDeep

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
}

export interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  context?: Record<string, any>
  error?: Error
  userId?: string
  sessionId?: string
  url?: string
  userAgent?: string
}

export interface LoggerConfig {
  level: LogLevel
  enableConsole: boolean
  enableRemote: boolean
  remoteEndpoint?: string
  maxEntries: number
  flushInterval: number
}

class Logger {
  private config: LoggerConfig
  private entries: LogEntry[] = []
  private flushTimer?: NodeJS.Timeout

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableRemote: false,
      maxEntries: 1000,
      flushInterval: 5000,
      ...config,
    }

    this.startFlushTimer()
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, any>,
    error?: Error
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level
  }

  private addEntry(entry: LogEntry): void {
    this.entries.push(entry)

    // Ограничиваем количество записей
    if (this.entries.length > this.config.maxEntries) {
      this.entries = this.entries.slice(-this.config.maxEntries)
    }

    // Логируем в консоль
    if (this.config.enableConsole) {
      this.logToConsole(entry)
    }
  }

  private logToConsole(entry: LogEntry): void {
    const { level, message, context, error } = entry
    const timestamp = new Date(entry.timestamp).toLocaleTimeString()

    const logMethod = {
      [LogLevel.DEBUG]: console.debug,
      [LogLevel.INFO]: console.info,
      [LogLevel.WARN]: console.warn,
      [LogLevel.ERROR]: console.error,
      [LogLevel.FATAL]: console.error,
    }[level]

    const levelLabel = {
      [LogLevel.DEBUG]: 'DEBUG',
      [LogLevel.INFO]: 'INFO',
      [LogLevel.WARN]: 'WARN',
      [LogLevel.ERROR]: 'ERROR',
      [LogLevel.FATAL]: 'FATAL',
    }[level]

    const prefix = `[${timestamp}] [${levelLabel}]`

    if (error) {
      logMethod(`${prefix} ${message}`, error, context)
    } else {
      logMethod(`${prefix} ${message}`, context)
    }
  }

  private async sendToRemote(entries: LogEntry[]): Promise<void> {
    if (!this.config.enableRemote || !this.config.remoteEndpoint) {
      return
    }

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ entries }),
      })
    } catch (error) {
      console.error('Failed to send logs to remote endpoint:', error)
    }
  }

  private startFlushTimer(): void {
    if (this.config.enableRemote) {
      this.flushTimer = setInterval(() => {
        this.flush()
      }, this.config.flushInterval)
    }
  }

  private async flush(): Promise<void> {
    if (this.entries.length === 0) return

    const entriesToSend = [...this.entries]
    this.entries = []

    await this.sendToRemote(entriesToSend)
  }

  // Публичные методы
  debug(message: string, context?: Record<string, any>): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      this.addEntry(this.createLogEntry(LogLevel.DEBUG, message, context))
    }
  }

  info(message: string, context?: Record<string, any>): void {
    if (this.shouldLog(LogLevel.INFO)) {
      this.addEntry(this.createLogEntry(LogLevel.INFO, message, context))
    }
  }

  warn(message: string, context?: Record<string, any>): void {
    if (this.shouldLog(LogLevel.WARN)) {
      this.addEntry(this.createLogEntry(LogLevel.WARN, message, context))
    }
  }

  error(message: string, error?: Error, context?: Record<string, any>): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      this.addEntry(this.createLogEntry(LogLevel.ERROR, message, context, error))
    }
  }

  fatal(message: string, error?: Error, context?: Record<string, any>): void {
    if (this.shouldLog(LogLevel.FATAL)) {
      this.addEntry(this.createLogEntry(LogLevel.FATAL, message, context, error))
    }
  }

  // Методы для отслеживания производительности
  time(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.time(label)
    }
  }

  timeEnd(label: string): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      console.timeEnd(label)
    }
  }

  // Методы для отслеживания пользовательских событий
  trackEvent(event: string, properties?: Record<string, any>): void {
    this.info(`Event: ${event}`, properties)
  }

  trackError(error: Error, context?: Record<string, any>): void {
    this.error('Application error', error, context)
  }

  trackPerformance(metric: string, value: number, unit: string = 'ms'): void {
    this.info(`Performance: ${metric} = ${value}${unit}`)
  }

  // Методы для работы с состоянием
  getEntries(): LogEntry[] {
    return [...this.entries]
  }

  clear(): void {
    this.entries = []
  }

  setConfig(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config }
  }

  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
    }
    this.flush()
  }
}

// Создаем глобальный экземпляр логгера
export const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO,
  enableConsole: true,
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.NEXT_PUBLIC_LOG_ENDPOINT,
})

// Хук для использования логгера в React компонентах
export const useLogger = () => {
  return {
    debug: logger.debug.bind(logger),
    info: logger.info.bind(logger),
    warn: logger.warn.bind(logger),
    error: logger.error.bind(logger),
    fatal: logger.fatal.bind(logger),
    trackEvent: logger.trackEvent.bind(logger),
    trackError: logger.trackError.bind(logger),
    trackPerformance: logger.trackPerformance.bind(logger),
  }
}

// Утилиты для обработки ошибок
export const handleError = (error: Error, context?: Record<string, any>): void => {
  logger.error('Unhandled error', error, context)
}

export const handlePromiseRejection = (reason: any, promise: Promise<any>): void => {
  logger.error('Unhandled promise rejection', new Error(String(reason)), {
    promise: promise.toString(),
  })
}

// Инициализация обработчиков ошибок
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    logger.error('Global error', event.error, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    })
  })

  window.addEventListener('unhandledrejection', (event) => {
    logger.error('Unhandled promise rejection', new Error(String(event.reason)), {
      promise: event.promise.toString(),
    })
  })
}

export default logger 