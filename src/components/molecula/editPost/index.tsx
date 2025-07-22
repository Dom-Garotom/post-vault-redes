import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useContext, useEffect, useState } from 'react'

import ExitImage from '../../../assets/exit.svg'
import { EditPostSchema } from '../../../types/post'
import { PostModel } from '../../../models/post'
import { EditButton, Wrapper } from './style'
import TextAreaForm from '../../atomo/textAreaForm'
import { takeValueOnInput } from '../../../utils/takeValueOnInput'
import { PostContext } from '../../../context/PostContext'
import { FeedBackContext } from '../../../context/modules/FeedBackContext'

export default function EditPost() {
  const { showSuccess, showError } = useContext(FeedBackContext)
  const { post, setPost } = useContext(PostContext)
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()

  const [formData, setFormData] = useState<EditPostSchema>({
    id: Number(postId!),
    userId: 1,
    title: '',
    body: '',
  })

  useEffect(() => {
    if (!postId) {
      showError('Id do post não encontrado')
      navigate('/')
      return
    }

    if (!post) {
      handlePostData(postId)
    }

    const postEdited = post?.find((post) => post.id === parseInt(postId))

    if (!postEdited) {
      showError('Post não encontrado')
      navigate('/')
      return
    }

    setFormData((prev) => {
      return {
        ...prev,
        title: postEdited.title,
        body: postEdited.body,
      }
    })
  }, [postId])

  const handlePostData = async (postId: string) => {
    try {
      const response = await PostModel.getPostById(postId)

      if (!response) {
        showError('Post inexistente ')
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
    }
  }

  const editPost = async (postId: string) => {
    try {
      const responseServer = await PostModel.editPost(postId, formData)

      if (!responseServer) {
        showError('Não foi possivle editar seu post')
        navigate('/')
        return
      }

      const postEdited = post?.find((post) => post.id === parseInt(postId))

      if (!postEdited) {
        return
      }

      postEdited.body = formData.body
      postEdited.title = formData.title

      setPost([...(post ?? [])])

      showSuccess('Post editado com sucesso')
      navigate('/')
    } catch (error) {
      console.error('Error : ' + error)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    editPost(postId!)
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
        <EditButton
          disabled={!formData.title.trim() || !formData.body.trim()}
          title={
            !formData.title.trim() || !formData.body.trim()
              ? 'Preencha os campos'
              : 'Button'
          }
        >
          Edit
        </EditButton>
      </Wrapper.FormBody>
    </Wrapper.Form>
  )
}
