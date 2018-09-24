import React from 'react';
export default class Judge extends React.Component {
    constructor() {
        this.state = { stars: 0, available: false }
    }
    applaud() {
        //Send this applaud status to Kid.js
    }
    provideStars() {
        const { stars } = this.state;
        this.setState({ stars: ++stars })
    }
    render() {
        const { stars, available } = this.state;
        return (
            <div>
                <button type="button" onChange={this.applaud}>Appreciate performance</button>
                <button type="button" onChange={this.provideStars}>Provide stars</button>
                Kid is available: {available}
                Stars gained: {stars}
            </div>
        );
    }
}
