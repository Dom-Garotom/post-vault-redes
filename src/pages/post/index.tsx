import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Post as PostType } from '../../types/post'
import {
  PostContainerDiv,
  PostContainerInfoDiv,
  TitlePost,
  Paragraph,
} from './style'
import { PostModel } from '../../models/post'
import { PostContext } from '../../context/PostContext'

export default function Post() {
  const { id } = useParams<{ id: string }>()
  const { post } = useContext(PostContext)
  const navigate = useNavigate()

  const [postCurrent, setPostCurrent] = useState<PostType>()

  useEffect(() => {
    if (!id) {
      alert('Id do post não encontrado')
      navigate('/')
      return
    }

    if (!post) {
      fetchPost(id)
      return
    }

    const foundPost = post.find((post) => post.id === parseInt(id))

    if (!foundPost) {
      alert('Post não encontrado')
      navigate('/')
      return
    }

    setPostCurrent(foundPost)
  }, [id])

  const fetchPost = async (postId: string) => {
    try {
      const foundPost = await PostModel.getPostById(postId)

      if (!foundPost) {
        alert('Post não encontrado')
        navigate('/')
        return
      }

      setPostCurrent(foundPost)
    } catch (err: unknown) {
      console.log(err instanceof Error ? err.message : 'Erro desconhecido!')
    }
  }

  return (
    <div>
      {postCurrent ? (
        <PostContainerDiv>
          <PostContainerInfoDiv>
            <div className="container-info">
              <TitlePost>{postCurrent.title}</TitlePost>
              <Paragraph>{postCurrent.body}</Paragraph>
            </div>
          </PostContainerInfoDiv>
        </PostContainerDiv>
      ) : (
        <div>Post não encontrado</div>
      )}
    </div>
  )
}
