import React, { PureComponent } from 'react'

//PERSONAL COMPONENTS IMPORT
import BackMovie from '../BackMovie/BackMovie'

//STYLE
import './BackGallery.scss'

export default class BackGallery extends PureComponent {
    render() {
        const { list } = this.props
        return (
            <div className='back-gallery'>
                <div className="back-movies-container">
                    {
                        list
                        ? list.map( movie => <BackMovie poster={movie.Poster} title={movie.Title}/>)
                        : <h2>No Results</h2>
                    }
                </div>
            </div>
        )
    }
}
