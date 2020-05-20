import React from 'react';
import Signup from '../src/component/Signup/Signyp'
 import Login from '../src/component/Login/login'
 import Dash from '../src/component/Signup/Dashboard/dashboard'
 
import { BrowserRouter, Route, Link } from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Route  exact path="/" component={Signup}/>
       <Route  exact path="/login" component={Login}/>
       <Route  exact path="/dashboard" component= {Dash}/>



  
      </BrowserRouter>
    </div>
  );
}

export default App;
