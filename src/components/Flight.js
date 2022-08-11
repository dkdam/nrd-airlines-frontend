// This is for the airplane page where you are able to book seats

import React, { useState, Component } from 'react';
import axios from "axios";

const SERVER_URL = "http://localhost:3000/flights.json";

class Flight extends Component {
    constructor() {
        super();
        this.state ={
            info:''
        };
    }
    fetchInfo(q) {
        console.log(`Search for ${q}`)
        axios(SERVER_URL).then((results) => {
            console.log(results)
        })
    }

    render() {
        return (
            <div className="userbody" id="flightinfo" >

                <div className="information">
                    <h1>Info</h1>
                    <h2>Date: </h2>
                    {this.props.flight.date}
                </div>


                <div className="bookingButton">
                    <button>Book Now</button>
                </div>

                <div className="seatGrid">
                </div>
                
            </div>
        );
    }
}

export default Flight;