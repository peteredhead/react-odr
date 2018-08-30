import {
    SET_COMPONENTS,
    SET_ENSEMBLE,
    SET_SERVER_DETAILS,
    SET_SERVICES,
    SET_SUBCHANNELS,
    SET_VALUES,
    WEBSOCKET_CONNECTED,
    WEBSOCKET_DISCONNECTED
} from './actionTypes'

export function connected() {
    return {
        type: WEBSOCKET_CONNECTED
    }
}

export function disconnected() {
    return {
        type: WEBSOCKET_DISCONNECTED
    }
}

export function processMessage(data) {
    return (dispatch, getState) => {
        if ('service' in data) {
            dispatch (
                {
                    type: SET_SERVER_DETAILS,
                    ...data
                }
            )
        }
        if ('components' in data) {
            dispatch(
                {
                    type: SET_COMPONENTS,
                    components: data.components
                }
            )
        }
        if ('ensemble' in data) {
            dispatch(
                {
                    type: SET_ENSEMBLE,
                    ensemble: data.ensemble
                }
            )
        }
        if ('services' in data) {
            dispatch(
                {
                    type: SET_SERVICES,
                    services: data.services
                }
            )
        }
        if ('subchannels' in data) {
            dispatch(
                {
                    type: SET_SUBCHANNELS,
                    subchannels: data.subchannels
                }
            )
        }
        if ('values' in data) {
            dispatch(
                {
                    type: SET_VALUES,
                    values: data.values
                }
            )
        }
    }
}
