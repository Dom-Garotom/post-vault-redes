import styled from "styled-components"

export const PostContainer =  styled.div`
  max-width: 630px;
  width: 100%;
  height: 100%;
  min-block-size: 30vh;
  padding: 16px 0px;
  gap: 14px;
  border: 1px solid #DCDEE0;
  border-radius: 30px 30px 0px 0px;
  margin-bottom: 20px;
`
export const PostContainerInfo =  styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #DCDEE0;


  span{
    font-weight: 700;
    font-size: 20px;
  }
`