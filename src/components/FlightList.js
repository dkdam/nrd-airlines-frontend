import React from "react";
import axios from "axios";

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