import React from 'react';
import './../App.css';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "First", 
            mongoResponse: "Second" 
        };
    }

    // eslint-disable-next-line
    callAPI() {
        fetch("http://localhost:5000/express_backend")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    callDatabase() {
        fetch("http://localhost:5000/mongo_backend")
            .then(res => res.text())
            .then(res =>this.setState({ mongoResponse: res}));
    }

    componentWillMount() {
        this.callAPI();
        this.callDatabase();
    }

    myFunction() {
        let response = fetch("http://localhost:5000/express_backend");
        return response;
    }

    render() {
        return (
            <body className="row">
                <div className="column left">
                </div>
                <div className="column middle">
                    <p>{this.state.apiResponse}</p>
                    <p>{this.state.mongoResponse}</p>
                    <p>Sell your time! College application review, tutoring, lessons, consultations, and more!</p>
                </div>
                <div className="column right">
                </div>
            </body>
        );
    }
}
