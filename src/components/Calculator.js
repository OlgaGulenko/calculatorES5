var React = require('react');
var createReactClass = require('create-react-class');
/*include Your css*/
require('./Calculator.css');
var NumericInput = require('react-numeric-input');
var Button, Navbar, NavItem, Nav, Grid, Row, Col, ButtonToolbar, FormGroup, FormControl, MenuItem, SplitButton, NumericInput = require('react-bootstrap');
//replace React.createClass -> createReactClass, and don`t (){}, but ({})
var cou;
var Calculator = /*React.createClass*/createReactClass({
  getInitialState: function() {
    return {
      cours: [],
      operations: [
        {
          "id": 1,
          "name": "USDintoUAH",
        },
        {
          "id": 2,
          "name": "EURintoUAH",
        },
        {
          "id": 3,
          "name": "UAHintoUSD",
        },
        {
          "id": 4,
          "name": "UAHintoEUR",
        }
      ],
      amount: 0,
      result: 0,
    };
  },
  caclResult: function() {
    if (this.state.operations.id === 1){
      cou === this.state.cours[0].buy
    }
    this.setState({result:Number(cou) * this.state.amount});
  },
  componentDidMount: function() {
    fetch( 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => response.json())
    .then(response => {
      this.setState ({
        cours: response.cours
      });
      console.log(response)
    })
  },
  // c = new Array(),
  // n = new Array(),
  // c[0] = 1,
  // n[0] = "USD",
  // c[1] = 0.75,
  // n[1] = "EUR",
  // c[2] = 63.01,
  // n[2] = "RUB",
  // GiveResult: function () {
  //    var res, vfrom, vto, vcash;
  //    vcash = getInitialState.cours.ccy.value;
  //    vfrom = document.getElementById("from").value;
  //    vcash = vcash.replace(',', '\.');
  //    vcash = vcash.replace(' ', '');
 //     vcash = vcash.replace(' ', '');
 //     vto = document.getElementById("to").value;
 //     res = c[vto] * vcash / c[vfrom], 2;
 //
 //     res = res.toFixed(2);
 //     res = res.toString();
 //     res = res.replace('\.', ',');
 //     res = "<span class='result'> Результат перевода: " + res + "</span>&nbsp;" + n[vto];
 //
 //     document.getElementById("result").innerHTML = res;
 // },
  Calculate: function() {

  /*localStorage.setItem('email', this.state.email);
  localStorage.setItem('password', this.state.password);*/
},
  render: function() {

    return (

      <div className="container-fluid">
        <div className='calculator'>
          <input min={0} max={100} value={Number(cou)} onChange={this.caclResult} />
          <input min={0} max={100} value={this.state.amount} onChange={this.caclResult} />
          <span>Итого: {this.state.result}</span>
        </div>
        <Grid>
          <Row className="show-grid">
            <Col md={12} lg={12} sm={12} xs={12}>
              <div className="calculatecours col-centered" >
                <FormGroup>
                  <FormControl
                    label="Route name"
                    type="text"
                    defaul value={cou}
                    placeholder="Enter the route's name here"
                    onChange={(event) => this.setState({ name: event.target.value })}
                  />
                  <FormControl
                    label="Description"
                    type="text"
                    value={this.state.password}
                    placeholder="Description"
                    onChange={(event) => this.setState({ description: event.target.value })}
                  />

                </FormGroup>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsSize="large" active onClick={this.caclResult.bind(this)}>Create route</Button>
                </ButtonToolbar>

              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
module.exports = Calculator;
// var list = getInitialState.cours.map(cour,index) ({
//   return(
//     <li key={index}>
//       <strong>ccy:{cours.ccy}</strong><br/>
//       <strong><h4>base_ccy:{cours.base_ccy}</h4></strong><br/>
//       <strong><h4>buy:{cours.buy}</h4></strong><br/>
//       <strong><h4>sale:{cours.sale}</h4></strong><br/>
//     </li>
//   );
// })
