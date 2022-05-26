import { Component } from 'react';
// import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';

import ProductCard from '../../components/ProductCard/ProductCard';
import { GET_PRODUCTS_BY_CATEGORY } from '../../graphql/Queries';
import withRouter from '../../helpers/withRouter';

import './ProductList.css';

class ProductList extends Component {
    state = {
        products: null,
        loading: true,
        error: null,
    };

    getProductsByCategory = async (categoryId) => {
        const { loading, error, data } = await this.props.client.query({
            query: GET_PRODUCTS_BY_CATEGORY,
            variables: {
                title: categoryId || 'all',
            },
        });
        this.setState({
            products: data?.category?.products,
            loading,
            error,
        });
    };

    async componentDidMount() {
        const { categoryId } = this.props.params;
        await this.getProductsByCategory(categoryId);
        console.log('this.state', this.state);
    }

     async componentDidUpdate(prevProps) {
        const  prevCategory  = prevProps.params.categoryId;
        const currentCategory  = this.props.params.categoryId;
        if (prevCategory === currentCategory) {
            return;
        }
       await this.getProductsByCategory(currentCategory);

     console.log('prevCategory', prevProps.params.categoryId);
       console.log('currentCategory', this.props.params);
    }

    render() {
        const { categoryId } = this.props.params;
        const { products, loading } = this.state;
        return (
            <>
                {loading && <div>LOADING DATA</div>}
                {products && loading === false && (
                    <div className="container">
                        <p className="title">{categoryId}</p>
                        <div className="grid">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    brand={product.brand}
                                    inStock={product.inStock}
                                    id={product.id}
                                    gallery={product.gallery}
                                    prices={product.prices}
                                    disabled={!product.inStock}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default withApollo(withRouter(ProductList));
