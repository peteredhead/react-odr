import React, { PureComponent } from 'react';

class ServiceStatus extends PureComponent {

    render() {
        return (
            <p>{this.props.status}</p>
        )
    }
}

export default ServiceStatus
