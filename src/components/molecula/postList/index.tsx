import { useContext, useEffect } from 'react'

import { PostContainer, PostContainerInfo } from './style'
import Post from '../post'
import { PostContext } from '../../../context/PostContext'

export default function PostList() {
  const { post } = useContext(PostContext)

  useEffect(() => {}, [post])

  return (
    <PostContainer>
      <PostContainerInfo>
        <span>For You</span>
      </PostContainerInfo>

      {post?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={'Marcos'}
          email={'Marcos@gmail.com'}
          postTitle={post.title}
          body={post.body}
        />
      ))}
    </PostContainer>
  )
}
