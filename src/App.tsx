import Home from './views/home'
import Layout from './components/layout'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
