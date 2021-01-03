//MAIN
import React, { PureComponent } from 'react'
//COMPONENTS IMPORTS
import {Switch, Route} from 'react-router-dom'

//PERSONAL COMPONENTS
import BackOffice from '../BackOffice/BackOffice'
import LoginPage from '../LoginPage/LoginPage'
import ChoosePlanStep from '../../RegistrationPage_SubComponents/ChoosePlanStep/ChoosePlanStep'
import EmailSubmit from '../../RegistrationPage_SubComponents/EmailSubmit/EmailSubmit'
import PasswordStep from '../../RegistrationPage_SubComponents/PasswordStep/PasswordStep'
import RecapStep from '../../RegistrationPage_SubComponents/RecapStep/RecapStep'
//STYLE
import './RouterWeb.scss'
import Accounts from '../Accounts/Accounts'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <div id='router-web'>
                <Switch>
                    <Route path='/' exact render={(props) => <LoginPage {...props}/>}/>
                    <Route path='/admin' exact render={(props) => <BackOffice {...props}/>}/>
                    <Route path='/registration' exact render={(props) => <EmailSubmit {...props}/>}/>
                    <Route path='/registration/password-step' exact render={(props) => <PasswordStep {...props}/>}/>
                    <Route path='/registration/choose-plan' exact render={(props) => <ChoosePlanStep {...props}/>}/>
                    <Route path='/registration/recap' exact render={(props) => <RecapStep {...props}/>}/>
                    <Route path='/account/:userId' exact render={(props) => <Accounts {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
