import { useState } from 'react'

import ConfigImage from '../../../assets/sliders-solid.svg'
import TrashImage from '../../../assets/trash.svg'
import { PopoverStyled } from './popoverStyled'
import { DropDown } from '../../atomo/dropDown'
import { NavLink } from 'react-router-dom'

type PopoverPostProps = {
  postId: number
}

export default function PopoverPost( { postId } : PopoverPostProps) {
  const [isClicked, setIsClicked] = useState(false)

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
            Exclude post
          </DropDown.MenuItem>
        </DropDown.Menu>
      )}
    </PopoverStyled.Wrapper>
  )
}
