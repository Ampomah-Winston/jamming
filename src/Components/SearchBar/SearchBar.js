import React, { Component } from 'react'
import  './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div class="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}
