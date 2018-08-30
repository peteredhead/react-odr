import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnsembleDetails from '../components/EnsembleDetails';
import ServiceComponent from './ServiceComponent';

class Ensemble extends Component {

    render() {
        let components = []
        for (const c in this.props.components) {
            const component = this.props.components[c];
            components.push(
                <ServiceComponent
                    key={component.subchannel}
                    service={component.service}
                    subchannel={component.subchannel}
                />
            )
        }
        return (
            <div>
                <EnsembleDetails {...this.props.ensemble} />
                {components}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        components: state.components,
        ensemble: state.ensemble
    }
}


export default connect(
    mapStateToProps
)(Ensemble)
