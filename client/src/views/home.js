import React from 'react';
import './../App.css';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            loggedIn: "Not logged in."
        };
    }

    checkLoggedIn() {
        return this.state.loggedIn;
    }
    
    componentDidMount() {
        this.checkLoggedIn();
    }



    render() {
        return (
            <body className="row">
                <div className="column left" />
                <div className="column middle">
                    <br></br>
                    <p className="temp">{this.state.loggedIn}</p>
                    
                </div>
                <div className="column right" />
            </body>
        );
    }
}
