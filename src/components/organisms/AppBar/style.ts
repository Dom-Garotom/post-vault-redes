import styled from 'styled-components'
import colors from '../../../styles/colors'

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 100px;
  color: ${colors.white};
  border-bottom: 2px solid ${colors.grayLighter};

  input {
    border: none;
    background-color: rgba(240, 240, 240, 10);
    border-radius:20px;
    width: 400px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    color: #26292e;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }
`
