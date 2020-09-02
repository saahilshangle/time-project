import React from 'react';
import './../App.css';

export default class Home extends React.Component {
    
    componentDidMount() {
    }

    render() {
        return (
            <body className="row">
                <div className="column left" />
                <div className="column middle">
                    <br></br>
                    <p className="temp">Sell your time! College application review, tutoring, lessons, consultations, and more!</p>
                </div>
                <div className="column right" />
            </body>
        );
    }
}
