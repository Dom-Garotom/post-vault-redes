import { FormEvent, useState } from 'react'
import userImage from '../../../assets/user-image.png'

import { ButtonSubmit, InputForm, Wrapper } from './style'
import { FormDataSchema } from '../../../types/formDataSchema'
import { PostModel } from '../../../models/post'
import TextAreaForm from '../../atomo/textAreaForm'
import { takeValueOnInput } from '../../../utils/takeValueOnInput'

export default function CreatePost() {
  const [formData, setFormData] = useState<FormDataSchema>({
    title: '',
    body: '',
  })

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

  return (
    <Wrapper.Form onSubmit={(e) => handleSubmit(e)}>
      <Wrapper.HeaderForm>
        <img src={userImage} alt="" />
        <InputForm
          name="title"
          type="text"
          placeholder="Whats happening?"
          onChange={(e) => takeValueOnInput<FormDataSchema>(e, setFormData)}
          value={formData.title}
          required
        />
      </Wrapper.HeaderForm>

      <Wrapper.BodyForm>
        <TextAreaForm
          name="body"
          placeholder="Tell us about it..."
          onChange={(e) => takeValueOnInput<FormDataSchema>(e, setFormData)}
          value={formData.body}
          required
        />
        <ButtonSubmit>Post</ButtonSubmit>
      </Wrapper.BodyForm>
    </Wrapper.Form>
  )
}
