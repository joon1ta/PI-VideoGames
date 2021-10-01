import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Switch>
  

    <Route path='/'> <Home /> </Route>

   

    


    </Switch>
  </BrowserRouter>
  );
}

export default App;
