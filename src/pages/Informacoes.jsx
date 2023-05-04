import React, { Component } from 'react';
import BoxInformacoes from '../components/screen-informacoes/BoxInformacoes';
import ButtonsBar from '../components/universal/ButtonsBar';
import Navbar from '../components/universal/Navbar';


class informaçoes extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar'/>
                <BoxInformacoes />
                <ButtonsBar />
            </>
        );
    }
}

export default informaçoes;