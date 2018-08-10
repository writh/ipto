import React from 'react'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Form from "./components/Form"
import Details from './components/Details'
import Auth from './components/Auth'
import Map from './components/Map'

export default function Routes(){
    return (
        <Switch>
            <Route exact path= "/" component= {Auth}/>
            <Route path ="/map" component= {Map} />
            <Route path = "/details" component={Details}/>
            <Route path= '/new' component={Form}/>
        </Switch>
    )
}