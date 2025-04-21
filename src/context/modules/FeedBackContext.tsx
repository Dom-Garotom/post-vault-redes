import { createContext } from 'react'
import { ToasterProps } from 'sonner'

export interface FeedBackContextType {
  showSuccess: (message: string, options?: ToasterProps) => void
  showError: (message: string, options?: ToasterProps) => void
  showInfo: (message: string, options?: ToasterProps) => void
  showWarning: (message: string, options?: ToasterProps) => void
}

const defaultFeedBackContext: FeedBackContextType = {
  showError: () => '',
  showInfo: () => '',
  showSuccess: () => '',
  showWarning: () => '',
}

export const FeedBackContext = createContext<FeedBackContextType>(
  defaultFeedBackContext
)
