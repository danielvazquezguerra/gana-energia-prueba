import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';



const Home = () => {

    return (

        <div className="HomeMain">

            <div className="HomeMainLeft" />

            <div className="HomeMainRight">

                <div className="TextoLead">

                    <img src="images/100-renovable.png" alt="energia 100% renovable"/>
                     {/* <button action="/info" className="LlamamosButton">Te llamamos?</button> */}
                     <NavLink className="LlamamosButton" to='/info' exact>Te llamamos?</NavLink>
                    
                </div>

            </div>



            <img className="ImageBackground" alt="fondo ecologico" src="images/ganaenergia-bottom-1.png" />
            <img className="CirculoVerde" alt="circulo verde" src="images/circulo-verde.png" />

        </div>
    )
}

export default Home;
