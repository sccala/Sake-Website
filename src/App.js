import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Products } from './components/Product'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
