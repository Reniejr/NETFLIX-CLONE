import React, { PureComponent } from 'react'

//UTILITIES
import {getData, getOmdb, postData} from '../../../Utilities/Fetch/fetch'
import AddedList from '../../BackOffice_SubComponent/AddedList/AddedList'

//PERSONAL COMPONENTS IMPORT
import BackGallery from '../../BackOffice_SubComponent/BackGallery/BackGallery'
import BackOfficeNav from '../../BackOffice_SubComponent/BackOffice_Navbar/BackOfficeNav'
import MovieDetails from '../../BackOffice_SubComponent/MovieDetails/MovieDetails'

//STYLE
import './BackOffice.scss'

export default class BackOffice extends PureComponent {

    state={
        pageFetch : 1,
        movies : [],
        search : '',
        moviesSelected:[],
        selMovie:{},
        results:{
            actual: 0,
            total: 0
        },
        serverClone : []
    }

    //GET SERVER MOVIES
    getServer = async () => {
        let result = await getData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'movies', null, null, null)
    }

    //SEARCH INPUT
    search = async (e) =>{
        let newSearch = e.currentTarget.value
        this.setState({search : newSearch})
        if(e.keyCode === 13 || e.key === "Enter"){
            let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
            this.setState({movies : result.result, results : {actual : 10, total : result.total}})
            // console.log(result.result, result.total)
        }
        else{
            this.setState({search : newSearch})
        }
    }

    //MOVIE
    selectMovie = async (data) => {
        // console.log(data.imdbID)
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 'i', data.imdbID, null)
        // console.log(result)
        this.setState({selMovie : result })
    }

    //ADD BUTTON
    addList = async (data) => {
        let list = [...this.state.moviesSelected],
            checkList = list.findIndex( movie => movie.imdbID === data.imdbID)
        if (checkList === -1) {
            let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 'i', data.imdbID, null)
            // console.log(result)
            this.setState({moviesSelected : [...this.state.moviesSelected, result] })
        } else {
            window.alert('Already added')
        }
    }

    //REMOVE BUTTON
    removeList = (data) => {
        let array = [...this.state.moviesSelected],
            removeList = array.filter( movie => movie.imdbID !== data.imdbID)
        this.setState({moviesSelected : removeList})
    }

    //POST MOVIE
    postMovies = async () => {
        this.state.moviesSelected.map(async (movie) => {
            let result = await postData(process.env.REACT_APP_CLONE_URL_OFFLINE, 'movies', null, false, movie)
            console.log(result)
        })
    }

    //NEXT BUTTON
    nextFetch = async () => {
        await this.setState({pageFetch : this.state.pageFetch +1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
        this.setState({movies : result.result, results:{actual : this.state.results.actual + 10, total : this.state.results.total}})
    }

    //PREVIOUS BUTTON
    prevFetch = async () => {
        await this.setState({pageFetch : this.state.pageFetch -1})
        let result = await getOmdb(process.env.REACT_APP_OMDB_URL, process.env.REACT_APP_OMDB_API_KEY, 's', this.state.search, this.state.pageFetch)
        this.setState({movies : result.result, results:{actual : this.state.results.actual - 10, total : this.state.results.total}})
    }

    componentDidMount(){
        this.getServer()
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
               <p className= 'results'>{this.state.results.actual} of {this.state.results.total}</p>
               <div className="page-btns">
                <button className='prev-btn' onClick={()=>this.prevFetch()}>Previous</button> <button className='next-btn' onClick={()=>this.nextFetch()}>Next</button>
               </div>
               <BackGallery list={this.state.movies} chooseMovie={this.selectMovie}/>
               <MovieDetails movie={this.state.selMovie} rate={this.state.selMovie.imdbRating} add={this.addList}/>
               <AddedList movieList={this.state.moviesSelected} remove={this.removeList} confirm={this.postMovies}/>
            </div>
        )
    }
}
