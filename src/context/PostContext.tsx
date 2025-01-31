import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { postWithUserInfo } from '../types/postWithUser'
import { fetchAndOrderDataPost } from '../utils/fectAndOrderDataPost'

interface PostContextType {
  post: postWithUserInfo[] | null
  setPost: React.Dispatch<React.SetStateAction<postWithUserInfo[] | null>>
}

const defaultPostContext: PostContextType = {
  post: null,
  setPost: () => {},
}

export const PostContext = createContext<PostContextType>(defaultPostContext)

interface PostContextProviderProps {
  children: ReactNode
}

const PostContextProvider : React.FC<PostContextProviderProps> = ({ children }) => {
  const [post, setPost] = useState<postWithUserInfo[] | null>(null)

  useEffect(() => {
    if (!post) {
      fetchAndOrderDataPost(setPost)
    }
  }, [])

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
