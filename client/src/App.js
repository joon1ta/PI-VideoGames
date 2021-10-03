import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Switch>
  
    <Route exact path='/'> <Landing /> </Route>
    <Route path='/'> <Home /> </Route>

   

    


    </Switch>
  </BrowserRouter>
  );
}

export default App;
