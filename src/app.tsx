import './styles/app.scss'
import Routes from './routes'

import AppContext from './context/AppContext'
import AppBar from './components/organisms/AppBar'
import { BrowserRouter } from 'react-router-dom'
import PostContextProvider from './context/PostContext'
import FeedBackProvider from './context/FeedBackProvider'

function App(): JSX.Element {
  return (
    <div className="app">
      <AppContext>
        <PostContextProvider>
          <BrowserRouter>
            <AppBar>
              <FeedBackProvider>
                <Routes />
              </FeedBackProvider>
            </AppBar>
          </BrowserRouter>
        </PostContextProvider>
      </AppContext>
    </div>
  )
}

export default App
