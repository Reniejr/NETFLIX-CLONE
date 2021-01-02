import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

//COMPONENTS
import Background from '../../_GENERAL_SUBCOMP/Background/Background'

//STYLE
import './EmailSubmit.scss'

export default class EmailSubmit extends PureComponent {
    render() {
        return (
            <div id='step1'>
                <Background/>
                <button  id='login'>
                    <Link to='/'>
                        Sign In
                    </Link>
                </button>
                <div className="email-submit">
                    <h2>Unlimited movies, TV <br/> shows, and more.</h2>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input type="email" placeholder='Email address'/><button>Get started</button>
                </div>
            </div>
        )
    }
}
