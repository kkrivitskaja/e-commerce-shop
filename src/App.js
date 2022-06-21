import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BaseModalWindow from './components/BaseModalWindow/BaseModalWindow';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';

import ProductList from './pages/ProductList/ProductList';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import withStorage from './helpers/withStorage';
import './App.scss';
class App extends Component {
    render() {
        const { isModalWindow, isCurrencyDropdown, isCartOverlay } = this.props.storageVar;
        return (
            <>
                <div
                    className={isModalWindow || isCurrencyDropdown || isCartOverlay ? 'scroll' : ''}
                >
                    <ScrollToTop>
                        <BaseModalWindow />
                        <Routes>
                            <Route path="/" element={<PagesCommonHeader />}>
                                <Route path="/" element={<Navigate replace to="/catalog/all" />} />

                                <Route path="/catalog/:categoryId" element={<ProductList />} />
                                <Route
                                    path="/catalog/:categoryId/:productId"
                                    element={<ProductDescription />}
                                />
                                <Route path={'/cart'} element={<Cart />} />
                                <Route path="/404" element={<PageNotFound />} />
                                <Route path="*" element={<Navigate replace to="/404" />} />
                            </Route>
                        </Routes>
                    </ScrollToTop>
                </div>
            </>
        );
    }
}

export default withStorage(App);
