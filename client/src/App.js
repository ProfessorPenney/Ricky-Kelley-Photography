import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {
   return (
      <div className='App'>
         <Router>
            <Route exact path='/' component={Index} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/testimonials' component={Testimonials} />
            <Route render={() => <Redirect to={{ pathname: '/' }} />} />
         </Router>
      </div>
   )
}

export default App
