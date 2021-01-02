import React, { PureComponent } from 'react'
import {Switch, Route} from 'react-router-dom'
import EmailSubmit from '../../RegistrationPage_SubComponents/EmailSubmit/EmailSubmit'

//PERSONAL COMPONENTS IMPORTS

//STYLE
import './RegistrationPage.scss'

export default class RegistrationPage extends PureComponent {
    render() {
        return (
            <div id='registration-page'>
                <Switch>
                    <Route path='/registration' exact render={(props) => <EmailSubmit {...props}/>}/>
                </Switch>
            </div>
        )
    }
}
