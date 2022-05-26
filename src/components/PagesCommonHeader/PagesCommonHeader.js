import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';

import NavBar from '../NavBar/NavBar';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Currency } from '../../assets/currency-icon.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import { GET_CATEGORY } from '../../graphql/Queries';

import styles from './PagesCommonHeader.module.scss';

class PagesCommonHeader extends Component {
    state = {
        categories: null,
        loading: true,
    };

    getCategories = async () => {
        const { loading, error, data } = await this.props.client.query({
            query: GET_CATEGORY,
        });
        this.setState({
            categories: data?.categories,
            loading,
            error,
        });
    };

    async componentDidMount() {
        await this.getCategories();
    }

    render() {
        const { categories } = this.state;
        return (
            <>
                {categories && (
                    <header className={styles['header']}>
                        <NavBar category={categories} className="nav" />
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
                )}

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

export default withApollo(PagesCommonHeader);
