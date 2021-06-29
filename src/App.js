import './App.css'
import {ThemeProvider} from 'theme-ui'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import theme from './theme'
import Home from './routes/Home'
import GitUserDetails from './routes/GitUserDetails'

function AppRoutes() {
  return (
    <>
      <Switch>
        <Route path="/git-user-details/:id">
          <GitUserDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
