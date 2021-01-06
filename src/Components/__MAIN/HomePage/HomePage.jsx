import React, { PureComponent } from 'react'

//PERSONAL COMPONENTS IMPORTS
import Showcase from '../../HomePage_SubComponents/Showcase/Showcase'
import Movie from '../../_GENERAL_SUBCOMP/Movie/Movie'


//STYLE
import './HomePage.scss'

export default class HomePage extends PureComponent {
    render() {
        return (
            <div id='homepage'>
                <Showcase/>
                <Movie/>            
            </div>
        )
    }
}
