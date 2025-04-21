import { useContext, useState } from 'react'
import { PostContext } from '../../../context/PostContext'
import { DropDown } from '../../atomo/dropDown'
import { PopoverStyled } from './popoverStyled'
import { PostModel } from '../../../models/post'

import ConfigImage from '../../../assets/sliders-solid.svg'
import TrashImage from '../../../assets/trash.svg'
import { NavLink } from 'react-router-dom'
import { FeedBackContext } from '../../../context/modules/FeedBackContext'

type PopoverPostProps = {
  postId: number
}

export default function PopoverPost({ postId }: PopoverPostProps) {
  const [isClicked, setIsClicked] = useState(false)
  const { setPost, post } = useContext(PostContext)
  const { showWarning } = useContext(FeedBackContext)

  const handleDeletePost = async () => {
    try {
      showWarning(`Seu post foi excluido com sucesso - postId : ${postId}`)
      const resultOfOperation = await PostModel.deletePost(postId)

      if (!resultOfOperation) {
        return
      }

      const newPostList = post?.filter((post) => post.id !== postId) ?? []
      setPost(newPostList)
    } catch (error) {
      console.error('Erro ao excluir o post:', error)
    }
  }

  return (
    <PopoverStyled.Wrapper>
      <PopoverStyled.Button onClick={() => setIsClicked(!isClicked)}>
        <img src={ConfigImage} width={20} height={20} />
      </PopoverStyled.Button>

      {isClicked && (
        <DropDown.Menu>
          <DropDown.MenuItem>
            <img src={ConfigImage} width={20} height={20} />
            <NavLink to={`/posts/edit/${postId}`} end>
              Edit post
            </NavLink>
          </DropDown.MenuItem>
          <DropDown.MenuItem>
            <img src={TrashImage} width={20} height={20} />
            <p onClick={handleDeletePost}>Exclude post</p>
          </DropDown.MenuItem>
        </DropDown.Menu>
      )}
    </PopoverStyled.Wrapper>
  )
}
