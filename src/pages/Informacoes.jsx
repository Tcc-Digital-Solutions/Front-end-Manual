import React, { Component } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { Navbar } from '../components/universal/Navbar';
import { ButtonsBar } from '../components/universal/ButtonsBar'


class Informaçoes extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' />
                <BoxInformacoes />
                <ButtonsBar/>
            </>
        );
    }
}

export default Informaçoes;