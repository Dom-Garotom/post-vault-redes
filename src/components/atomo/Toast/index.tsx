import { toast, ToasterProps } from 'sonner'
import { CheckCircle, Info, AlertTriangle, XCircle } from 'lucide-react' // ícones bonitinhos
import { ToastWrapper } from './style'

type IconType = 'success' | 'info' | 'warning' | 'error'

const getIcon = (type: IconType) => {
  switch (type) {
    case 'success':
      return <CheckCircle />
    case 'info':
      return <Info />
    case 'warning':
      return <AlertTriangle />
    case 'error':
      return <XCircle />
    default:
      return null
  }
}

// Exemplo de uso
export const showToast = (
  type: IconType,
  message: string,
  options?: ToasterProps
) => {
  toast.custom(
    () => (
      <ToastWrapper type={type}>
        {getIcon(type)}
        <span>{message}</span>
      </ToastWrapper>
    ),
    { duration: 5000, ...options }
  )
}
