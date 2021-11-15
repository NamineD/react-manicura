import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import Cotizacion from './pages/Cotizacion'
import Galery from './pages/Galery'
import Home from './pages/Home'


const Main = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact render={Home} />
                <Route path='/galeria' exact render={Galery} />
                <Route path='/cotizacion' exact render={Cotizacion}/>
                <Route path='/contacto' render={Contact} />
            </Switch>
        </Router>
    )
}

export default Main