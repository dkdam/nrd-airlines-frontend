import React, { Component } from "react";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";
import axios from "axios";


class Search extends Component {
    
    fetchInfo(q) {
        console.log(`Search for ${q}`)
        const SERVER_URL = "http://localhost:3000/flights.json"
        axios(SERVER_URL).then((results) => {
            console.log(results)
        })
    }
    
    render() {
        return(
            <div>
                <SearchForm onSubmit={ this.fetchInfo } />
                <FlightList />
            </div>
        )
    }
}

export default Search