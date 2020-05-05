import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/Logon';
import Home from './pages/Home';
import Consulta from './pages/Consulta';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon }></Route>
                <Route path="/home" component={ Home }></Route>
                <Route path="/consulta" component={ Consulta }></Route>
                <Route path="/cadastro" component={ Cadastro }></Route>
            </Switch>
        </BrowserRouter>
    );
}