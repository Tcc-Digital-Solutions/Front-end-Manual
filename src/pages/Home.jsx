import React, { Component } from 'react';
import { Carousel } from '../components/screen-home/Carousel';
import { NavbarHome } from '../components/screen-home/NavbarHome.css';
import { Navbar } from '../components/universal/Navbar';

class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar />
            <NavbarHome/>
            <Carousel/>
            </>
        );
    }
}

export default Home;