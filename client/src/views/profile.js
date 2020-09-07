import React from 'react';
import './../App.css';
import './profile.css';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "First", 
            mongoResponse: "Second",
            textBox: "not entered yet",
            textResponse: "[not entered or server not running]",
            loggedIn: "You're not signed in."
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({textBox: event.target.value});
    }

    handleSubmit(event) {
        //alert(this.state.textBox);
        event.preventDefault();
        this.callTextBox(this.state.textBox);
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
            .then(res => this.setState({ mongoResponse: res }));
    }

    callTextBox(content) {
        fetch("http://localhost:5000/text_input?name=" + content)
            .then(res => res.text())
            .then(res => this.setState({ textResponse: res }))
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
            <body>
                <div className="p-content">
                    {/* <p>{this.state.apiResponse}</p> */}
                    {/* <p>{this.state.mongoResponse}</p> */}
                    <h3>{this.state.loggedIn}</h3>
                    <p>Login below</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username: <space />
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                            <br />
                            Password: <space />
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                            <br />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Number of total logins: {this.state.textResponse}</p>
                </div>
            </body>
        );
    }
}
