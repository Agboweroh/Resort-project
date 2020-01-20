import React from 'react';
// import logo from './logo.svg';
   import './App.css';
   import Home from './pages/Home';
   import Rooms from './pages/Rooms';
   import Error from './pages/Error';
   import SingleRoom from './pages/SingleRoom';
   import {Route ,Switch} from "react-router-dom";
   import Navbar from "./components/Navbar";

function App() {
  return (

 
    <>
    <Navbar>
    
    </Navbar>
    <Switch>
    <Route exact path="/" component= {Home}/>
    <Route exact path="/rooms" component= {Rooms}/>
    <Route  component= {Error}/>
    <Route exact path="/single-room/:slug" component= {SingleRoom}/>
  
    </Switch>
   
    </>
  );
}

export default App;
