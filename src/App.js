import { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';
import ProductDescription from './pages/ProductDescription/ProductDescription';

class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<PagesCommonHeader />}>
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
                </div>
            </>
        );
    }
}

export default App;
