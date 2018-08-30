import React, { PureComponent } from 'react';

class LevelMeter extends PureComponent {

    render() {
        const containerStyle = {
            width: '1em',
            height: '5em',
            background: 'linear-gradient(to bottom, #ff0000 0%,#ffff28 25%,#43cc00 60%,#2e8c00 100%)'
        }
        const levelStyle={
            position: 'relative',
            top: '0',
            left: '0',
            width: '1em',
            height: Math.abs(this.props.level)+'%',
            backgroundColor: '#fff',
            transition: 'height 1s'
        }
        return (
            <div style={{
                width: '2em',
                paddingLeft: '0.5em',
                display: 'inline-block',
                marginRight: '1em'
            }}>
                <div style={containerStyle}>
                    <div style={levelStyle}></div>
                </div>
                <p>{this.props.level}</p>
            </div>
        )
    }
}

export default LevelMeter
