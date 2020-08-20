import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (

    <div className="App">

      <section className="HeaderWrapper">

        <Header />

      </section>

      <section className="HomeWrapper">

        <Home />

      </section>

      <section className="FooterWrapper">

       <Footer /> 

      </section>





    </div>
  );
}

export default App;
