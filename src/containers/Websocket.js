import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as websocketActions from '../actions/websocketActions';

const VALUES_REQUEST_INTERVAL = 1000; // ms

class Websocket extends Component {
    constructor(props) {
        super(props)
        this.socket = null;
        this.valuesTimes = null;
    }

    componentDidMount() {
        this.socket = new WebSocket("ws://localhost:3000/wss");
        this.socket.onmessage = this.processMessage;
        // TODO:: Detect disconnect and attempt reconnection
        this.socket.onopen = this.props.websocketActions.connected;
    }

    componentWillUnmount() {
        if (this.connected && this.socket) {
            this.socket.close();
        }
        this.props.websocketActions.disconnected();
        this.stopValuesTimer();
    }

    componentDidUpdate(prevProps) {
        if (this.props.websocket.connected !== prevProps.websocket.connected) {
            this.getInfo();
            this.getTree();
            this.startValuesTimer();
        }
    }

    startValuesTimer = () => {
        if (this.props.websocket.connected && !this.valuesTimer) {
            this.valuesTimer = setInterval(
                () => this.socket.send('values'),
                VALUES_REQUEST_INTERVAL
            )
        }
    }

    stopValuesTimer = () => {
        clearInterval(this.valuesTimer);
        this.valuesTimer = null;
    }

    getInfo = () => {
        if (this.props.websocket.connected) {
            this.socket.send('info');
        }
    }

    getConfig = () => {
        if (this.props.websocket.connected) {
            this.socket.send('config');
        }
    }

    getValues = () => {
        if (this.props.websocket.connected) {
            this.socket.send('values');
        }
    }

    getTree = () => {
        if (this.props.websocket.connected) {
            this.socket.send('getptree');
        }
    }

    processMessage = (event) => {
        const data = JSON.parse(event.data)
        this.props.websocketActions.processMessage(data)
    }

    render() {
        return null
    }
}

function mapStateToProps(state) {
    return {
        websocket: state.websocket
    }
}

function mapDispatchToProps(dispatch) {
    return {
        websocketActions: bindActionCreators(websocketActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Websocket)
