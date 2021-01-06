import React, { PureComponent } from 'react'

//STYLE
import './Movie.scss'

export default class Movie extends PureComponent {
    render() {
        return (
            <div className='movie'>
                <img src="" alt=""/>
                <div className="movie-details">
                    <div className="movie-controls">
                        <i className="fas fa-play"></i>
                        <i className="fas fa-plus-circle"></i>
                        <i className="fas fa-thumbs-up"></i>
                        <i className="fas fa-thumbs-down"></i>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <span>flag</span><span>Duration</span>
                    <br/>
                    <span>Category</span>
                </div>
            </div>
        )
    }
}
