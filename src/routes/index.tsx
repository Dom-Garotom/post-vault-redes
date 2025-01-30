import React from 'react'
import { Route, Routes as Switch, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Post from '../pages/post'
import EditPostPage from '../pages/EditPost'

interface Props {
  children?: JSX.Element[] | JSX.Element
}

function Routes({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      {children}
      <Switch>
        <Route path="/" Component={Home} />
        <Route path="/posts/:id" Component={Post} />
        <Route path="/posts/edit/:postId" Component={EditPostPage} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
