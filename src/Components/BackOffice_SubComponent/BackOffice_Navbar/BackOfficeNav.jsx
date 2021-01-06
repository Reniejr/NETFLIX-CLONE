import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'


//STYLE
import './BackOfficeNav.scss'

export default class BackOfficeNav extends PureComponent {
    render() {
        return (
            <nav className='back-office-nav'>
                <Link>
                    <i className="fas fa-chevron-left"></i>
                    Back to home
                </Link>
                <p>StriveFlix</p>
                <Link>
                    Sign Out
                    <i className="fas fa-sign-out-alt"></i>
                </Link>
            </nav>
        )
    }
}
