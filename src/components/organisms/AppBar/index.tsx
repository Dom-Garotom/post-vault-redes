import { useEffect, useContext } from 'react'
import { StyledHeader } from './style'
import { UserContext } from '../../../context/AppContext'

type Props = {
  children: JSX.Element
}

const AppBar: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log('user:', user)
  }, [user])

  return (
    <div>
      <StyledHeader>
        Header
      </StyledHeader>
      <main>{children}</main>
    </div>
  )
}

export default AppBar
