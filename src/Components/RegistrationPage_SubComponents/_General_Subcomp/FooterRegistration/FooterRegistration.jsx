import React, { PureComponent } from 'react'

import './FooterRegistration.scss'

export default class FooterRegistration extends PureComponent {
    render() {
        return (
            <div className='footer-registration'>
                <p>Questions? Contact us.</p>
                <ul>
                    <li>FAQ</li>
                    <li>Help Center</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                </ul>
                <ul>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                </ul>
                <button>
                    <i className="fas fa-globe"></i>
                    Language
                </button>
            </div>
        )
    }
}
