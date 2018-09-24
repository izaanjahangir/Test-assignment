import React from 'react'
export default class Kid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emotion: 'nervous', danceSteps: [], currentStepIndex: 0,
            startedPerforming: false
        };
    }
    qualified() {
        this.setState({ startedPerforming: false })
    }
    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming } = this.state;
        return (
            <div>
                <div>dressColor: {dressColor})</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion})</div>
                {
                    startedPerforming &&
                    <div>
                        Current Step: {danceSteps[currentStepIndex]}
                        <button onClick={() => this.setState({ currentStepIndex: ++currentStepIndex })}>Perform Next Step</button>
                    </div>
                }
            </div>

        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };