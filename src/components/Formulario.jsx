import React from 'react';
import '../Assets/Components/Formulario.scss';

const Formulario = () => {


    return (

        <section id="contacto" className="contact">
            <div className="container">
                <form className="form-email">
                    <h3>¿Creamos algo juntos?</h3>
                    <input type="text" placeholder="Dejame tu email" id="email" />
                    <div className="container-button">
                        <button className="btn">Enviar</button>
                    </div>
                </form>
                <div className="social">
                    <a href="https://www.facebook.com/miguelangel.jardinezramos" target="blank_" className="social-link facebook"></a>
                    <a href="https://www.instagram.com/jardinezgram" target="blank_" className="social-link instagram"></a>
                    <a href="https://www.behance.net/migueljardine" target="blank_" className="social-link behance"></a>
                    <a href="https://github.com/MiguelJardinez" target="blank_" className="social-link github"></a>
                    <a href="https://api.whatsapp.com/send?phone=527911028540" target="blank_" className="social-link whatsapp"></a>
                </div>
            </div>
        </section>
    );
}

export default Formulario;