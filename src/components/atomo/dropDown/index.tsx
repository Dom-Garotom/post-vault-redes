import { ComponentProps, ReactNode } from 'react'
import { DroppDown } from './style'

type DropDownProps = ComponentProps<'ul'> & {
  children: ReactNode
}

type DropDownItemProps = ComponentProps<'li'> & {
  children: ReactNode
}

function root({ children, ...rest }: DropDownProps) {
  return <DroppDown.Menu {...rest}>{children}</DroppDown.Menu>
}

function item({ children, ...rest }: DropDownItemProps) {
  return <DroppDown.MenuItem {...rest}>{children}</DroppDown.MenuItem>
}

export const DropDown = {
  Menu: root,
  MenuItem: item,
}
