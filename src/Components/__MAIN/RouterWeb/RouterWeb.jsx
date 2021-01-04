//MAIN
import React, { PureComponent } from 'react'
//COMPONENTS IMPORTS
import {Switch, Route} from 'react-router-dom'

//PERSONAL COMPONENTS
import BackOffice from '../BackOffice/BackOffice'
import LoginPage from '../LoginPage/LoginPage'
import Accounts from '../Accounts/Accounts'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import CinemaRouter from '../CinemaRouter/CinemaRouter'
//STYLE
import './RouterWeb.scss'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <div id='router-web'>
                <Switch>
                    <Route path='/' exact render={(props) => <LoginPage {...props}/>}/>
                    <Route path='/admin' exact render={(props) => <BackOffice {...props}/>}/>
                    <Route path='/registration' render={(props) => <RegistrationPage {...props}/>}/>
                    <Route path='/account/:userId' exact render={(props) => <Accounts {...props}/>}/>
                    <Route path='/cinema-router/:accountId' exact render={(props) => <CinemaRouter {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
