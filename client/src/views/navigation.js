import React from 'react';
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
                    <h4>TIM: Time is Money</h4>
                    <ul class="nav-links">
                        <li><a href="/">Your Posts</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Home</a></li>
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