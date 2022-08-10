import React, { Component } from "react";
import FlightList from "./FlightList";

class Search extends Component {
    render() {
        return(
            <div>
                <h1>Flights Available</h1>
                <FlightList />
            </div>
        )
    }
}

export default Search