import React, { Component } from 'react';
import { BoxManual } from '../components/screen-manual/BoxManual';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';

class Manual extends Component {
    state = {}
    render() {
        return (
            <>
                <ButtonsBar />
                <BoxManual />
                <Navbar />
            </>
        );
    }
}

export default Manual;