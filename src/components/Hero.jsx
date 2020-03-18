import React from 'react';
import '../Assets/Components/Hero.scss';


const Hero = () => {


    return (

        <section className="hero">
            <div className="container">
                <h1>Hola! Soy <strong>Miguel Jardinez</strong> <br />
                    <span id="typed"></span>  <strong>Fronte-End</strong> con
                    <br />
                    pasion por <strong>Aprender</strong>
                </h1>
                <img className="hero-image" src="https://i.postimg.cc/5Nr9t86T/hero.jpg" width="500" height="300" alt="Imagen bonita" />
            </div>
        </section>
    );
}

export default Hero;