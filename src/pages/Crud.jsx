import React, { Component } from 'react';
import { BoxAddsProdutos } from '../components/screen-crud/BoxAddsProdutos';
import { Navbar } from '../components/universal/Navbar';


class Crud extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar logado='false' visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div" />
                <BoxAddsProdutos />
            </>
        );
    }
}

export default Crud;