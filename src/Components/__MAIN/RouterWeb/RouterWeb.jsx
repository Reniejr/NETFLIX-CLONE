//MAIN
import React, { PureComponent } from 'react'
//COMPONENTS IMPORTS
import {Switch, Route} from 'react-router-dom'
import EmailSubmit from '../../RegistrationPage_SubComponents/EmailSubmit/EmailSubmit'
import PasswordStep from '../../RegistrationPage_SubComponents/PasswordStep/PasswordStep'

//PERSONAL COMPONENTS
import BackOffice from '../BackOffice/BackOffice'
import LoginPage from '../LoginPage/LoginPage'
//STYLE
import './RouterWeb.scss'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <div id='router-web'>
                <Switch>
                    <Route path='/' exact render={(props) => <LoginPage {...props}/>}/>
                    <Route path='/admin' exact render={(props) => <BackOffice {...props}/>}/>
                    <Route path='/registration' exact render={(props) => <EmailSubmit {...props}/>}/>
                    <Route path='/registration/password-step' exact render={(props) => <PasswordStep {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
