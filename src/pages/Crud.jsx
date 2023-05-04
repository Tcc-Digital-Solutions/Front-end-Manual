import React, { Component } from 'react';
import BoxAddsProdutos from '../components/screen-crud/BoxAddsProdutos';
import Navbar from '../components/universal/Navbar';

class crud extends Component {
    state = {}
    render() {
        return (
            <>
                <h1>Crud Page</h1>
                <Navbar logado='false' visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' />
                <BoxAddsProdutos />
            </>
        );
    }
}
export default crud;