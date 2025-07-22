import { FormEvent, useContext, useState } from 'react'
import userImage from '../../../assets/user-image.png'

import { ButtonSubmit, InputForm, Wrapper } from './style'
import { FormDataSchema } from '../../../types/formDataSchema'
import { PostModel } from '../../../models/post'
import TextAreaForm from '../../atomo/textAreaForm'
import { takeValueOnInput } from '../../../utils/takeValueOnInput'
import { PostContext } from '../../../context/PostContext'
import { FeedBackContext } from '../../../context/modules/FeedBackContext'

export default function CreatePost() {
  const { showSuccess, showError } = useContext(FeedBackContext)
  const { setPost, post } = useContext(PostContext)
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
      showSuccess('Post criado com sucesso!')

      if (!responseServer) {
        showError('Não foi possivel criar o post')
        return
      }

      const newPost = {
        ...formData,
        userId: 1,
        id: responseServer.id,
        username: 'Marcos',
        email: 'Marcos@exemple',
      }

      // operador de complacência nula, caso os posts sejam nulos ele retorna um array vázio
      const newPostList = [newPost, ...(post ?? [])]
      setPost(newPostList)
    } catch (error) {
      console.log('Error : ' + error)
      showError('Não foi possivel criar o post')
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
          placeholder="No que está pensando?"
          onChange={(e) => takeValueOnInput<FormDataSchema>(e, setFormData)}
          value={formData.title}
          required
        />
      </Wrapper.HeaderForm>

      <Wrapper.BodyForm>
        <TextAreaForm
          name="body"
          placeholder="Gostaria de contar para nós..."
          onChange={(e) => takeValueOnInput<FormDataSchema>(e, setFormData)}
          value={formData.body}
          required
        />
        <ButtonSubmit>Post</ButtonSubmit>
      </Wrapper.BodyForm>
    </Wrapper.Form>
  )
}
