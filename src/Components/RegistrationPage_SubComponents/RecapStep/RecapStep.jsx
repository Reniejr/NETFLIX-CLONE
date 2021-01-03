import React, { PureComponent } from 'react'
import { RegistrationLayout } from '../_General_Subcomp/RegistrationLayout/RegistrationLayout'

//STYLE
import './RecapStep.scss'

export default class RecapStep extends PureComponent {
    render() {
        return (
            <div id='recap'>
                <RegistrationLayout>
                    <h4>Congratulations!</h4>
                    <p>You have completed the registration for this awesome platform.</p>
                    <p>This are your information:</p>
                    <ul>
                        <li>
                            <span>E-mail</span>
                            <br/>
                            <input type="email" readOnly/>
                        </li>
                        <li>
                            <span>Password</span>
                            <br/>
                            <input type="password" readOnly/>
                        </li>
                        <li>
                            <span>Plan</span>
                            <br/>
                            All free plan.
                            <br/>
                            Movies are chosen by RenieJrDev.
                        </li>
                    </ul>
                    <button>Cinema Time</button>
                </RegistrationLayout>
            </div>
        )
    }
}
