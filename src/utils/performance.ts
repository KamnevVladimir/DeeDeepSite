// Система мониторинга производительности для DeeDeep

export interface PerformanceMetrics {
  fcp: number | null // First Contentful Paint
  lcp: number | null // Largest Contentful Paint
  fid: number | null // First Input Delay
  cls: number | null // Cumulative Layout Shift
  ttfb: number | null // Time to First Byte
  fmp: number | null // First Meaningful Paint
  tti: number | null // Time to Interactive
  tbt: number | null // Total Blocking Time
}

export interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number }
  lcp: { good: number; needsImprovement: number }
  fid: { good: number; needsImprovement: number }
  cls: { good: number; needsImprovement: number }
  ttfb: { good: number; needsImprovement: number }
}

export interface PerformanceReport {
  metrics: PerformanceMetrics
  score: number
  grade: 'A' | 'B' | 'C' | 'D' | 'F'
  recommendations: string[]
  timestamp: string
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    tti: null,
    tbt: null,
  }

  private thresholds: PerformanceThresholds = {
    fcp: { good: 1800, needsImprovement: 3000 },
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    ttfb: { good: 800, needsImprovement: 1800 },
  }

  private observers: PerformanceObserver[] = []
  private isInitialized = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.init()
    }
  }

  private init(): void {
    if (this.isInitialized) return

    this.observeLCP()
    this.observeFID()
    this.observeCLS()
    this.observeFCP()
    this.observeTTFB()

    this.isInitialized = true
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        this.metrics.lcp = lastEntry.startTime
        this.trackMetric('LCP', lastEntry.startTime)
      })

      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('LCP observer not supported:', error)
    }
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const firstInputEntry = entry as any
          this.metrics.fid = firstInputEntry.processingStart - entry.startTime
          this.trackMetric('FID', this.metrics.fid)
        })
      })

      observer.observe({ entryTypes: ['first-input'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('FID observer not supported:', error)
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
          }
        }
        this.metrics.cls = clsValue
        this.trackMetric('CLS', clsValue)
      })

      observer.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('CLS observer not supported:', error)
    }
  }

  private observeFCP(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const firstEntry = entries[0] as PerformanceEntry
        this.metrics.fcp = firstEntry.startTime
        this.trackMetric('FCP', firstEntry.startTime)
      })

      observer.observe({ entryTypes: ['paint'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('FCP observer not supported:', error)
    }
  }

  private observeTTFB(): void {
    if (!('PerformanceObserver' in window)) return

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart
            this.trackMetric('TTFB', this.metrics.ttfb)
          }
        })
      })

      observer.observe({ entryTypes: ['navigation'] })
      this.observers.push(observer)
    } catch (error) {
      console.warn('TTFB observer not supported:', error)
    }
  }

  private trackMetric(name: string, value: number): void {
    // Отправляем метрики в аналитику
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        page_url: window.location.href,
      })
    }

    // Логируем метрику
    console.log(`Performance Metric - ${name}: ${value}ms`)
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  public calculateScore(): number {
    const scores = []
    let totalWeight = 0

    // LCP (25%)
    if (this.metrics.lcp !== null) {
      const lcpScore = this.calculateMetricScore('lcp', this.metrics.lcp)
      scores.push(lcpScore * 0.25)
      totalWeight += 0.25
    }

    // FID (25%)
    if (this.metrics.fid !== null) {
      const fidScore = this.calculateMetricScore('fid', this.metrics.fid)
      scores.push(fidScore * 0.25)
      totalWeight += 0.25
    }

    // CLS (25%)
    if (this.metrics.cls !== null) {
      const clsScore = this.calculateMetricScore('cls', this.metrics.cls)
      scores.push(clsScore * 0.25)
      totalWeight += 0.25
    }

    // FCP (15%)
    if (this.metrics.fcp !== null) {
      const fcpScore = this.calculateMetricScore('fcp', this.metrics.fcp)
      scores.push(fcpScore * 0.15)
      totalWeight += 0.15
    }

    // TTFB (10%)
    if (this.metrics.ttfb !== null) {
      const ttfbScore = this.calculateMetricScore('ttfb', this.metrics.ttfb)
      scores.push(ttfbScore * 0.10)
      totalWeight += 0.10
    }

    if (totalWeight === 0) return 0

    const totalScore = scores.reduce((sum, score) => sum + score, 0)
    return Math.round((totalScore / totalWeight) * 100)
  }

  private calculateMetricScore(metric: keyof PerformanceThresholds, value: number): number {
    const threshold = this.thresholds[metric]
    
    if (value <= threshold.good) {
      return 1.0
    } else if (value <= threshold.needsImprovement) {
      return 0.5
    } else {
      return 0.0
    }
  }

  public getGrade(): 'A' | 'B' | 'C' | 'D' | 'F' {
    const score = this.calculateScore()
    
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    if (score >= 60) return 'D'
    return 'F'
  }

  public getRecommendations(): string[] {
    const recommendations: string[] = []
    const metrics = this.getMetrics()

    if (metrics.lcp && metrics.lcp > this.thresholds.lcp.needsImprovement) {
      recommendations.push('Оптимизируйте загрузку изображений и критических ресурсов')
    }

    if (metrics.fid && metrics.fid > this.thresholds.fid.needsImprovement) {
      recommendations.push('Уменьшите время выполнения JavaScript в основном потоке')
    }

    if (metrics.cls && metrics.cls > this.thresholds.cls.needsImprovement) {
      recommendations.push('Исправьте нестабильные элементы макета')
    }

    if (metrics.fcp && metrics.fcp > this.thresholds.fcp.needsImprovement) {
      recommendations.push('Оптимизируйте критический путь рендеринга')
    }

    if (metrics.ttfb && metrics.ttfb > this.thresholds.ttfb.needsImprovement) {
      recommendations.push('Улучшите время ответа сервера')
    }

    return recommendations
  }

  public generateReport(): PerformanceReport {
    return {
      metrics: this.getMetrics(),
      score: this.calculateScore(),
      grade: this.getGrade(),
      recommendations: this.getRecommendations(),
      timestamp: new Date().toISOString(),
    }
  }

  public mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name)
    }
  }

  public measure(name: string, startMark: string, endMark: string): void {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark)
        const measure = performance.getEntriesByName(name)[0]
        this.trackMetric(name, measure.duration)
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error)
      }
    }
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

// Создаем глобальный экземпляр мониторинга производительности
export const performanceMonitor = new PerformanceMonitor()

// Хук для использования мониторинга производительности в React
export const usePerformanceMonitor = () => {
  return {
    getMetrics: performanceMonitor.getMetrics.bind(performanceMonitor),
    calculateScore: performanceMonitor.calculateScore.bind(performanceMonitor),
    getGrade: performanceMonitor.getGrade.bind(performanceMonitor),
    getRecommendations: performanceMonitor.getRecommendations.bind(performanceMonitor),
    generateReport: performanceMonitor.generateReport.bind(performanceMonitor),
    mark: performanceMonitor.mark.bind(performanceMonitor),
    measure: performanceMonitor.measure.bind(performanceMonitor),
  }
}

// Утилиты для измерения производительности
export const measureAsync = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  performanceMonitor.mark(`${name}-start`)
  const result = await fn()
  performanceMonitor.mark(`${name}-end`)
  performanceMonitor.measure(name, `${name}-start`, `${name}-end`)
  return result
}

export const measureSync = <T>(
  name: string,
  fn: () => T
): T => {
  performanceMonitor.mark(`${name}-start`)
  const result = fn()
  performanceMonitor.mark(`${name}-end`)
  performanceMonitor.measure(name, `${name}-start`, `${name}-end`)
  return result
}

export default performanceMonitor 