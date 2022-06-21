import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import CartOverlay from '../CartOverlay/CartOverlay';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { GET_CATEGORY_AND_CURRENCY } from '../../graphql/Queries';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import withApolloClient from '../../helpers/withApolloClient';

import CommonHeaderLoading from './CommonHeaderLoading/CommonHeaderLoading';

import styles from './PagesCommonHeader.module.scss';
class PagesCommonHeader extends Component {
    state = {
        categories: null,
        currencies: null,
        loading: true,
        error: null,
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
        const { categories, currencies, loading } = this.state;

        return (
            <>
                {loading ? (
                    <CommonHeaderLoading />
                ) : categories && currencies ? (
                    <header className={styles['header-wrapper']}>
                        <div className={styles['header']}>
                            <NavBar category={categories} />
                            <div className={styles['header-logo']}>
                                <Logo />
                            </div>
                            <div className={styles['header-actions']}>
                                <CurrencySwitcher currencies={currencies} />
                                <CartOverlay />
                            </div>
                        </div>
                    </header>
                ) : null}

                <main>
                    <Outlet />
                </main>
            </>
        );
    }
}

export default withApolloClient(PagesCommonHeader);
