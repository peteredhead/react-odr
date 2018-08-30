import initialState from '../store/initialState'
import {
    SET_SERVICES
} from '../actions/actionTypes'

export default function services(state = initialState.services, action) {
    switch(action.type) {
        case SET_SERVICES:
            return action.services
        default:
            return state
    }
}
