'use client'

import { useEffect } from 'react'
import { initializeApp } from '@/stores/appStore'

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    // Initialize app when component mounts
    initializeApp()
  }, [])

  return <>{children}</>
} 