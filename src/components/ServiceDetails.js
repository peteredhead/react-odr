import React, { PureComponent } from 'react';

class ServiceDetails extends PureComponent {

    render() {
        return (
            <h4>{this.props.label}</h4>
        )
    }
}

export default ServiceDetails
