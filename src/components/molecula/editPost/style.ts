import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 20px 0px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  max-width: 630px;
  border-radius: 16px;
  border: solid 2px #dcdee0;
`

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #dcdee0;

  span {
    font-weight: 700;
    font-size: 20px;
  }
`

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  max-width: 630px;
  padding: 16px;
  gap: 10px;

  .textAreaTitle {
    font-weight: 700;
    font-size: 2rem;
    color: #26292e;

    &::placeholder {
      color: #828282;
      font-weight: 700;
      font-size: 2.5rem;
    }
  }
`

export const EditButton = styled.button`
  width: fit-content;
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  color: #fff;
  background-color: #1da1f2;

  &:hover {
    background-color: rgb(29, 152, 228);
    cursor: pointer;
  }

  &:disabled{
    cursor: no-drop;
  }
`

export const Wrapper = {
  Container,
  Form,
  FormHeader,
  FormBody,
}
