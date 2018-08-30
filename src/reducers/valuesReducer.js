import initialState from '../store/initialState'
import {
    SET_VALUES
} from '../actions/actionTypes'

export default function values(state = initialState.values, action) {
    switch(action.type) {
        case SET_VALUES:
            return action.values
        default:
            return state
    }
}
