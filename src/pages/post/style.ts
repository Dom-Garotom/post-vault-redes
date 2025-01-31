import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`

export const PostContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 630px;
  border: 1px solid #dcdee0;
  gap: 10px;
  margin: 0 auto;
  grid-column: 2;
`

export const PostContainerInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .container-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    width: 100%;
    font-weight: 700;
    font-size: 2rem;
    color: #26292e;
    font-family: 'Inter', sans-serif;
    margin-bottom: 16px;
    word-wrap: break-word;
    overflow: break-word;
  }

  p {
    width: 100%;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    color: #60656b;
    word-wrap: break-word;
    overflow: break-word;
    line-height: 1.5;
  }
`
export const ProfileDetailStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 323px;
    grid-column: 3;
    height: 320px;
`
