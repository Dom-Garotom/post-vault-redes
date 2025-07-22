import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

const Popover = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #eaebec;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 201, 203);
  }
`

export const PopoverStyled = {
  Wrapper,
  Button: Popover,
}
