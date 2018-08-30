import initialState from '../store/initialState'
import {
    SET_COMPONENTS
} from '../actions/actionTypes'

export default function components(state = initialState.components, action) {
    switch(action.type) {
        case SET_COMPONENTS:
            return action.components
        default:
            return state
    }
}
