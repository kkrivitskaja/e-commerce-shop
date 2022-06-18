import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../NavBar/NavBar';
import ShopCart from '../ShopCart/ShopCart';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GET_CATEGORY_AND_CURRENCY } from '../../graphql/Queries';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import withApolloClient from '../../helpers/withApolloClient';

import styles from './PagesCommonHeader.module.scss';
class PagesCommonHeader extends Component {
    state = {
        categories: null,
        currencies: null,
        loading: true,
    };

    getCategories = async () => {
        const { loading, error, data } = await this.props.client.query({
            query: GET_CATEGORY_AND_CURRENCY,
        });
        this.setState({
            categories: data?.categories,
            currencies: data?.currencies,
            loading,
            error,
        });
    };

    async componentDidMount() {
        await this.getCategories();
    }

    render() {
        const { categories, currencies } = this.state;
        return (
            <>
                {categories && currencies && (
                    <header className={styles['header']}>
                        <NavBar category={categories} className="nav" />
                        <div className={styles['header-logo']}>
                            <Logo />
                        </div>
                        <div className={styles['header-actions']}>
                            <CurrencySwitcher currencies={currencies} />
                            <ShopCart />
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

export default withApolloClient(PagesCommonHeader);
