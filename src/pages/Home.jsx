import React, { Component } from 'react';
import { NavbarHome } from '../components/screen-home/NavbarHome.css';
import { Navbar } from '../components/universal/Navbar';

class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar />
            <NavbarHome/>
            </>
        );
    }
}

export default Home;