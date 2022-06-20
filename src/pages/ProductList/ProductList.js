import { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard/ProductCard';
import ItemNotFound from '../../components/ItemNotFound/ItemNotFound';
import PLPLoading from './PLPLoading/PLPLoading';
import { GET_PRODUCTS_BY_CATEGORY } from '../../graphql/Queries';
import withRouter from '../../helpers/withRouter';
import withStorage from '../../helpers/withStorage';
import withApolloClient from '../../helpers/withApolloClient';


import styles from './ProductList.module.scss';

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
    }

    async componentDidUpdate(prevProps) {
        const prevCategory = prevProps.params.categoryId;
        const currentCategory = this.props.params.categoryId;
        if (prevCategory === currentCategory) {
            return;
        }
        await this.getProductsByCategory(currentCategory);
    }

    render() {
        const { categoryId } = this.props.params;
        const { products, loading } = this.state;

        return (
            <>
                {loading ? (
                    <PLPLoading />
                ) : products ? (
                    <div className={styles['list-container']}>
                        <p className={styles['list']}>{categoryId}</p>
                        <div className={styles['list-grid']}>
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    url={`/catalog/${categoryId}/${product.id}`}
                                    navigate={() => {
                                        this.props.navigate(`/catalog/${categoryId}/${product.id}`);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <ItemNotFound item={'category'} />
                )}
            </>
        );
    }
}

ProductList.propTypes = {
    categoryId: PropTypes.string,
};

export default withStorage(withApolloClient(withRouter(ProductList)));
