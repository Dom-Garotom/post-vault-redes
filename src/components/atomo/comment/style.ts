import { styled } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  border: 1px solid #dcdee0;
`

const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      border-radius: 8px;
    }

    h3 {
      width: 100%;
      font-weight: 700;
      font-size: 16px;
      color: #26292e;
      font-family: 'Inter', sans-serif;
    }

    span {
      width: 100%;
      font-size: 13px;
      color: #60656b;
      font-family: 'Inter', sans-serif;
    }
  }
`

const TitlePost = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  color: #26292e;
  font-family: 'Inter', sans-serif;
  margin-bottom: 10px;
`

const ParagraphPost = styled.p`
  width: 100%;
  font-family: 'Inter', sans-serif;
  color: #60656b;
`

const ListComment = styled.div`
  width: 100%;
  max-width: 630px;
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dcdee0;
`

export const PostStyled = {
  ListComment,
  Wrapper,
  WrapperInfo,
  ParagraphPost,
  TitlePost,
}
