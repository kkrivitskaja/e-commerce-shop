import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import ProductList from './pages/ProductList/ProductList';
import Cart from './pages/Cart/Cart';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PagesCommonHeader from './components/PagesCommonHeader/PagesCommonHeader';

const GET_CATEGORY = gql`
    {
        categories {
            name
        }
    }
`;

class App extends Component {
    render() {
        const { loading, error, categories } = this.props.data;
        return (
            <>
                {loading && !error && !categories && <div>LOADING!!!!</div>}
                {!loading && error && !categories && <div>{error}</div>}
                {categories && !loading && !error && (
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<PagesCommonHeader category={categories} />}>
                                {categories.map((category) => (
                                    <Route
                                        path={`/${category.name}`}
                                        key={category.name}
                                        element={<ProductList name={category.name} />}
                                    />
                                ))}
                                <Route path={'/cart'} element={<Cart />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Route>
                        </Routes>
                    </div>
                )}
            </>
        );
    }
}

export default graphql(GET_CATEGORY)(App);
