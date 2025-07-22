import styled from 'styled-components'

const Menu = styled.ul`
  position: absolute;
  width: inherit;
  min-width: 200px;
  list-style: none;
  z-index: 10;
  padding: 6px;
  background-color: #fff;
  border: 2px solid #dcdee0;
  border-radius: 8px;
  margin-top: 6px;
`

const MenuItem = styled.li`
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 4px;
  align-items: center;
  font-weight: 400;
  font-size: 14px;

  &:hover {
    background-color: rgb(244, 242, 248);
    cursor: pointer;
  }

  a{
    text-decoration : none;
    font-weight: 400;
    font-size: 14px;
    color: #000;
    flex: 1;
  }
`

export const DroppDown = {
  Menu,
  MenuItem,
}
