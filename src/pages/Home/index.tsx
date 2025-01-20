import React from 'react'
import PostList from '../../components/molecula/postList'

import { Wrapper } from './style'

const Home: React.FC = () => {
  return (
      <Wrapper.body>
        <PostList />
      </Wrapper.body>
  )
}

export default Home
