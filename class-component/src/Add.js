import React, { Component } from "react";

class Add extends Component {
    render() {
        let a = 11, b = 23
        return (
            <p>
                Addition of a and b --{'> '}{a + b}
            </p>
        );
    }
}

export default Add