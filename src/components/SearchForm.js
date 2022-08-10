import React, { Component } from "react";

class SearchForm extends Component {
    constructor() {
        super();
        this.state = { content: '' };
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit( this.state.content );
    }

    _handleInput = (e) => {
        this.setState( {content: e.target.value} )
    }

    render() {
        return(
            <div>
                <h1>Searching Flight</h1>
                <form onSubmit= { this._handleSubmit }>
                    <input type="search" placeholder="Origin" onInput={ this._handleInput }/>
                    <input type="search" placeholder="Destination" onInput={ this._handleInput }/>
                    <input type="submit" value={`Search Flight`}/>
                </form>
            </div>
        )

    }
}

export default SearchForm;

