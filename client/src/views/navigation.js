import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

export default class Navigation extends React.Component {

    componentDidMount() {
        this.navSlide();
    }

    // https://stackoverflow.com/questions/57454279/im-having-a-problem-triggering-this-classlist-toggle-in-react
    navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        burger.addEventListener('click', () => {
          nav.classList.toggle('.nav-active');
          console.log("Nav slide is is working..kinda");
        });
      }

    render() {
        return (
            <header>
                <nav>
                    <h4>Time Project</h4>
                    <ul className="nav-links">
                        <li><Link to="/my-app/home">Home</Link></li>
                        <li><Link to="/my-app/your-posts">Your Posts</Link></li>
                        <li><Link to="/my-app/profile">Profile</Link></li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>
        );
    }
}