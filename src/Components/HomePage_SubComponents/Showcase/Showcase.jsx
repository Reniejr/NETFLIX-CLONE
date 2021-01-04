import React, { PureComponent } from 'react'

//STYLE
import './Showcase.scss'

export default class Showcase extends PureComponent {
    render() {
        return (
            <div className="showcase">
                    <video src="./assets/video.mp4" autoPlay={true} loop={true}></video>
                    <div className="details-showcase">
                        <h2>Random video</h2>
                        <p>Ranking</p>
                        <p>Plot: Random Video</p>
                        <button>Play</button> <button>More Info</button>
                        <div className="sub-controls">
                            <i className="fas fa-volume-up"></i>
                            <span>VM ??</span>
                        </div>
                    </div>
                </div>
        )
    }
}
