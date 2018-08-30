import initialState from '../store/initialState'
import {
    SET_SERVER_DETAILS
} from '../actions/actionTypes'

export default function server(state = initialState.server, action) {
    switch(action.type) {
        case SET_SERVER_DETAILS:
            return Object.assign(
                {},
                {
                    service: action.service,
                    version: action.version
                }
            )
        default:
            return state
    }
}
