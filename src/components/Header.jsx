import React from 'react'
import Logo from '../Assets/Statics/Logo blanco/logo.png'

import '../Assets/Components/Header.scss'

const HolaMundo = () => {

    return (
        <header className="header">
            <div className="container">
                <figure className="logo" href="#">
                    <img src={Logo} height="70" alt="Logo Miguel" />
                </figure>
                <nav className="menu">
                    <ol>
                        <li>
                            <a className="btn" href="#portfolio">Portafolio</a>
                        </li>
                        <li>
                            <a className="btn" href="#experience">Experiencia</a>
                        </li>
                        <li className="juntos btn-list">
                            <a href="#juntos">Trabajemos juntos</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    );
};

export default HolaMundo;