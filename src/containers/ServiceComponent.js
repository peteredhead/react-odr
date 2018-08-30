import React, { Component } from 'react';
import { connect } from 'react-redux';
import LevelMeter from '../components/LevelMeter';
import ServiceDetails from '../components/ServiceDetails';
import ServiceStatus from '../components/ServiceStatus';

class ServiceComponent extends Component {

    render() {
        const levels = this.props.values[this.props.subchannel];
        const service = this.props.services[this.props.service];

        let left, right, status;
        if (levels) {
            left = levels.inputstat.peak_left;
            right = levels.inputstat.peak_right;
            status = levels.inputstat.state;
        } else {
            left = -100;
            right = -100;
            status = 'Waiting';
        }
        return (
            <div style={{
                display: 'inline-block',
                marginRight: '2em'
            }}>
                <ServiceDetails {...service} />
                <LevelMeter level={left} />
                <LevelMeter level={right} />
                <ServiceStatus status={status} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        services: state.services,
        values: state.values
    }
}


export default connect(
    mapStateToProps,
)(ServiceComponent)
