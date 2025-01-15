import { Wrapper } from "./styles";
import LogoImage from "./assets/logo-image.png"
import UserImage from "./assets/user-image.png"
import GlobalStyle from "./styles/globalStyles";  
import PostList from "./components/molecula/postList";


export default function App() {
  return (
    <Wrapper.main>
      <GlobalStyle />
      <Wrapper.header>
        <img src={LogoImage} width={50} height={50} alt="lOGO  da empresa" />

        <div>
          <span>Search bar</span>
        </div>

        <img src={UserImage} width={50} height={50} alt="imagem do usuário" />
      </Wrapper.header>
      <Wrapper.body>
        <PostList/>
      </Wrapper.body>
    </Wrapper.main> 
  );
}


