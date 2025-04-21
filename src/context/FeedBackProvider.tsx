import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { FeedBackContext, FeedBackContextType } from './modules/FeedBackContext'
import { ToasterProps } from 'sonner'
import { showToast } from '../components/atomo/Toast'

interface FeedBackProvider {
  children: ReactNode
}

const FeedBackProvider: React.FC<FeedBackProvider> = ({ children }) => {
  const showToasts: FeedBackContextType = {
    showError: (message: string, options?: ToasterProps) =>
      showToast('error', message, options),

    showInfo: (message: string, options?: ToasterProps) =>
      showToast('info', message, options),

    showSuccess: (message: string, options?: ToasterProps) =>
      showToast('success', message, options),

    showWarning: (message: string, options?: ToasterProps) =>
      showToast('warning', message, options),
  }

  return (
    <FeedBackContext.Provider value={showToasts}>
      {children}
      <Toaster />
    </FeedBackContext.Provider>
  )
}

export default FeedBackProvider
