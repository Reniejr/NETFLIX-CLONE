import React, { PureComponent } from 'react'
import {Container} from 'react-bootstrap'

//PERSONAL COMPONENTS
import FooterRegistration from '../FooterRegistration/FooterRegistration'
import HeaderRegistration from '../HeaderRegistration/HeaderRegistration'

import './RegistrationLayout.scss'

export class RegistrationLayout extends PureComponent {
    render() {
        return (
            <div className='registration-layout'>
                <HeaderRegistration/>
                <Container>
                    {this.props.children}
                </Container>
                <FooterRegistration/>
            </div>
        )
    }
}

export class Steps extends PureComponent {
    render(){
        return(
            <div className="steps">
                <span>Step </span>
                <span>{this.props.steps[0]} </span>
                <span>Of </span>
                <span>{this.props.steps[1]}</span>
            </div>
        )
    }
}
