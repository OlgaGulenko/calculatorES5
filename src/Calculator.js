var React = require('react');
var createReactClass = require('create-react-class');
/*include Your css*/
require('./Calculator.css');
//replace React.createClass -> createReactClass, and don`t (){}, but ({})

var Calculator = /*React.createClass*/createReactClass({
  getInitialState: function() {
    return {
      cours: [],
    };
  },
  componentDidMount: function() {
    fetch( 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => response.json())
    .then(response => {
      this.setState ({
        cours: response.cours
      });
    })
  },
  Calculate: function() {

  /*localStorage.setItem('email', this.state.email);
  localStorage.setItem('password', this.state.password);*/
},
  render: function() {
    var list = getInitialState.cours.map(cours) ({
      return(
        <li>
          <strong>ccy:{cours.ccy}</strong><br/>
          <strong><h4>base_ccy:{cours.base_ccy}</h4></strong><br/>
          <strong><h4>buy:{cours.buy}</h4></strong><br/>
          <strong><h4>sale:{cours.sale}</h4></strong><br/>
        </li>
      );
    })
    return (
      <button onClick={this.Calculate}>
        {list}
      </button>
    );
  }
});
module.exports = Calculator;
