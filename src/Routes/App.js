import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Layout from '../components/Layout';

//Ligar los componentes 
import Home from '../Containers/Home'
import NotFound from '../Containers/NotFound';


const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>


)
 
export default App;
