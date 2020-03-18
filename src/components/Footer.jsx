import React from 'react'
import Logo from '../Assets/Statics/Logo blanco/logo.svg'

import '../Assets/Components/Footer.scss'

const Footer = () => {

    return (

        <footer className="footer">
            <div className="container">
                <div className="footer-miguel">
                    <p>
                        <img src={Logo} width="100" alt="Logo Miguel Jardinez" />
                    </p>
                </div>
                <div className="footer-diseno">
                    <p>Diseñado con 💖 por <a href="https://www.platzi.com" target="blank_">Platzi</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;