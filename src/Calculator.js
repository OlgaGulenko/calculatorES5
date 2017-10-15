var React = require('react');
// var Component = React.Component;
import './Calculator.css';

// var Calculator = React.createClass ({
//   render: function() {
//       return <p>Hello, {this.props.name}!</p>;
//   }
// });
//
// module.exports = Calculator;

var Calculator = React.createClass(){
    render: function() {
        return <p>Hello, {this.props.name}!</p>;
    }
};
module.exports = Calculator;
