import React, { PureComponent } from 'react'
import FooterRegistration from '../FooterRegistration/FooterRegistration'
import HeaderRegistration from '../HeaderRegistration/HeaderRegistration'

import './RegistrationLayout.scss'

export default class RegistrationLayout extends PureComponent {
    render() {
        return (
            <div className='registration-layout'>
                <HeaderRegistration/>
                {this.props.children}
                <FooterRegistration/>
            </div>
        )
    }
}
