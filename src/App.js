import Home from './pages/home';
import Header from './components/header';
import {Route} from 'react-router-dom';
import Card from './pages/cart'
import './scss/app.scss'

const App = () => {
  return (
    <div className="App">
       <div className="wrapper">
      <Header />
      <Route exact path='/' render={Home} />
      <Route  path='/card' render={Card} />
    </div>
   </div>
  )
}
export default App;
