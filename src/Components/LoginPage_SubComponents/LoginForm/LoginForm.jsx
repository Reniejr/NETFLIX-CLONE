import React, { PureComponent } from 'react'

//COMPONENTS
import {Link} from 'react-router-dom'

//STYLE
import './LoginForm.scss'

export default class LoginForm extends PureComponent {
    render() {
        return (
            <div className='login-form'>
                <p>Sign In</p>
                <input type="text" placeholder='Email or phone number'/>
                <input type="password" placeholder='Password'/>
                <button id='sign-in'>Sign In</button>
                <div className="checkRemember">
                    <div className="checkbox">
                        <input type="checkbox" name="Remember me"/>
                        <label htmlFor="Remember me">Remember me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
                <div className="newAccount">
                    <span>New to StriveFlix?</span>
                    <Link to='/registration'>Sign up now</Link>
                </div>
            </div>
        )
    }
}
