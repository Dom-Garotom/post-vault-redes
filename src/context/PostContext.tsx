import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { PostModel } from '../models/post'
import { EditPostSchema } from '../types/post'

interface PostContextType {
  post: EditPostSchema[] | null
  setPost: React.Dispatch<React.SetStateAction<EditPostSchema[] | null>>
}

const defaultPostContext: PostContextType = {
  post: null,
  setPost: () => {},
}

export const PostContext = createContext<PostContextType>(defaultPostContext)

interface PostContextProviderProps {
  children: ReactNode
}

const PostContextProvider: React.FC<PostContextProviderProps> = ({
  children,
}) => {
  const [post, setPost] = useState<EditPostSchema[] | null>(null)

  useEffect(() => {
    if (!post) {
      fetchPost()
    }
  }, [post])

  const fetchPost = async () => {
    const posts = await PostModel.getAllPost()

    if (posts === null) {
      setPost([])
      return
    }

    setPost(posts)
  }

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
