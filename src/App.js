import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Events from './components/Events'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route path='/contact'><Contact/></Route>
      <Route path='/events' component={Events} />
      <Footer />  
    </Router>
  );
}

export default App;
