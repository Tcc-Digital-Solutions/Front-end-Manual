import React, { Component } from 'react';
import { BoxAddsProdutos } from '../components/screen-crud/BoxAddsProdutos';
import { Navbar } from '../components/universal/Navbar';


class Crud extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar logado='false' visible='button-menu-box-fechar'/>
                <BoxAddsProdutos />
            </>
        );
    }
}

export default Crud;