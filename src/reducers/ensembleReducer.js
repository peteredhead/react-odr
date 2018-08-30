import initialState from '../store/initialState'
import {
    SET_ENSEMBLE
} from '../actions/actionTypes'

export default function ensemble(state = initialState.ensemble, action) {
    switch(action.type) {
        case SET_ENSEMBLE:
            return {
                ecc: action.ensemble.ecc,
                id: action.ensemble.id,
                label: action.ensemble.label,
                localTimeOffset: action.ensemble['local-time-offset'],
                shortlabel: action.ensemble.shortlabel
            }
        default:
            return state
    }
}
