import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';


class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar search='false' menu='active-home' visible='button-menu-box' box='box-produtos' menuTrue='true'/>
            </>
        );
    }
}

export default Home;