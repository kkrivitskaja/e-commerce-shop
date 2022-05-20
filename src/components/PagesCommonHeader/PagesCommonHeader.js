import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Currency } from '../../assets/currency-icon.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';

import styles from './PagesCommonHeader.module.scss';

class PagesCommonHeader extends Component {
    render() {
        const categories = this.props.category;
        return (
            <>
                <header className={styles['header']}>
                    <NavBar category={categories}  className='nav'/>
                    <div className={styles['header-logo']}>
                        <Logo />
                    </div>
                    <div className={styles['header-actions']}>
                        <button className="header-actions__btn">
                            <Currency />
                        </button>
                        <button className="header-actions__btn">
                            <Cart />
                        </button>
                    </div>
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
