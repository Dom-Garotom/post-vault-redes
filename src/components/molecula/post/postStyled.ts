import { styled } from 'styled-components';
const Wrapper = styled.div`
    width: 100%;
    max-width: 630px;
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid #DCDEE0;
`

const WrapperInfo = styled.div`
    width: 100%;
    display:flex; 
    justify-content: space-between;

    .user-info{
        display: flex;
        align-items: center;
        gap: 10px;

        img{
            border-radius: 8px;
        }


        h3{
            width: 100%;
            font-weight: 700;
            font-size: 16px;
            color: #26292E;
            font-family: "Inter" , sans-serif;
        }

        span{
            width: 100%;
            font-size: 13px;
            color: #60656B;
            font-family: "Inter" , sans-serif;
        }
    }
`

export const TitlePost = styled.p`
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    color: #26292E;
    font-family: "Inter" , sans-serif;
`

export const ParagraphPost = styled.p`
    width: 100%;
    font-family: "Inter" , sans-serif;
    color: #60656B;
`

export const PostStyled = {
    Wrapper,
    WrapperInfo,
    ParagraphPost,
    TitlePost,
}