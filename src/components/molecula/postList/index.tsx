import React, { useEffect, useState } from 'react'

import { PostContainer, PostContainerInfo } from './style'
import PopoverPost from '../../atomo/popover'
import Post from '../post'
import { PostApi } from '../../../services/api/postApi'
import { Post as TypePost } from '../../../types/post'

export default function PostList() {
  const [postList , setPostList] = useState<TypePost[]>([])

  useEffect(() => {
    fetchPost();

  } , [])

  const fetchPost = async ()  => {
    try {
      const postResponse = await PostApi.get("/posts");
  
      if (!postResponse.data) {
        throw new Error("Não foi possivel realizar a requisição");
      }
  
      const postList : TypePost[]  = postResponse.data;
      setPostList(postList)
      
    } catch (error) {
      console.log("Error : " + error)
    }
  }

  return (
    <PostContainer>
      <PostContainerInfo>
        <span>For You</span>
        <PopoverPost />
      </PostContainerInfo>

      {postList.map(  post => (
        <Post
          key={post.id}
          userId={post.userId}
          postTitle={post.title}
          body={post.body}
        />
      )) }

    </PostContainer>
  )
}
