import './styles/app.scss'
import Routes from './routes'

import AppContext from './context/AppContext'
import AppBar from './components/organisms/AppBar'
import { BrowserRouter } from 'react-router-dom'
import PostContextProvider from './context/PostContext'

function App(): JSX.Element {
  return (
    <div className="app">
      <AppContext>
        <PostContextProvider>
          <BrowserRouter>
            <AppBar>
              <Routes />
            </AppBar>
          </BrowserRouter>
        </PostContextProvider>
      </AppContext>
    </div>
  )
}

export default App
