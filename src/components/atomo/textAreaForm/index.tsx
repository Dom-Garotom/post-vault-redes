import { ComponentProps, useEffect, useRef } from 'react'
import { WrapperAreaForm } from './style'

type TextAreaFormProps = ComponentProps<'textarea'>

export default function TextAreaForm({ ...props }: TextAreaFormProps) {
  const TextArea = useRef<HTMLTextAreaElement>(null)

  useEffect(() =>{
    resizeTextArea();
  })

  const resizeTextArea = () => {
    const textAreaElement = TextArea.current

    if (!textAreaElement) return

    textAreaElement.style.height = 'auto'
    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`
  }

  return <WrapperAreaForm ref={TextArea} onFocus={resizeTextArea} {...props} />
}
