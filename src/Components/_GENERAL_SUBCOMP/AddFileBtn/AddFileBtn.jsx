import React, { PureComponent } from 'react'

//STYLE
import './AddFileBtn.scss'

export default class AddFileBtn extends PureComponent {
    render() {
        return (
            <div className='addfile-btn'>
                <label htmlFor="">
                <i className="fas fa-plus-circle"></i>
                </label>
                <input type="file" id="preview-file"/>
            </div>
        )
    }
}
