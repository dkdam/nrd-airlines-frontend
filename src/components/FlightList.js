import React from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json"
axios(SERVER_URL).then((results) => {
    console.log(results)
})

const FlightList = (props) => {
    return (
        <div>
            <h3>Flight List</h3>
            {Object.keys(props.flights).map((key) => {
                return <p>{key}: {props.flights[key]}</p>
            })}
        </div>
    )
}

export default FlightList