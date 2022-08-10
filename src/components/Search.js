import React, { Component } from "react";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";
import axios from "axios";


class Search extends Component {
    constructor() {
        super()
        this.state = ({
            flight_number: [],
            from: [],
            to: [],
            date: []
        })
        this.fetchInfo = this.fetchInfo.bind(this)
    }
    
    fetchInfo(q) {
        console.log(`Search for ${q}`)
        const SERVER_URL = "http://localhost:3000/flights.json"
        const newState = {
            flight_number: [],
            from: [],
            to: [],
            date: []
        }
        axios(SERVER_URL).then((results) => {

            console.log(results);
            for (let i = 0; i < results.data.length; i++) {
                const flight_number = results.data[i].flight_number
                newState.flight_number.push(flight_number)
                const from = results.data[i].from
                newState.from.push(from)
                const to = results.data[i].to
                newState.to.push(to)
                const date = results.data[i].date
                newState.date.push(date)
            }
            this.setState(newState)    
            
            // debugger
            

        })
    }
    
    render() {
        return(
            <div>
                <SearchForm onSubmit={ this.fetchInfo } />
                <FlightList flights = { this.state }/>
            </div>
        )
    }
}

export default Search