// import React from 'react';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';

// INSERIDO
import { connect } from "react-redux";

// INSERIDO 2
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';

import axios from "axios";

import Planet from "./Planet";

// function App() {
class App extends Component {
    state = {
        inputValue: ''
    }
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    getPlanet() {
        let idPlanet = Math.floor(Math.random() * 61) + 1;
        axios
        .post(`https://swapi.co/api/planets/${idPlanet}`)
        .then(res =>  console.log(res))
        .catch(res => console.log("Ocorreu um erro, tente novamente mais tarde: " + res));
    }

    render() {
        // const { newValue } = this.props;
        const {
            clickButtonProps,
            newValueProps
        } = this.props;
        const { inputValue } = this.state;
        
        this.getPlanet();
        
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
            </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
            </a>
                </header> */}
                
                {/* <input type="text" />
                <button>
                    Click me!
                </button> */}

                <input
                    onChange={this.inputChange}
                    type='text'
                    value={inputValue}
                />
                <button onClick={() => clickButtonProps(inputValue)}>
                    Click me!
                </button>

                <h1>{newValueProps}</h1>
                <Planet />

            </div>
        );
    }
}

// export default App;
const mapStateToProps = store => ({
    newValueProps: store.clickState.newValue
})

// INSERIDO 2
const mapDispatchToProps = dispatch => bindActionCreators({ 
    // clickButton
    clickButtonProps: clickButton
}, dispatch);

// export default connect(mapStateToProps)(App);
// INSERIDO 2
export default connect(mapStateToProps, mapDispatchToProps)(App);