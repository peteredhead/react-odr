import React, { Component } from 'react';
import Ensemble from './containers/Ensemble'
import Websocket from './containers/Websocket'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Websocket />
                <Ensemble />
            </div>
        );
    }
}

export default App;
