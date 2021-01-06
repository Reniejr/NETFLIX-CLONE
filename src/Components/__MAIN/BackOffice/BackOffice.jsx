import React, { PureComponent } from 'react'

//UTILITIES
import {getOmdb, postData} from '../../../Utilities/Fetch/fetch'

//PERSONAL COMPONENTS IMPORT
import BackGallery from '../../BackOffice_SubComponent/BackGallery/BackGallery'
import BackOfficeNav from '../../BackOffice_SubComponent/BackOffice_Navbar/BackOfficeNav'

//STYLE
import './BackOffice.scss'

export default class BackOffice extends PureComponent {

    state={
        pageFetch : 1,
        movies : [],
        search : '',
        moviesSelected:[]
    }

    search = async (e) =>{
        let newSearch = e.currentTarget.value
        this.setState({search : newSearch})
        if(e.keyCode === 13 || e.key === "Enter"){
            let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
            this.setState({movies : result})
            console.log(result)
        }
        else{
            this.setState({search : newSearch})
        }
    }

    selectMovie = async (data) => {
        // console.log(data.imdbID)
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 'i', data.imdbID, null)
        // console.log(result)
        this.setState({moviesSelected : [...this.state.moviesSelected, result] })
    }

    checkMovie = async (e, data) => {
        e.currentTarget.checked === true
        ? console.log(e.currentTarget.id, data)
        : console.log('No movie Selected', e.currentTarget.checked)
    }

    postMovies = async () => {
        this.state.moviesSelected.map(async (movie) => {
            let image = document.getElementById(movie.imdbID + ' image')
            let result = await postData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'movies', null, false, movie)
            let imageUpload = await postData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'movies', movie.imdbID, true, image.files)
            console.log(result, imageUpload)
        })
    }

    postCover = async (id, image) => {
        let result = await postData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'movies', id, true, image)
        return result
    }

    nextFetch = async () => {
        this.setState({pageFetch : this.state.pageFetch +1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
        this.setState({movies : result})
    }

    prevFetch = async () => {
        this.setState({pageFetch : this.state.pageFetch -1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
        this.setState({movies : result})
    }

    componentDidMount = async () => {
    }

    render() {
        return (
            <div id='back-office'>
               <BackOfficeNav/>
               <div className="header">
                   <p>Welcome back to your back office. <br/>Here, you can surf into OMDB API to <br/>look for new movies to put in your <br/>Netflix-Clone</p>
                   <h1>Strive</h1>
               </div>
               <input type="text" id='search-omdb' placeholder='Search...' onChange={this.search} onKeyDown={this.search}/>
               <BackGallery list={this.state.movies}/>
            </div>
        )
    }
}
