import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

//STYLE
import './HeaderRegistration.scss'

export default class HeaderRegistration extends PureComponent {
    render() {
        return (
            <div className='header-registration'>
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <Link to='/registration'>Sign In</Link>
            </div>
        )
    }
}
