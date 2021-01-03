import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

//PERSONAL COMPONENTS IMPORTS
import {RegistrationLayout, Steps} from '../_General_Subcomp/RegistrationLayout/RegistrationLayout'

//STYLE
import './PasswordStep.scss'

export default class PasswordStep extends PureComponent {
    render() {
        return (
            <div id='password-step'>
                <RegistrationLayout>
                    <Steps steps={[1, 3]}/>
                    <h4>Welcome! <br/>Joining Netflix is easy.</h4>
                    <p>Enter your password and you'll be watching in no time.</p>
                    <div className="email">
                        <p>Email</p>
                        <p>Props Email</p>
                    </div>
                    <input type="password" placeholder='Enter your password'/>
                    <Link>Forgot your password?</Link>
                    <br/>
                    <button>Continue</button>
                </RegistrationLayout>
            </div>
        )
    }
}
