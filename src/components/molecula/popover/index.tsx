import { useState } from 'react'

import ConfigImage from '../../../assets/sliders-solid.svg'
import TrashImage from '../../../assets/trash.svg'
import { PopoverStyled } from './popoverStyled'
import { DropDown } from '../../atomo/dropDown'
import { NavLink } from 'react-router-dom'
import { deletePost } from '../deletePost'

type PopoverPostProps = {
  postId: number;
}

export default function PopoverPost( { postId } : PopoverPostProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleDeletePost = async () => {
    try {
      console.log(`Excluindo o post ID: ${postId}`);
      await deletePost(postId);
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
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
            <img src={TrashImage} width={20} height={20}/>
            <p onClick={handleDeletePost}>Exclude post</p>
          </DropDown.MenuItem>
        </DropDown.Menu>
      )}
    </PopoverStyled.Wrapper>
  )
}