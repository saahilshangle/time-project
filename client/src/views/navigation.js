import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

export default class Navigation extends React.Component {

    componentDidMount() {
        this.navSlide();
    }

    navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        console.log("Nav slide is is working..kinda");
        burger.addEventListener('click', () => {
          nav.classList.toggle('.nav-active')
        });
      }

    render() {
        return (
            <header>
                <nav>
                    <h4>Time</h4>
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
                {this.navSlide}
            </header>
        );
    }
}