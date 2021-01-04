import React, { PureComponent } from 'react'
import {Switch, Route} from 'react-router-dom'


//PERSONAL COMPONENTS
import Navbar from '../../_GENERAL_SUBCOMP/Navbar/Navbar'
import HomePage from '../HomePage/HomePage'

//STYLE
import './CinemaRouter.scss'

export default class CinemaRouter extends PureComponent {
    render() {
        return (
            <div id='cinema-router'>
                <Navbar/>
                <Switch>
                    <Route path='/cinema-router/:accountId' exact render={(props)=><HomePage {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
