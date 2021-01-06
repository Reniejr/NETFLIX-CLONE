import React, { PureComponent } from 'react'

//PERSONAL COMPONENTS IMPORT
import BackMovie from '../BackMovie/BackMovie'

//STYLE
import './BackGallery.scss'

export default class BackGallery extends PureComponent {

    state={
        slider: 0
    }

    nextSlide = () => {
        this.state.slider === -100
        ? this.setState({slider : 0})
        : this.setState({slider : this.state.slider - 100})
    }

    prevSlide = () => {
        this.state.slider === 0
        ? this.setState({slider : -100})
        : this.setState({slider : this.state.slider + 100})
    }

    selectMovie = (movieId) => {
        this.props.chooseMovie(movieId)
    }

    render() {
        const { list } = this.props
        return (
            <div className='back-gallery' style={{marginLeft : `${this.state.slider}%`}}>
                <div className="back-movies-container">
                    {
                        list
                        ? list.map( movie => <BackMovie poster={movie.Poster} title={movie.Title} movie={movie} chooseMovie={()=>this.selectMovie(movie)} width={'8%'}/>)
                        : <h2>No Results</h2>
                    }
                </div>
                <button 
                onClick={() => this.prevSlide()}
                style={{
                    left: this.state.slider === 0 ? '10px' : 'calc(100% + 10px)'
                }}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                onClick={() => this.nextSlide()}
                style={{
                    right: this.state.slider === 0 ? '10px' : 'calc(-100% + 10px)'
                }}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        )
    }
}
