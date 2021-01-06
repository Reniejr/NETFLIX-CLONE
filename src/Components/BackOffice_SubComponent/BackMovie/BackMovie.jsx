import React, { PureComponent } from 'react'

//STYLE
import './BackMovie.scss'

export default class BackMovie extends PureComponent {

    render() {
        const {poster, title, width} = this.props
        return (
            <div className='back-movie' style={{backgroundImage: `url("${poster}")`, width: width}} onClick={this.props.chooseMovie}>
                <div className="title">
                    <div className="glass"></div>
                    <p>{title}</p>
                </div>
            </div>
        )
    }
}
