import React from 'react';
import './../App.css';
import './profile.css';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "First", 
            mongoResponse: "Data directly from MongoDB will appear here.",
            username: "not entered yet",
            usernameResponse: "[not entered or server not running]",
            password: "not entered yet",
            passwordResponse: "[not entered or server not running]",
            loggedIn: "You're not signed in."
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePswd = this.handlePswd.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handlePswd(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        //alert(this.state.textBox);
        event.preventDefault();
        this.callSubmitUsername(this.state.username);
        this.callSubmitPassword(this.state.password);
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

    callSubmitUsername(content) {
        fetch("http://localhost:5000/text_input?name=" + content)
            .then(res => res.text())
            .then(res => this.setState({ usernameResponse: res }))
    }

    callSubmitPassword(content) {
        fetch("http://localhost:5000/text_input?name=" + content)
            .then(res => res.text())
            .then(res => this.setState({ passwordResponse: res }))
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
                    <h3>{this.state.loggedIn}</h3>
                    <p>Login below</p>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Username: <space />
                            <input type="text" value={this.state.value} onChange={this.handleChange}/>
                            <br />
                            Password: <space />
                            <input type="text" value={this.state.value} onChange={this.handlePswd}/>
                            <br />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Username entered: {this.state.usernameResponse}</p>
                    <p>Password entered: {this.state.passwordResponse}</p>
                    <p>{this.state.mongoResponse}</p>
                </div>
            </body>
        );
    }
}
