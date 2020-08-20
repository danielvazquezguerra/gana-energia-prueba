import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//components. 

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import FormLeads from './Components/FormLeads/FormLeads';

function App() {
  
  return (

    <div className="App">

      <BrowserRouter>

      <section className="HeaderWrapper">

        <Header />

      </section>

      <section className="Switch">

      <Switch>

        <Route path="/" component= { Home } exact/>
        <Route path="/info" component= { FormLeads } exact/>
  
      </Switch>

      </section>

      <section className="FooterWrapper">

       <Footer /> 

      </section>



      </BrowserRouter>

    </div>
  );
}

export default App;
