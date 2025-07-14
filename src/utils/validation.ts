import { z } from 'zod'

// Базовые схемы валидации
export const emailSchema = z
  .string()
  .min(1, 'Email обязателен')
  .email('Неверный формат email')

export const passwordSchema = z
  .string()
  .min(8, 'Пароль должен содержать минимум 8 символов')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Пароль должен содержать буквы и цифры')

export const nameSchema = z
  .string()
  .min(2, 'Имя должно содержать минимум 2 символа')
  .max(50, 'Имя не должно превышать 50 символов')
  .regex(/^[а-яёa-z\s-]+$/i, 'Имя может содержать только буквы, пробелы и дефисы')

export const phoneSchema = z
  .string()
  .min(10, 'Номер телефона должен содержать минимум 10 цифр')
  .max(15, 'Номер телефона не должен превышать 15 цифр')
  .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Неверный формат номера телефона')

export const urlSchema = z
  .string()
  .url('Неверный формат URL')
  .optional()

// Схемы для форм
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(1000, 'Сообщение не должно превышать 1000 символов'),
  phone: phoneSchema.optional(),
  subject: z
    .string()
    .min(2, 'Тема должна содержать минимум 2 символа')
    .max(100, 'Тема не должна превышать 100 символов')
    .optional(),
})

export const newsletterFormSchema = z.object({
  email: emailSchema,
  name: nameSchema.optional(),
  preferences: z.object({
    marketing: z.boolean().default(false),
    updates: z.boolean().default(true),
    security: z.boolean().default(true),
  }).optional(),
})

export const downloadFormSchema = z.object({
  email: emailSchema.optional(),
  platform: z.enum(['ios', 'android', 'direct']),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: 'Необходимо согласиться с условиями использования'
  }),
  marketing: z.boolean().default(false),
})

export const feedbackFormSchema = z.object({
  rating: z.number().min(1).max(5),
  category: z.enum(['bug', 'feature', 'general', 'performance']),
  title: z
    .string()
    .min(5, 'Заголовок должен содержать минимум 5 символов')
    .max(100, 'Заголовок не должен превышать 100 символов'),
  description: z
    .string()
    .min(10, 'Описание должно содержать минимум 10 символов')
    .max(1000, 'Описание не должно превышать 1000 символов'),
  email: emailSchema.optional(),
  attachments: z.array(z.string()).max(5, 'Максимум 5 файлов').optional(),
})

// Типы для TypeScript
export type ContactFormData = z.infer<typeof contactFormSchema>
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>
export type DownloadFormData = z.infer<typeof downloadFormSchema>
export type FeedbackFormData = z.infer<typeof feedbackFormSchema>

// Утилиты для валидации
export const validateField = <T>(
  schema: z.ZodSchema<T>,
  value: unknown
): { success: true; data: T } | { success: false; error: string } => {
  try {
    const result = schema.parse(value)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: 'Неизвестная ошибка валидации' }
  }
}

export const validateForm = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } => {
  try {
    const result = schema.parse(data)
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        const path = err.path.join('.')
        errors[path] = err.message
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: 'Неизвестная ошибка валидации' } }
  }
}

// Хук для валидации в реальном времени
export const useFieldValidation = <T>(
  schema: z.ZodSchema<T>,
  value: unknown
) => {
  const result = validateField(schema, value)
  return {
    isValid: result.success,
    error: result.success ? null : result.error,
    value: result.success ? result.data : undefined,
  }
}

// Валидация для специфических полей
export const validateEmail = (email: string) => validateField(emailSchema, email)
export const validatePassword = (password: string) => validateField(passwordSchema, password)
export const validateName = (name: string) => validateField(nameSchema, name)
export const validatePhone = (phone: string) => validateField(phoneSchema, phone)
export const validateUrl = (url: string) => validateField(urlSchema, url)

// Специальные валидаторы
export const validateFileSize = (file: File, maxSize: number) => {
  if (file.size > maxSize) {
    return { success: false, error: `Файл слишком большой. Максимальный размер: ${maxSize / 1024 / 1024}MB` }
  }
  return { success: true, data: file }
}

export const validateFileType = (file: File, allowedTypes: string[]) => {
  if (!allowedTypes.includes(file.type)) {
    return { success: false, error: `Неподдерживаемый тип файла. Разрешены: ${allowedTypes.join(', ')}` }
  }
  return { success: true, data: file }
}

export const validateImageDimensions = (
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<{ success: boolean; error?: string; data?: File }> => {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(file)
    
    img.onload = () => {
      URL.revokeObjectURL(url)
      if (img.width > maxWidth || img.height > maxHeight) {
        resolve({
          success: false,
          error: `Изображение слишком большое. Максимальные размеры: ${maxWidth}x${maxHeight}px`
        })
      } else {
        resolve({ success: true, data: file })
      }
    }
    
    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve({ success: false, error: 'Не удалось загрузить изображение' })
    }
    
    img.src = url
  })
} 