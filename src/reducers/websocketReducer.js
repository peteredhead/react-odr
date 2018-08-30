import initialState from '../store/initialState'
import {
    WEBSOCKET_CONNECTED,
    WEBSOCKET_DISCONNECTED
} from '../actions/actionTypes'

export default function websocket(state = initialState.websocket, action) {
    switch(action.type) {
        case WEBSOCKET_CONNECTED:
            return Object.assign(
                {},
                {
                    connected: true
                }
            )
        case WEBSOCKET_DISCONNECTED:
            return Object.assign(
                {},
                {
                    connected: false
                }
            )

        default:
            return state
    }
}
