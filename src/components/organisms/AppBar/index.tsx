import { useEffect, useContext } from 'react';
import { StyledHeader } from './style';
import { UserContext } from '../../../context/AppContext';
import optionsImage  from '../../../assets/options.png';
import userImage from "../../../assets/user-image.png";

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
        <img src={optionsImage} width={40} height={40} alt="options-icon" />
        <input type="text" placeholder='Search'/>
        <img src={userImage} width={60} height={60} alt="Imagem do usuário" className='user-profile' />
      </StyledHeader>
      <main>{children}</main>
    </div>
  )
}

export default AppBar
