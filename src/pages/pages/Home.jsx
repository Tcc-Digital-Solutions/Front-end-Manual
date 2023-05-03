import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';


class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar menu='active-home' visible='button-menu-box' box='box-produtos-result' menuTrue='true' search="navbarsearch-div" />
            </>
        );
    }
}

export default Home;