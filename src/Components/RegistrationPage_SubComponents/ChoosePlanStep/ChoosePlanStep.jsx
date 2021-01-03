import React, { PureComponent } from 'react'
import { RegistrationLayout, Steps } from '../_General_Subcomp/RegistrationLayout/RegistrationLayout'

//STYLE
import './ChoosePlanStep.scss'

export default class ChoosePlanStep extends PureComponent {
    render() {
        return (
            <div id='choose-plan'>
                <RegistrationLayout>
                    <div className="plan">
                        <i className="far fa-check-circle"></i>
                        <Steps steps={[2, 3]}/>
                        <h4>Choose your plan.</h4>
                        <ul>
                            <li><i className="fas fa-check"></i>No Commitments, cancel anytime.</li>
                            <li><i className="fas fa-check"></i>Since It is a clone... It is all free.</li>
                            <li><i className="fas fa-check"></i>Can see only in pc/desktops.</li>
                        </ul>
                        <button>Continue</button>
                    </div>
                </RegistrationLayout>
            </div>
        )
    }
}
