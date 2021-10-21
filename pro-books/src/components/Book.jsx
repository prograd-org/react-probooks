import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div className="book-cont">
                <img src={this.props.img} alt="" />
                <p className="bname">{this.props.title}</p>
                <p className="bauthor">{this.props.author}</p>
                <div className="arrow"></div>
                <select>
                    <option value="" disabled className="dis">Move to...</option>
                    <option value="">Read &#128214;</option>
                    <option value="">Like &#128077;</option>
                    <option value="">Dislike &#128078;</option>
                </select>
            </div>
        )
    }
}
