// import React from 'react';
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';

// INSERIDO
import { connect } from "react-redux";

// INSERIDO 2
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';

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

    render() {
        // const { newValue } = this.props;
        const {
            clickButton,
            newValue
        } = this.props;
        const { inputValue } = this.state;
        
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
                <button onClick={() => clickButton(inputValue)}>
                    Click me!
        </button>

                <h1>{newValue}</h1>

            </div>
        );
    }
}

// export default App;
const mapStateToProps = store => ({
    newValue: store.clickState.newValue
})

// INSERIDO 2
const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

// export default connect(mapStateToProps)(App);
// INSERIDO 2
export default connect(mapStateToProps, mapDispatchToProps)(App);