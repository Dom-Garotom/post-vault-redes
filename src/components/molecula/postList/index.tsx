import { useEffect, useState } from 'react'

import { PostContainer, PostContainerInfo } from './style'
import Post from '../post'
import { Post as TypePost } from '../../../types/post'
import { fetchData } from '../../../utils/fetchData'
import { postWithUserInfo } from '../../../types/postWithUser'
import { mergePostWithUser } from '../../../utils/mergePostWithUser'
import { User } from '../../../types/userApi'
import PopoverPost from '../popover'
import { Link } from 'react-router-dom'

export default function PostList() {
  const [listPostWithUserInfo, setListPostWithUserInfo] = useState<
    postWithUserInfo[] | undefined
  >([])

  useEffect(() => {
    fetchAndOrderData()
  }, [])

  const fetchAndOrderData = async () => {
    try {
      const [userResponse, postResponse] = await Promise.all([
        fetchData<User>('/users'),
        fetchData<TypePost>('/posts'),
      ])

      if (!userResponse || !postResponse) {
        throw new Error('Não foi possível realizar a requisição dos dados')
      }

      const postList = postResponse
      const userList = userResponse

      // Retorna um objeto com as informações dos post atrelado com as informações dos usuários que fez o post
      const listPostWithUser = mergePostWithUser(postList, userList)
      setListPostWithUserInfo(listPostWithUser)
    } catch (error) {
      console.log('Error : ' + error)
    }
  }

  return (
    <PostContainer>
      <PostContainerInfo>
        <span>For You</span>
        <PopoverPost />
      </PostContainerInfo>

      {listPostWithUserInfo?.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id} className='Link'>
          <Post
            key={post.id}
            userName={post.username}
            email={post.email}
            postTitle={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </PostContainer>
  )
}
