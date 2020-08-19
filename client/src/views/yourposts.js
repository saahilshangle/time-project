import React from 'react';
import './../App.css';

export default class YourPosts extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <body className="row">
                <div className="column left" />
                <div className="column middle">
                    <br></br>
                    <div className="h-content">
                        <p>You currently don't have any posts</p>
                    </div>
                </div>
                <div className="column right" />
            </body>
        );
    }
}
