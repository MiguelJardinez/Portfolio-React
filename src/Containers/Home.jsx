import React from 'react';

//Componentes
import Hero from '../components/Hero'; 
import Portfolio from '../components/Portfolio';
import Experiencia from '../components/Experiencia';
import TituloExperiencia from '../components/TituloExperiencia';
import Presentacion from '../components/Presentacion';
import Formulario from '../components/Formulario';




const Home = () => (

    <>
        <Hero />
        <Portfolio />
        <TituloExperiencia />
        <Experiencia />
        <Presentacion />
        <Formulario />
    </>
)
 
export default Home;