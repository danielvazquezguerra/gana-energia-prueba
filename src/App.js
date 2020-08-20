import React from 'react';
import './App.scss';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  
  return (

    <div className="App">

      <section className="HeaderWrapper">

        <Header />

      </section>

      <section className="HomeWrapper">

        <Home />

      </section>

      <img className="ImageBackground" alt="" src="images/ganaenergia-bottom.png" />


    </div>
  );
}

export default App;
