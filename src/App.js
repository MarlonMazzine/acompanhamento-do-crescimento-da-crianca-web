import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Calculator from './Pages/Calculator'
import Patients from './Pages/Patients'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/inicio'>
          <Navbar />
          <Home />
        </Route>
        <Route path='/calculadora'>
          <Navbar />
          <Calculator />
        </Route>
        <Route path='/pacientes'>
          <Navbar />
          <Patients />
        </Route>
        <Route path='*'>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
