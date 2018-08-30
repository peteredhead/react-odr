import React, { PureComponent } from 'react';

class EnsembleDetails extends PureComponent {

    render() {
        return (
            <div>
                <h2>{this.props.label} ({this.props.shortlabel}) - {this.props.ecc}</h2>
            </div>
        )
    }
}

export default EnsembleDetails
