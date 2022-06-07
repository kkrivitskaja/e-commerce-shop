import { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BaseModalWindow from './components/BaseModal/BaseModalWindow';
import ProductList from './pages/ProductList/ProductList';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';


class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <ScrollToTop>
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
                    <BaseModalWindow />
                </div>
            </>
        );
    }
}

export default App;
