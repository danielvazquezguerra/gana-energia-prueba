import React from 'react';
import './Header.scss';

const Header = () => {


    return (

        <nav>

            <div className="brandBox">

                <img src="images/ganaenergia-logo-blanco.png" alt="" />

            </div>

            <div className="buttonsBox">
                
                <a href="/">Así somos</a>
                <a href="/nosotros">Tarifas</a>
                <a href="/productos">Plan Amigo</a>
                <a href="/contact">Autoconsumo</a>

            </div>

            <div className="contactBox">

                <button className="ContratarButton">Contratar</button>

                <button className="AreaClientesButton">Area Clientes</button>



            </div>

            


        </nav>
    )
}

export default Header;
