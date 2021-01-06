import React, { PureComponent } from 'react'

//STYLE
import './BackMovie.scss'

export default class BackMovie extends PureComponent {
    render() {
        const {poster, title} = this.props
        return (
            <div className='back-movie' style={{backgroundImage: `url("${poster}")`}}>
                <div className="title">
                    <div className="glass"></div>
                    <p>{title}</p>
                </div>
            </div>
        )
    }
}
