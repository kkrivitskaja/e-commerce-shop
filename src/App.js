import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';
import ProductDescription from './pages/ProductDescription/ProductDescription';

;

class App extends Component {
    render() {
        return (
            <>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<PagesCommonHeader />}>
                            <Route path="/:categoryId" element={<ProductList />} />
                            <Route
                                path="/:categoryId/:productId"
                                element={<ProductDescription />}
                            />
                            <Route path={'/cart'} element={<Cart />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;
