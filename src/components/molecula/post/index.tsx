import { PostStyled } from './postStyled'
import userImage from "../../../assets/user-image.png"
import PopoverPost from '../popover'

type PostProps = {
    userName: string ,
    email: string,
    postTitle: string,
    body: string
}

export default function Post({ postTitle, body, email , userName }: PostProps) {
    return (
        <PostStyled.Wrapper>
            <PostStyled.WrapperInfo>
                <div className='user-info'>
                    <img src={userImage} width={60} height={60} alt="Imagem do usuário" />
                    <div>
                        <h3>{userName}</h3>
                        <span>{email}</span>
                    </div>
                </div>
                <PopoverPost />
            </PostStyled.WrapperInfo>
            <PostStyled.TitlePost>{postTitle}</PostStyled.TitlePost>
            <PostStyled.ParagraphPost>{body}</PostStyled.ParagraphPost>
        </PostStyled.Wrapper>
    )
}
