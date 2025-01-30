import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 630px;
  padding: 20px;
  border-radius: 16px;
  border: solid 1px #dcdee0;
`

const HeaderForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`

const BodyForm = styled.div`
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 12px;
  gap: 12px;
`

export const InputForm = styled.input`
  width: 100%;
  font-size: 20px;
  color: #26292e;
  font-weight: 600;
  border: none;
  background-color: transparent;
  
  &::placeholder {
    color: #828282;
    font-weight: 600;
  }

  &:focus {
    outline: none;
  }
`

export const ButtonSubmit = styled.button`
    width: fit-content;
    padding:  8px  24px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    color: #fff;
    background-color: #1DA1F2;

    &:hover{
        background-color:rgb(29, 152, 228);
        cursor: pointer;
    }
`


export const Wrapper = {
    Form,
    HeaderForm,
    BodyForm,
}