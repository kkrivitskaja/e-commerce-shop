import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Currency } from '../../assets/currency-icon.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';

import './PagesCommonHeader.css';

class PagesCommonHeader extends Component {
    render() {
        const categories = this.props.category;
        return (
            <>
                <header className='header'>
                    <NavBar category={categories} />
                    <Logo />
                    <Currency />
                    <Cart/>
                </header>
                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}

PagesCommonHeader.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
};

export default PagesCommonHeader;
