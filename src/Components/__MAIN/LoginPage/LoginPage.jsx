//MAIN IMPORTS
import React, { PureComponent } from 'react'

//FUNCTIONS IMPORTS
import { getData } from '../../../Utilities/Fetch/fetch'
import LoginForm from '../../LoginPage_SubComponents/LoginForm/LoginForm'

//STYLE IMPORTS
import './LoginPage.scss'

export default class LoginPage extends PureComponent {

    state={
        userList : []
    }

    getUser = async () => {
        let result = await getData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'user', null, null, null)
        this.setState({userList : result})
    }

    componentDidMount(){
        this.getUser()
    }

    render() {
        return (
            <div id='login-page'>
                <div className="img-bg">
                    <img src="./assets/login-bg.jpg" alt=""/>
                </div>
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <LoginForm/>
            </div>
        )
    }
}
