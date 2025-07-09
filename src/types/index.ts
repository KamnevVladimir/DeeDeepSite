// Основные типы приложения

export interface AppConfig {
  name: string
  version: string
  description: string
  domain: string
  contactEmail: string
  supportEmail: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
  benefits?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  rating: number
  avatar?: string
}

export interface DownloadOption {
  platform: 'ios' | 'android' | 'direct'
  url: string
  rating?: number
  reviews?: number
  size?: string
  version?: string
}

export interface SystemRequirement {
  platform: string
  version: string
  storage: string
  permissions: string[]
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface AppState {
  theme: 'light' | 'dark'
  language: 'ru' | 'en'
  isLoading: boolean
  currentPage: string
}

export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Цветовая палитра
export interface ColorPalette {
  primary: {
    50: string
    500: string
    600: string
    700: string
    900: string
  }
  accent: {
    50: string
    500: string
    600: string
    900: string
  }
  success: {
    500: string
    600: string
  }
  warning: {
    500: string
    600: string
  }
  error: {
    500: string
    600: string
  }
  neutral: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
}

// Типографика
export interface Typography {
  h1: string
  h2: string
  h3: string
  body: string
  small: string
  button: string
}

// Spacing
export interface Spacing {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
}

// Breakpoints
export interface Breakpoints {
  mobile: string
  tablet: string
  desktop: string
  wide: string
}

// Performance targets
export interface PerformanceTargets {
  lcp: string
  fid: string
  cls: string
  ttfb: string
  fcp: string
}

// SEO metadata
export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  ogType: string
  twitterCard: string
}

// Navigation
export interface NavigationItem {
  label: string
  href: string
  icon?: string
  external?: boolean
}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Card variants
export type CardVariant = 'default' | 'feature' | 'testimonial'

// Form validation
export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  email?: boolean
}

// API responses
export interface ApiResponse<T> {
  data: T
  status: number
  message: string
  success: boolean
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: any
}

// Loading states
export interface LoadingState {
  isLoading: boolean
  error: AppError | null
  retry?: () => void
}

// User preferences
export interface UserPreferences {
  theme: 'light' | 'dark'
  language: 'ru' | 'en'
  notifications: boolean
  analytics: boolean
}

// App statistics
export interface AppStats {
  downloads: number
  activeUsers: number
  rating: number
  reviews: number
}

// Feature flags
export interface FeatureFlags {
  enableAnalytics: boolean
  enableNotifications: boolean
  enableDarkMode: boolean
  enableMultiLanguage: boolean
}

// Legal documents
export interface LegalDocument {
  id: string
  title: string
  url: string
  version: string
  lastUpdated: string
}

// Support contact
export interface SupportContact {
  email: string
  website: string
  inAppSupport: string
}

// App store links
export interface AppStoreLinks {
  appStore: string
  googlePlay?: string
  directDownload?: string
}

// System requirements
export interface SystemRequirements {
  ios: string
  android?: string
  storage: string
  permissions: string[]
}

// App screenshots
export interface AppScreenshot {
  id: string
  src: string
  alt: string
  platform: 'ios' | 'android'
}

// App features for download page
export interface AppFeature {
  id: string
  title: string
  description: string
  icon: string
}

// Download page data
export interface DownloadPageData {
  screenshots: AppScreenshot[]
  features: AppFeature[]
  requirements: SystemRequirements
  downloadOptions: DownloadOption[]
}

// Home page data
export interface HomePageData {
  hero: {
    title: string
    subtitle: string
    ctaText: string
  }
  features: Feature[]
  testimonials: Testimonial[]
  downloadOptions: DownloadOption[]
}

// Features page data
export interface FeaturesPageData {
  features: Feature[]
  comparison: {
    competitors: string[]
    advantages: string[]
  }
}

// Contact page data
export interface ContactPageData {
  email: string
  supportHours: string
  responseTime: string
}

// About page data
export interface AboutPageData {
  company: {
    name: string
    description: string
    mission: string
    vision: string
  }
  team: {
    name: string
    role: string
    bio: string
    avatar?: string
  }[]
  stats: {
    users: number
    downloads: number
    rating: number
    countries: number
  }
} 