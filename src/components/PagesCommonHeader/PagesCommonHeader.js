import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import { ReactComponent as Logo } from '../../assets/logo.svg';

class PagesCommonHeader extends Component {
    render() {
        const categories = this.props.category;
        return (
            <>
                <header>
                    <NavBar category={categories} />
                    <Logo/>
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
