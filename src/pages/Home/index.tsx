import React from 'react'

import { Wrapper } from './style'
import PostList from '../../components/molecula/postList'
import CreatePost from '../../components/molecula/createPost'

const Home: React.FC = () => {
  return (
    <Wrapper.body>
      <CreatePost/>
      <PostList />
    </Wrapper.body>
  )
}

export default Home
