import './App.css'
import {ThemeProvider} from 'theme-ui'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Home</div>
    </ThemeProvider>
  )
}

export default App
