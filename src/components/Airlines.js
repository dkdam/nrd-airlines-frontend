import React, { Component } from "react";
import Login from "./Login";
import Search from "./Search";
import Flight from "./Flight";
import { Link, Route, Routes } from "react-router-dom";


class Airlines extends Component {
    render() {
        return(
            <div>
                < Search />
            </div>
        )
    }
}

export default Airlines