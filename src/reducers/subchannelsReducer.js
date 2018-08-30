import initialState from '../store/initialState'
import {
    SET_SUBCHANNELS
} from '../actions/actionTypes'

export default function subchannels(state = initialState.subchannels, action) {
    switch(action.type) {
        case SET_SUBCHANNELS:
            return action.subchannels
        default:
            return state
    }
}
