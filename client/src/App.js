import './App.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GameDetail from './components/GameDetails/GameDetails';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
    <Switch>
  
    <Route exact path='/'> <Landing /> </Route>
    <Route path='/home'> <Home /> </Route>
    <Route path="/gamedetail/:id"> <GameDetail /> </Route> 
    <Route path="/creategame/"> <Form /> </Route> 
   
    
    


    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
