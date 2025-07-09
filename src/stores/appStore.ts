import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AppState, UserPreferences, FeatureFlags } from '@/types'

interface AppStore extends AppState {
  // Actions
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (language: 'ru' | 'en') => void
  setLoading: (loading: boolean) => void
  setCurrentPage: (page: string) => void
  
  // User preferences
  preferences: UserPreferences
  setPreferences: (preferences: Partial<UserPreferences>) => void
  
  // Feature flags
  featureFlags: FeatureFlags
  setFeatureFlags: (flags: Partial<FeatureFlags>) => void
  
  // Analytics
  trackEvent: (event: { action: string; category: string; label?: string; value?: number }) => void
  
  // App state
  isInitialized: boolean
  setInitialized: (initialized: boolean) => void
  
  // Error handling
  error: string | null
  setError: (error: string | null) => void
  clearError: () => void
}

const defaultPreferences: UserPreferences = {
  theme: 'light',
  language: 'ru',
  notifications: true,
  analytics: true,
}

const defaultFeatureFlags: FeatureFlags = {
  enableAnalytics: true,
  enableNotifications: true,
  enableDarkMode: true,
  enableMultiLanguage: false,
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Initial state
      theme: 'light',
      language: 'ru',
      isLoading: false,
      currentPage: '/',
      isInitialized: false,
      error: null,
      
      // User preferences
      preferences: defaultPreferences,
      
      // Feature flags
      featureFlags: defaultFeatureFlags,
      
      // Actions
      setTheme: (theme) => {
        set({ theme })
        // Update preferences
        set((state) => ({
          preferences: { ...state.preferences, theme }
        }))
        
        // Apply theme to document
        if (typeof document !== 'undefined') {
          document.documentElement.classList.remove('light', 'dark')
          document.documentElement.classList.add(theme)
        }
      },
      
      setLanguage: (language) => {
        set({ language })
        set((state) => ({
          preferences: { ...state.preferences, language }
        }))
      },
      
      setLoading: (isLoading) => set({ isLoading }),
      
      setCurrentPage: (currentPage) => set({ currentPage }),
      
      setPreferences: (newPreferences) => {
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences }
        }))
        
        // Apply theme if changed
        if (newPreferences.theme) {
          get().setTheme(newPreferences.theme)
        }
      },
      
      setFeatureFlags: (newFlags) => {
        set((state) => ({
          featureFlags: { ...state.featureFlags, ...newFlags }
        }))
      },
      
      trackEvent: (event) => {
        const { featureFlags } = get()
        
        // Only track if analytics is enabled
        if (!featureFlags.enableAnalytics) return
        
        // Track event (implement your analytics here)
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
          })
        }
        
        // Console log for development
        if (process.env.NODE_ENV === 'development') {
          console.log('Analytics Event:', event)
        }
      },
      
      setInitialized: (isInitialized) => set({ isInitialized }),
      
      setError: (error) => set({ error }),
      
      clearError: () => set({ error: null }),
    }),
    {
      name: 'deedeep-app-store',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        preferences: state.preferences,
        featureFlags: state.featureFlags,
      }),
    }
  )
)

// Selectors for better performance
export const useTheme = () => useAppStore((state) => state.theme)
export const useLanguage = () => useAppStore((state) => state.language)
export const useLoading = () => useAppStore((state) => state.isLoading)
export const useCurrentPage = () => useAppStore((state) => state.currentPage)
export const usePreferences = () => useAppStore((state) => state.preferences)
export const useFeatureFlags = () => useAppStore((state) => state.featureFlags)
export const useError = () => useAppStore((state) => state.error)

// Actions
export const useAppActions = () => {
  const store = useAppStore()
  return {
    setTheme: store.setTheme,
    setLanguage: store.setLanguage,
    setLoading: store.setLoading,
    setCurrentPage: store.setCurrentPage,
    setPreferences: store.setPreferences,
    setFeatureFlags: store.setFeatureFlags,
    trackEvent: store.trackEvent,
    setInitialized: store.setInitialized,
    setError: store.setError,
    clearError: store.clearError,
  }
}

// Initialize app
export const initializeApp = () => {
  const store = useAppStore.getState()
  
  // Apply theme
  store.setTheme(store.preferences.theme)
  
  // Set initialized
  store.setInitialized(true)
  
  // Track app initialization
  store.trackEvent({
    action: 'app_initialized',
    category: 'app',
    label: 'initialization',
  })
}

// Utility functions
export const isDarkMode = () => useAppStore.getState().theme === 'dark'
export const isRussian = () => useAppStore.getState().language === 'ru'

// Theme utilities
export const getThemeClass = () => {
  const theme = useAppStore.getState().theme
  return theme === 'dark' ? 'dark' : 'light'
}

// Language utilities
export const getLanguageCode = () => {
  const language = useAppStore.getState().language
  return language === 'ru' ? 'ru-RU' : 'en-US'
}

// Error utilities
export const handleError = (error: Error | string) => {
  const message = error instanceof Error ? error.message : error
  useAppStore.getState().setError(message)
  
  // Track error
  useAppStore.getState().trackEvent({
    action: 'error_occurred',
    category: 'app',
    label: message,
  })
}

// Performance utilities
export const trackPageView = (page: string) => {
  const store = useAppStore.getState()
  store.setCurrentPage(page)
  store.trackEvent({
    action: 'page_view',
    category: 'navigation',
    label: page,
  })
}

// Feature flag utilities
export const isFeatureEnabled = (feature: keyof FeatureFlags) => {
  return useAppStore.getState().featureFlags[feature]
} 