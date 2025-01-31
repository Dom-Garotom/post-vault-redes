import { useEffect, useState } from 'react'
import { getAll } from '../../../services/requests'
import { PostStyled } from './style'
import Comment from '../../atomo/comment'

type PostProps = {
  id?: number
}

type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export default function CommentList({ id }: PostProps) {
  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    const handleComments = async () => {
      try {
        const response = await getAll('/comments')
        const commentsCurrent = response.data as CommentType[]
        const commentsFiltered = commentsCurrent.filter(
          (comment) => comment.postId === id
        )
        setComments(commentsFiltered)
      } catch (error) {
        console.error('Erro na busca dos comentarios:', error)
      }
    }

    if (id) {
      handleComments()
    }
  }, [id])

  return (
    <PostStyled.ListComment>
      <h3>Comments</h3>
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            body={comment.body}
            email={comment.email}
            userName={comment.name}
          />
        ))}
    </PostStyled.ListComment>
  )
}
