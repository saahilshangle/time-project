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
    
        burger.addEventListener('click', () => {
          nav.classList.toggle('.nav-active')
        });
      }

    render() {
        return (
            <header>
                <nav>
                    <h4>Time</h4>
                    <ul class="nav-links">
                        <li><a href="/home">Home</a></li>
                        <li><Link to="/your-posts">Your Posts</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                    <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    </div>
                </nav>
                {this.navSlide}
            </header>
        );
    }
}