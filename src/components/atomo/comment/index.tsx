import { PostStyled } from './style'
import userImage from '../../../assets/user-image.png'

type CommentProps = {
  userName: string
  email: string
  body: string
}

export default function Comment({ body, email, userName }: CommentProps) {
  return (
    <PostStyled.Wrapper>
      <PostStyled.WrapperInfo>
        <div className="user-info">
          <img src={userImage} width={50} height={50} alt="Imagem do usuário" />
          <div>
            <h3>{userName} </h3>
            <span>{email}</span>
          </div>
        </div>
      </PostStyled.WrapperInfo>
      <PostStyled.ParagraphPost>{body}</PostStyled.ParagraphPost>
    </PostStyled.Wrapper>
  )
}
