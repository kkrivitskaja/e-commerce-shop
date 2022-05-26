import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { graphql } from 'react-apollo';

import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';
import { GET_CATEGORY } from './graphql/Queries';
class App extends Component {
    render() {
        const { categories } = this.props.data;
        return (
            <>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<PagesCommonHeader category={categories} />}>
                            <Route path="/:categoryId" element={<ProductList />} />
                            <Route path="/:categoryId/:productId" element={<ProductList />} />
                            <Route path={'/cart'} element={<Cart />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    </Routes>
                </div>
            </>
        );
    }
}

export default graphql(GET_CATEGORY)(App);
