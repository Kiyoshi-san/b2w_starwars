// import React from 'react';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';

// INSERIDO
import { connect } from "react-redux";

// INSERIDO 2
import { bindActionCreators } from 'redux';
import { atualizarValorInput, atualizarValorPlanet } from '../actions';

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
        .then(res =>  {
            console.log(res.data);
            this.props.atualizarValorPlanetProps(res.data);
        })
        .catch(res => console.log("Ocorreu um erro, tente novamente mais tarde: " + res));
    }

    render() {
        // const { novoValorInput } = this.props;
        const {
            atualizarValorInputProps,
            novoValorInputProps
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
                <button onClick={() => atualizarValorInputProps(inputValue)}>
                    Click me!
                </button>

                <h1>{novoValorInputProps}</h1>
                <Planet />

            </div>
        );
    }
}

// export default App;
const mapStateToProps = store => ({
    novoValorInputProps: store.setaReducerStateInputStore.novoValorInput,
    novoValorPlanetProps: store.setaReducerStatePlanetStore.novoValorPlanet
}/* , () => {
    console.log("a");
    console.log(store.setaReducerStatePlanetStore.novoValorPlanet);
    console.log("b");    
} */)

// INSERIDO 2
const mapDispatchToProps = dispatch => bindActionCreators({ 
    // atualizarValorInput
    atualizarValorInputProps: atualizarValorInput,
    atualizarValorPlanetProps: atualizarValorPlanet
}, dispatch);

// export default connect(mapStateToProps)(App);
// INSERIDO 2
export default connect(mapStateToProps, mapDispatchToProps)(App);