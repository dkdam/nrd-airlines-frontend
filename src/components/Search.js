import React, { Component } from "react";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";

class Search extends Component {
    render() {
        return(
            <div>
                <h1>Flights Available</h1>
                <SearchForm />
                <FlightList />
            </div>
        )
    }
}

export default Search