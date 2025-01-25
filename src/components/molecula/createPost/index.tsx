import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import userImage from '../../../assets/user-image.png'

import { ButtonSubmit, InputForm, TextAreaForm, Wrapper } from './style'
import { FormDataSchema } from '../../../types/formDataSchema'
import { PostModel } from '../../../models/post'

export default function CreatePost() {
  const TextArea = useRef<HTMLTextAreaElement>(null)
  const [formData, setFormData] = useState<FormDataSchema>({
    title: '',
    body: '',
  })

  const takeValue = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    createPost()
    setFormData({
      title: '',
      body: '',
    })
  }

  const createPost = async () => {
    try {
      const responseServer = await PostModel.createPost(formData)

      console.log('Post criado com sucesso! \n ', responseServer)
      alert('Post criado com sucesso!')

    } catch (error) {
      console.log('Error : ' + error)
      alert('Não foi possivel criar o post')
    }
  }

  const resizeTextArea = () => {
    const textAreaElement = TextArea.current

    if (!textAreaElement) return

    textAreaElement.style.height = 'auto'
    textAreaElement.style.height = `${textAreaElement.scrollHeight}px`
  }

  return (
    <Wrapper.Form onSubmit={(e) => handleSubmit(e)}>
      <Wrapper.HeaderForm>
        <img src={userImage} alt="" />
        <InputForm
          name="title"
          type="text"
          placeholder="Whats happening?"
          onChange={takeValue}
          value={formData.title}
          required
        />
      </Wrapper.HeaderForm>

      <Wrapper.BodyForm>
        <TextAreaForm
          name="body"
          placeholder="Tell us about it..."
          onInput={resizeTextArea}
          ref={TextArea}
          onChange={takeValue}
          value={formData.body}
          required
        />
        <ButtonSubmit>Post</ButtonSubmit>
      </Wrapper.BodyForm>
    </Wrapper.Form>
  )
}
