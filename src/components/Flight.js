// This is for the airplane page where you are able to book seats

import React, { Component } from 'react'

class Flight extends Component {
    render() {
        return (
            <div>

                <div className="information">
                    <h1>Info</h1>
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