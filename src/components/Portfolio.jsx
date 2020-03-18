import React from 'react'
import '../Assets/Components/Portfolio.scss'; 

const Portfolio = () => {


    return (

        <section id="portfolio" className="portfolio">
            <div className="container">
                <h2 id="titulo">Portafolio (Proyectos Destacados)</h2>
                <article className="project">
                    <div className="project-details">
                        <h3 className="project-tittle">WEB Salones Guadalupe</h3>
                        <h6 className="project-course">Desarrollo web Responsive</h6>
                        <p className="project-date"><small><strong>Fecha: </strong>05 de Marzo del 2019</small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a target="blank_"
                            href="http://salonesguadalupe.com/">www.salonesguadalupe.com</a></small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a target="blank_"
                            href="https://github.com/MiguelJardinez/SalonesGuadalupe">https://github.com/MiguelJardinez/SalonesGuadalupe</a></small>
                        </p>
                        <p className="project-description">
                            Salones Guadalupe fue un proyecto el cual esta centrado en mostrar la elegancia y calidad de la
                            empresa,
                            cuenta con diferentes funciones para mantener un trato directo con el cliente con gran eficacia
                            y rapidez,
                            esta pagina cuenta con Pixel de facebook para rastrear eventos para futuro marketing,
                            chat de facebook para mejor interaccion con el usuario y librerias de javascript para
                            galeria y animaciones.
                </p>
                    </div>
                    <figure className="project-imageContainer">
                        <img className="project-image" src="https://i.postimg.cc/xCLbfgGG/Proyect-salones-Guadalupe.jpg" width="500" alt="Imagen de platzi video" />
                    </figure>
                </article>

                <article className="project">
                    <div className="project-details">
                        <h3 className="project-tittle">Rocket pizza</h3>
                        <h6 className="project-course">Adobe XD diseño de (UI/UX)</h6>
                        <p className="project-date"><small><strong>Fecha: </strong>02 de Junio del 2019</small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a
                            href="https://www.behance.net/gallery/81414863/Rocket-Pizza-UI"
                            target="blank_">https://www.behance.net/migueljardine</a></small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a
                            href="https://github.com/MiguelJardinez/RocketPizza"
                            target="blank_">https://github.com/MiguelJardinez/RocketPizza</a></small></p>
                        <p className="project-description">
                            La interfaz de usuario Rocket pizza esta diseñada, pensando en un servicio rapido y útil en
                            envio a domicilio de comida rapida,
                            Esta (UI) fue desarrollada con la ayuda de los software Adobe Xd y Adobe illustratos cuenta con
                            microinteracciónes (UX) para pruebas de funcionalidad.
                        </p>
                    </div>
                    <figure className="project-imageContainer">
                        <img className="project-image" src="https://i.postimg.cc/NGN3xdsJ/Project-Rocket-Pizza.jpg" width="500" alt="Imagen de platzi video" />
                    </figure>
                </article>

                <article className="project">
                    <div className="project-details">
                        <h3 className="project-tittle">Platzi Hawaii</h3>
                        <h6 className="project-course">Bootstrap 4</h6>
                        <p className="project-date"><small><strong>Fecha: </strong>02 de Junio del 2019</small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a
                            href="https://migueljardinez.github.io/platzihawaii/"
                            target="blank_">https://migueljardinez.github.io/platzihawaii/</a></small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a
                            href="https://github.com/MiguelJardinez/platzihawaii"
                            target="blank_">https://github.com/MiguelJardinez/platzihawaii</a></small></p>
                        <p className="project-description">
                            Landign page creada a partir de Boostrap 4, se desarrollo con la finalidad de ofrecer
                            información sobre la proxima platziconf 2020
                            este proyecto se implemento el uso de las grillas integradas en bootstrap, asi como diferentes
                            complementos como lo son el carrusel de galria,
                            las cartas de los speakers y un formulario para poder asistir a la charla y sor ponente
                            implementado con una ventana modal.
                        </p>
                    </div>
                    <figure className="project-imageContainer">
                        <img className="project-image" src="https://i.postimg.cc/fWpmcty0/Platzi-hawaii.jpg" width="500"  alt="Imagen de platzi video" />
                    </figure>
                </article>

                <article className="project">
                    <div className="project-details">
                        <h3 className="project-tittle">NearvyTech</h3>
                        <h6 className="project-course">Ecommerce Shopify</h6>
                        <p className="project-date"><small><strong>Fecha: </strong>02 de Diciembre del 2018</small></p>
                        <p className="project-url"><small><strong>Puedes verlo en: </strong><a href="https://nearvytech.com/"
                            target="blank_">https://nearvytech.com/</a></small></p>
                        <p className="project-description">
                            Es una pagina web enfocada al ecommerce en donde se venden productos de bebé, se desarrollo la
                            web para oprimizar las
                            conversiones y asi ayudar a los anuncios a convertir mejor, cuenta con diferentes plugins para
                            mejorar la atención al cliente,
                            se implemento el pixel de facebook para mejorar continuamente los enbudos de venta.
                        </p>
                    </div>
                    <figure className="project-imageContainer">
                        <img className="project-image" src="https://i.postimg.cc/6Qvw2pjw/nearvyte.jpg" width="500" alt="Imagen de platzi video" />
                    </figure>
                </article>

            </div>
        </section>
    );
}

export default Portfolio;