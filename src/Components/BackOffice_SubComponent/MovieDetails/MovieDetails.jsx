import React, { PureComponent } from 'react'

//STYLE
import './MovieDetails.scss'

export default class MovieDetails extends PureComponent {

    state={
        rate:0,
        color:''
    }

    addList = (data) => {
        this.props.add(data)
        // console.log(data)
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        let colore = '',
            rate = 0
        if (prevProps.movie !== this.props.movie) {
            rate = parseFloat(this.props.movie.imdbRating)
            if (rate >= 0 && rate < 5.5) {
                colore = 'red'
            }
            if (rate > 5.4 && rate < 7.5) {
                colore = '#b0b01a'
            }
            if (rate > 7.4) {
                colore = 'green'
            }
            this.setState({color : colore})
            // console.log(rate, colore)
        }
    }

    render() {
        let movie;
        this.props.movie === undefined
        ? movie = {Title: '', imdbID: '', Year: '', Runtime: '', Genre: '', Director: '', Actors: '', Production: '', imdbRating: '', Plot: ''}
        : movie = {...this.props.movie}
        return (
            <div className='movie-details'>
                <div className="title">
                    <h2>{movie.Title}</h2><span>{movie.imdbID}</span> <button onClick={()=>this.addList(movie)}>Add</button>
                </div>
                <div className="date-time">
                    <span>{movie.Year}</span><span>{movie.Runtime}</span>
                </div>
                <p className='Genre'>Genre : {movie.Genre}</p>
                <p className='description'>
                    Director : {movie.Director}<br/>
                    Actors : {movie.Actors}<br/>
                    Production : {movie.Production}
                </p>
                <div className="rate">
                    <span>imdb Rating : </span><span style={{backgroundColor : this.state.color}}>{movie.imdbRating}</span>
                </div>
                <p className='plot'>
                    {movie.Plot}
                </p>
            </div>
        )
    }
}
