import { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';
import ProductDescription from './pages/ProductDescription/ProductDescription';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
;

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
                </div>
            </>
        );
    }
}

export default App;
