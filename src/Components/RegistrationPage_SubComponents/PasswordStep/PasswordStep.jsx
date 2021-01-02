import React, { PureComponent } from 'react'
import {Container} from 'react-bootstrap'

//PERSONAL COMPONENTS IMPORTS
import RegistrationLayout from '../_General_Subcomp/RegistrationLayout/RegistrationLayout'

//STYLE
import './PasswordStep.scss'

export default class PasswordStep extends PureComponent {
    render() {
        return (
            <div id='password-step'>
                <RegistrationLayout>
                    <Container>
                        <span>Step </span>
                        <span>1 </span>
                        <span>Of </span>
                        <span>3</span>
                        <h3>Welcome! <br/>Joining Netflix is easy.</h3>
                        <p>Enter your password and you'll be watching in no time</p>
                        <p>Email</p>
                        <p>Props Email</p>
                        <input type="password" placeholder='Enter your password'/>
                        <p>Forgot your password?</p>
                        <button>Continue</button>
                    </Container>
                </RegistrationLayout>
            </div>
        )
    }
}
