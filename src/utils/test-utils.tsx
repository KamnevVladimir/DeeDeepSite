import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAppStore } from '@/stores/appStore'
import { i18n } from '@/utils/i18n'

// Создаем тестовый QueryClient
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  })

// Интерфейс для кастомных опций рендера
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  queryClient?: QueryClient
  initialAppState?: Partial<ReturnType<typeof useAppStore.getState>>
  language?: 'ru' | 'en'
}

// Кастомный wrapper для тестов
const AllTheProviders: React.FC<{
  children: React.ReactNode
  queryClient?: QueryClient
  initialAppState?: Partial<ReturnType<typeof useAppStore.getState>>
  language?: 'ru' | 'en'
}> = ({ children, queryClient, initialAppState, language }) => {
  const testQueryClient = queryClient || createTestQueryClient()

  // Инициализируем состояние приложения
  React.useEffect(() => {
    if (initialAppState) {
      useAppStore.setState(initialAppState)
    }
  }, [initialAppState])

  // Инициализируем язык
  React.useEffect(() => {
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

// Кастомная функция рендера
const customRender = (
  ui: React.ReactElement,
  options: CustomRenderOptions = {}
) => {
  const {
    queryClient,
    initialAppState,
    language,
    ...renderOptions
  } = options

  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders
        queryClient={queryClient}
        initialAppState={initialAppState}
        language={language}
      >
        {children}
      </AllTheProviders>
    ),
    ...renderOptions,
  })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Утилиты для тестирования
export const createMockAppState = (overrides: Partial<ReturnType<typeof useAppStore.getState>> = {}) => ({
  theme: 'light' as const,
  language: 'ru' as const,
  isLoading: false,
  currentPage: '/',
  isInitialized: false,
  error: null,
  preferences: {
    theme: 'light' as const,
    language: 'ru' as const,
    notifications: true,
    analytics: true,
  },
  featureFlags: {
    enableAnalytics: true,
    enableNotifications: true,
    enableDarkMode: true,
    enableMultiLanguage: false,
  },
  setTheme: () => {},
  setLanguage: () => {},
  setLoading: () => {},
  setCurrentPage: () => {},
  setPreferences: () => {},
  setFeatureFlags: () => {},
  trackEvent: () => {},
  setInitialized: () => {},
  setError: () => {},
  clearError: () => {},
  ...overrides,
})

export const createMockUser = (overrides: Partial<any> = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  avatar: null,
  createdAt: new Date().toISOString(),
  ...overrides,
})

export const createMockFeature = (overrides: Partial<any> = {}) => ({
  id: '1',
  title: 'Test Feature',
  description: 'Test feature description',
  icon: 'test-icon',
  benefits: ['Benefit 1', 'Benefit 2'],
  ...overrides,
})

export const createMockTestimonial = (overrides: Partial<any> = {}) => ({
  id: '1',
  name: 'Test User',
  role: 'Test Role',
  text: 'Test testimonial text',
  rating: 5,
  avatar: null,
  ...overrides,
})

// Утилиты для тестирования форм
export const fillForm = async (container: HTMLElement, data: Record<string, any>) => {
  const { fireEvent } = await import('@testing-library/react')
  
  for (const [name, value] of Object.entries(data)) {
    const element = container.querySelector(`[name="${name}"]`) as HTMLInputElement
    if (element) {
      fireEvent.change(element, { target: { value } })
    }
  }
}

export const submitForm = async (container: HTMLElement, formSelector = 'form') => {
  const { fireEvent } = await import('@testing-library/react')
  
  const form = container.querySelector(formSelector) as HTMLFormElement
  if (form) {
    fireEvent.submit(form)
  }
}

// Утилиты для тестирования асинхронных операций
export const waitForLoadingToFinish = async () => {
  const { waitFor } = await import('@testing-library/react')
  
  await waitFor(() => {
    const loadingElements = document.querySelectorAll('[data-testid="loading"]')
    expect(loadingElements.length).toBe(0)
  })
}

export const waitForErrorToAppear = async () => {
  const { waitFor } = await import('@testing-library/react')
  
  await waitFor(() => {
    const errorElements = document.querySelectorAll('[data-testid="error"]')
    expect(errorElements.length).toBeGreaterThan(0)
  })
}

// Утилиты для тестирования производительности
export const measurePerformance = async (callback: () => void) => {
  const start = performance.now()
  await callback()
  const end = performance.now()
  return end - start
}

// Утилиты для тестирования доступности
export const checkAccessibility = async (container: HTMLElement) => {
  const { axe, toHaveNoViolations } = await import('jest-axe')
  
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}

// Утилиты для тестирования SEO
export const checkSEO = (container: HTMLElement) => {
  const title = container.querySelector('title')
  const metaDescription = container.querySelector('meta[name="description"]')
  const metaKeywords = container.querySelector('meta[name="keywords"]')
  
  expect(title).toBeInTheDocument()
  expect(metaDescription).toBeInTheDocument()
  expect(metaKeywords).toBeInTheDocument()
}

// Утилиты для тестирования аналитики
export const mockAnalytics = () => {
  const mockGtag = jest.fn()
  Object.defineProperty(window, 'gtag', {
    value: mockGtag,
    writable: true,
  })
  return mockGtag
}

// Утилиты для тестирования локализации
export const testTranslations = async (component: React.ReactElement, translations: Record<string, string>) => {
  const { render, screen } = await import('@testing-library/react')
  
  for (const [language, expectedText] of Object.entries(translations)) {
    const { rerender } = render(component, {
      wrapper: ({ children }) => (
        <AllTheProviders language={language as 'ru' | 'en'}>
          {children}
        </AllTheProviders>
      ),
    })
    
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  }
}

// Утилиты для тестирования тем
export const testThemes = async (component: React.ReactElement) => {
  const { render, screen } = await import('@testing-library/react')
  
  const themes = ['light', 'dark'] as const
  
  for (const theme of themes) {
    const { rerender } = render(component, {
      wrapper: ({ children }) => (
        <AllTheProviders initialAppState={{ theme }}>
          {children}
        </AllTheProviders>
      ),
    })
    
    // Проверяем, что компонент корректно отображается в обеих темах
    expect(screen.getByRole('main')).toBeInTheDocument()
  }
}

export default customRender 