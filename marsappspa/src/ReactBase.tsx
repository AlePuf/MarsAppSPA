import logo from "./logo.svg";
import React from "react";

export function ReactBase() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    )
}