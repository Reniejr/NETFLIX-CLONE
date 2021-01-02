import React, { PureComponent } from 'react'

import './BackOffice.scss'

import {getOmdb} from '../../../Utilities/Fetch/fetch'

export default class BackOffice extends PureComponent {

    state={
        pageFetch : 1,
        movies : []
    }

    nextFetch = async () => {
        this.setState({pageFetch : this.state.pageFetch +1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', 'pokemon', this.state.pageFetch)
        this.setState({movies : result})
    }

    prevFetch = async () => {
        this.setState({pageFetch : this.state.pageFetch -1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', 'pokemon', this.state.pageFetch)
        this.setState({movies : result})
    }

    componentDidMount = async () => {
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', 'pokemon', this.state.pageFetch)
        this.setState({movies : result})
    }

    render() {
        return (
            <div id='back-office'>
                {this.state.movies.map(movie => {
                    return (
                        <div className="movie" key={movie.imdbID}>
                            {movie.Title}
                        </div>
                    )
                })}
                <button onClick={()=>this.prevFetch()}>prev</button>
                <button onClick={()=>this.nextFetch()}>next</button>             
            </div>
        )
    }
}
