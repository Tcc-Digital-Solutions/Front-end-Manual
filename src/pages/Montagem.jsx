import React, { Component } from 'react';
import { BoxMontagem } from '../components/screen-montagem/BoxMontagem';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';

class Montagem extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar  visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' />
                <BoxMontagem />
                <ButtonsBar />
            </>
        );
    }
}

export default Montagem;