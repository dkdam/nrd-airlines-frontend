import React, { Component } from "react";
import Login from "./Login";
import Search from "./Search";

class Airlines extends Component {
    render() {
        return(
            <div>
                <h1> ಥ_ಥ Burning Airlines coming soon  ಥ_ಥ</h1>
                <marquee behavior="" direction="right">
                <Login />
                </marquee>
                <marquee>
                    <Search />
                </marquee>
            </div>
        )
    }
}

export default Airlines