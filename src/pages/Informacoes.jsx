import React, { Component } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { ButtonExperience } from '../components/universal/ButtonExperience';

class Informaçoes extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  />
                <BoxInformacoes />
                <ButtonsBar />
                <ButtonExperience/>
            </>
        );
    }
}

export default Informaçoes;