import React, { PureComponent } from 'react'

import './Background.scss'

export default class Background extends PureComponent {
    render() {
        return (
            <div className='background-img'>
                <img src="./assets/login-bg.jpg" alt=""/>
                <div className="logo">
                    <img src="" alt=""/>
                </div>
            </div>
        )
    }
}
