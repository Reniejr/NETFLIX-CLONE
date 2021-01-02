//MAIN
import React, { PureComponent } from 'react'
//COMPONENTS IMPORTS
import {Switch, Route} from 'react-router-dom'

//PERSONAL COMPONENTS
import BackOffice from '../BackOffice/BackOffice'
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
//STYLE
import './RouterWeb.scss'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <div id='router-web'>
                <Switch>
                    <Route path='/' exact render={(props) => <LoginPage {...props}/>}/>
                    <Route path='/admin' exact render={(props) => <BackOffice {...props}/>}/>
                    <Route path='/registration' exact render={(props) => <RegistrationPage {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
