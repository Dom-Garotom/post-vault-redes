import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 323px;
  padding: 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #dcdee0;

  h2 {
    font-weight: 700;
    font-size: 30px;
    color: #26292e;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px;
  }

  .button-follow {
    width: 100%;
    padding: 10px;
    background-color: #EAEBEC;
    color: #63686D;
    border: none;
    border-radius: 5px;
    cursor: not-allowed; 
    opacity: 0.7;
    
    &:hover {
        opacity: 1;
    }
  }
`
export const WrapperDataUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`

export const WrapperInfo = styled.div`
  margin-bottom: 10px;

  p {
    margin-bottom: 10px;
  }
`