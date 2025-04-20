import React, { ReactNode } from 'react'
import { toast, Toaster } from 'sonner'
import { FeedBackContext, FeedBackContextType } from './modules/FeedBackContext'
import { ToasterProps } from 'sonner'

interface FeedBackProvider {
  children: ReactNode
}

const FeedBackProvider: React.FC<FeedBackProvider> = ({ children }) => {
  const showToast: FeedBackContextType = {
    showError: (message: string, options?: ToasterProps) =>
      toast.error(message, { ...options }),

    showInfo: (message: string, options?: ToasterProps) =>
      toast.info(message, { ...options }),

    showSuccess: (message: string, options?: ToasterProps) =>
      toast.success(message, { ...options }),
  }

  return (
    <FeedBackContext.Provider value={showToast}>
      {children}
      <Toaster />
    </FeedBackContext.Provider>
  )
}

export default FeedBackProvider
