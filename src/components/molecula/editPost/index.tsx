import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'

import ExitImage from '../../../assets/exit.svg'
import { EditPostSchema } from '../../../types/post'
import { PostModel } from '../../../models/post'
import { EditButton, Wrapper } from './style'
import TextAreaForm from '../../atomo/textAreaForm'
import { takeValueOnInput } from '../../../utils/takeValueOnInput'

export default function EditPost() {
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()

  const [formData, setFormData] = useState<EditPostSchema>({
    id: Number(postId!),
    userId: 1,
    title: '',
    body: '',
  })

  useEffect(() => {
    handlePostDada()
  }, [postId])

  const handlePostDada = async () => {
    try {
      if (!postId) {
        return
      }

      const response = await PostModel.getPostById(postId)

      if (!response) {
        console.log('Erro na requisição!')
        alert('Erro na requisição')
        navigate('/')
        return
      }

      setFormData((prev) => {
        return {
          ...prev,
          title: response.title,
          body: response.body,
        }
      })
    } catch (error) {
      console.log('Erro : ', error)
      alert('Erro na requisição')
      navigate('/')
    }
  }

  const editPost = async () => {
    try {
      if (!postId) {
        return
      }

      const responseServer = await PostModel.editPost(postId, formData)

      if (!responseServer) {
        alert('Não foi possivle editar seu post')
        navigate('/')
        return
      }

      alert('Post editado com sucesso')
      console.log('Response : ', responseServer)
      navigate('/')

      // adicionar o contexto
    } catch (error) {
      console.error('Error : ' + error)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    editPost()
  }

  return (
    <Wrapper.Form onSubmit={handleSubmit}>
      <Wrapper.FormHeader>
        <span>Edit our Post</span>
        <NavLink to={'/'}>
          <img src={ExitImage} width={20} height={18} />
        </NavLink>
      </Wrapper.FormHeader>
      <Wrapper.FormBody>
        <TextAreaForm
          name="title"
          value={formData.title}
          className="textAreaTitle"
          placeholder="What do you have in mind?"
          onChange={(e) => takeValueOnInput<EditPostSchema>(e, setFormData)}
          required
        />
        <TextAreaForm
          name="body"
          value={formData.body}
          placeholder="What would you like to change?"
          onChange={(e) => takeValueOnInput<EditPostSchema>(e, setFormData)}
          required
        />
        <EditButton>Edit</EditButton>
      </Wrapper.FormBody>
    </Wrapper.Form>
  )
}
