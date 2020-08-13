import React from 'react';
import './../App.css';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "First", 
            mongoResponse: "Second",
            textBox: "hmm"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({textBox: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.textBox);
        event.preventDefault();
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
        //this.myFunction();
    }

    myFunction() {
        // let response = fetch("http://localhost:5000/express_backend");
        // return response;
        console.log("testing12345");
        // This has more info on event listeners KEEP THIS
        // https://reactjs.org/docs/forms.html
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
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="column right">
                </div>
            </body>
        );
    }
}
