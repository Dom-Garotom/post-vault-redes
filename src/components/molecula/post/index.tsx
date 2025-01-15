import { PostStyled } from './postStyled'
import UserInfoInPost from './userInfoInPost'

type PostProps = {
    userId: number,
    postTitle: string,
    body: string
}

export default function Post({ postTitle, body, userId }: PostProps) {
    return (
        <PostStyled.Wrapper>
            <UserInfoInPost userId={userId} />
            <PostStyled.TitlePost>{postTitle}</PostStyled.TitlePost>
            <PostStyled.ParagraphPost>{body}</PostStyled.ParagraphPost>
        </PostStyled.Wrapper>
    )
}
