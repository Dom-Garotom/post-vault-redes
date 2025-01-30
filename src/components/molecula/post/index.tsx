import { PostStyled } from './postStyled'
import userImage from "../../../assets/user-image.png"
import PopoverPost from '../popover'
import { Link } from 'react-router-dom'

type PostProps = {
    id : number,
    userName: string ,
    email: string,
    postTitle: string,
    body: string
}

export default function Post({ postTitle, body, email , userName , id }: PostProps) {
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
                <PopoverPost postId={id} />
            </PostStyled.WrapperInfo>
            <Link to={`/posts/${id}`} key={id} className='Link'>
                <PostStyled.TitlePost>{postTitle}</PostStyled.TitlePost>
                <PostStyled.ParagraphPost>{body}</PostStyled.ParagraphPost>
            </Link>
        </PostStyled.Wrapper>
    )
}
