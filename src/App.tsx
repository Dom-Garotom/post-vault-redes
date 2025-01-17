import './styles/app.scss'
import Routes from './routes'

import AppContext from './context/AppContext'
import AppBar from './components/organisms/AppBar'
import { BrowserRouter } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="app">
      <AppContext>
        <BrowserRouter>
          <AppBar>
            <Routes />
          </AppBar>
        </BrowserRouter>
      </AppContext>
    </div>
  )
}

export default App
