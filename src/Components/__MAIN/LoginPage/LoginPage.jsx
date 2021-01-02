//MAIN IMPORTS
import React, { PureComponent } from 'react'

//FUNCTIONS IMPORTS
import { getData } from '../../../Utilities/Fetch/fetch'

//STYLE IMPORTS
import './LoginPage.scss'

export default class LoginPage extends PureComponent {

    state={
        userList : []
    }

    getUser = async () => {
        let result = await getData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'user')
        this.setState({userList : result})
    }

    componentDidMount(){
        this.getUser()
    }

    render() {
        return (
            <div id='login-page'>
                
            </div>
        )
    }
}
