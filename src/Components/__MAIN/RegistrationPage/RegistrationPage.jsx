import React, { PureComponent } from 'react'
import {Switch, Route} from 'react-router-dom'

//PERSONAL COMPONENTS IMPORTS
import ChoosePlanStep from '../../RegistrationPage_SubComponents/ChoosePlanStep/ChoosePlanStep'
import EmailSubmit from '../../RegistrationPage_SubComponents/EmailSubmit/EmailSubmit'
import PasswordStep from '../../RegistrationPage_SubComponents/PasswordStep/PasswordStep'
import RecapStep from '../../RegistrationPage_SubComponents/RecapStep/RecapStep'

//STYLE
import './RegistrationPage.scss'

export default class RegistrationPage extends PureComponent {
    render() {
        return (
            <div id='registration-router'>
                <Switch>
                    <Route path='/registration' exact render={(props) => <EmailSubmit {...props}/>}/>
                    <Route path='/registration/password-step' exact render={(props) => <PasswordStep {...props}/>}/>
                    <Route path='/registration/choose-plan' exact render={(props) => <ChoosePlanStep {...props}/>}/>
                    <Route path='/registration/recap' exact render={(props) => <RecapStep {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
