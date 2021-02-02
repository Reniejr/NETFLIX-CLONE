import React, { PureComponent } from 'react'

//STYLE
import './AddedList.scss'

export default class AddedList extends PureComponent {

    state={
        toggle: false
    }

    toggleList(){
        this.setState({toggle: !this.state.toggle})
    }

    removeMovie = (data) => {
        this.props.remove(data)
    }

    postMovie = () => {
        this.props.confirm()
    }

    render() {
        let movieList;
        this.props.movieList === undefined
        ? movieList = []
        : movieList = this.props.movieList
        return (
            <div className='added-list' style={{marginRight: this.state.toggle? '0' : '-400px'}}>
                <div className="toggle" onClick={()=>{this.toggleList()}}></div>
                <p>Added List</p>
                <button className='confirm-btn' onClick={() => this.postMovie()}>Confirm</button>
                <div className="list">
                    {
                    movieList.length > 0
                    ? movieList.map(movie => {
                        return(
                            <div className="add-movie" style={{backgroundImage: `url("${movie.Poster}")`}} key={movie.imdbID}>
                                <button className='remove-btn' onClick={()=> this.removeMovie(movie)}>Remove</button>
                                <div className="title">
                                    <div className="glass"></div>
                                    <p>{movie.Title}</p>
                                </div>
                                <div className="preview-images">
                                </div>
                            </div>
                        )
                    })
                    : <p>No movie selected</p>
                    }
                </div>
            </div>
        )
    }
}
