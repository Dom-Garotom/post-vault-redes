import { useContext, useEffect } from 'react'

import { PostContainer, PostContainerInfo } from './style'
import Post from '../post'
import PopoverPost from '../popover'
import { PostContext } from '../../../context/PostContext'
import { fetchAndOrderDataPost } from '../../../utils/fectAndOrderDataPost'

export default function PostList() {
  const { post  ,  setPost} = useContext(PostContext);

  useEffect(() => {
    if (!post) {
      fetchAndOrderDataPost(setPost)
    }
  }, [])  

  return (
    <PostContainer>
      <PostContainerInfo>
        <span>For You</span>
        <PopoverPost postId={0}/>
      </PostContainerInfo>

      {post?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            userName={post.username}
            email={post.email}
            postTitle={post.title}
            body={post.body}
          />
      ))}
    </PostContainer>
  )
}
