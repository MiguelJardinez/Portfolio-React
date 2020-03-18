import React from 'react'
import '../Assets/Components/Experiencia.scss';

const Experiencia = () => {


    return (

        <section className="experience-list">
            <div className="container">
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/RZcrztfc/email.jpg" alt="Email Marketing" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Email Marketing</h3>
                        <p className="experience-description">
                            Conocimientos sobre secuencia de Email marketing para negocios online
                            asi como en tiendas en linea como Shopify o Woocommerce al igual
                            que otros modelos de negocios como la venta de infoproductos
                            o marketing de afiliados con herramientascomo lo son klaviyo, mailChimp o
                            Clickfunnels
                        </p>
                        <a className="experience-url btn-list" href="https://www.klaviyo.com/" target="blank_">Herramienta
                    utilizada </a>
                    </div>
                </article>
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/WpXbQBj2/desarrollo.jpg" height="500" alt="Email Marketing" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Desarrollo Web</h3>
                        <p className="experience-description">
                            Conocimiento y experiencia en el desarrollo web Frontend
                            con HTML 5, JavaScript, CSS y Bootstrap. con el cual he desarrollado
                            landing pages para paginas de evento y formularios, conocimiento
                            en el desarrollo de animaciones Web con CSS3.
                        </p>
                        <a className="experience-url btn" href="https://migueljardinez.github.io/platzihawaii/"
                            target="blank_">Ver Proyectos</a>
                    </div>
                </article>
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/C5PhkqJZ/ecommerce.jpg" height="500" alt="tiendas en linea" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Creacion de tiendas en linea</h3>
                        <p className="experience-description">
                            Conocimiento y experiencia en la creacion de tiendas
                            digitales en shopify, para crear una tienda
                            desde 0 ya sea de rama general o de algun nicho
                            con la implentacion completa desde agregar los productos
                            añadir descripciones, configurar procesadores de pago como los son
                            2CheckOut o STRIPE.
                        </p>
                        <a className="experience-url btn-list" href="https://nearvytech.com/" target="blank_">Ver tienda</a>
                    </div>
                </article>
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/JzBrHtXn/facebook.jpg" height="500" alt="Email Marketing" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Chatbots y campañas con facebook</h3>
                        <p className="experience-description">
                            Experiencia en el desarrollo de chatbots de messenger para automatizar el servicio al cliente
                            y generar una secuencia de marketing utilizando esta poderosa herramienta
                        </p>
                        <a className="experience-url btn-list" href="https://github.com/MiguelJardinez/chatbootmessenger"
                            target="blank_">Ver chatbot</a>
                    </div>
                </article>
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/QxCxsfxc/formacion.jpg" height="500" alt="Email Marketing" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Certificados</h3>
                        <p className="experience-description">
                            Certificados que habalan mi conocimiento
                            como desarrolaldor fronten asi como sus respectivos links para que puedan ver
                            la empresa que los otorga su carrera y el respaldo con el que cuenta mi conocimiento
                            y experiencia
                        </p>
                        <a className="experience-url btn-list" href="https://platzi.com/@MiguelJardinez/" target="blank_">Ver
                    certificados</a>
                    </div>
                </article>
                <article className="experience">
                    <figure className="experience-imageContainer">
                        <img className="experience-image" src="https://i.postimg.cc/Y9xq2VWz/animacion-css.jpg" height="500" alt="Email Marketing" />
                    </figure>
                    <div className="experience-details">
                        <h3 className="experience-tittle">Diseño web (UI/UX)</h3>
                        <p className="experience-description">
                            Proyectos personales con las herramientas de diseño Illustrator, Photoshop, adobe XD
                        </p>
                        <a className="experience-url btn-list" href="" target="blank_">Ver animaciones</a>
                    </div>
                </article>
            </div>
        </section>
     );
}

export default Experiencia;