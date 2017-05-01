"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello World~~!")));
    }
}
exports.default = HelloWorld;
