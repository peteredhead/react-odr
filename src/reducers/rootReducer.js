import { combineReducers} from 'redux'
import components from './componentsReducer'
import ensemble from './ensembleReducer'
import server from './serverReducer'
import services from './servicesReducer'
import subchannels from './subchannelsReducer'
import values from './valuesReducer'
import websocket from './websocketReducer'

const rootReducer = combineReducers({
    components,
    ensemble,
    server,
    services,
    subchannels,
    values,
    websocket
})

export default rootReducer
