import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import { Products } from './Product'

export const Main = () => {
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
          <Redirect to='/home' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default Main
