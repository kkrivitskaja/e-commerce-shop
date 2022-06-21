import { Component } from 'react';

import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ItemNotFound from '../../components/ItemNotFound/ItemNotFound';
import PDLoading from './PDLoading/PDLoading';
import { GET_PRODUCT_BY_ID } from '../../graphql/Queries';
import withRouter from '../../helpers/withRouter';
import withApolloClient from '../../helpers/withApolloClient';

import styles from './ProductDescription.module.scss';

class ProductDescription extends Component {
    state = {
        product: null,
        loading: true,
        error: null,
    };

    getProductById = async (productId) => {
        const { loading, error, data } = await this.props.client.query({
            query: GET_PRODUCT_BY_ID,
            variables: {
                id: productId,
            },
        });

        this.setState({
            product: data?.product,
            loading,
            error,
        });
    };

    async componentDidMount() {
        const { productId } = this.props.params;
        const { currentProduct } = this.props.location;

        if (currentProduct) {
            this.setState({ product: currentProduct });
            return;
        }
        await this.getProductById(productId);
    }

    async componentDidUpdate(prevProps) {
        const prevProduct = prevProps.params.productId;
        const currentProduct = this.props.params.productId;

        if (prevProduct === currentProduct) {
            return;
        }
        await this.getProductById(currentProduct);
    }

    render() {
        const { product, loading } = this.state;

        return (
            <>
                {loading ? (
                    <PDLoading />
                ) : product ? (
                    <div className={styles['description']}>
                        <ImageSlider
                            productImages={product.gallery}
                            className={styles['description-slider']}
                        />
                        <ProductDetails
                            product={product}
                            className={styles['description-details']}
                        />
                    </div>
                ) : (
                    <ItemNotFound item={'product'} />
                )}
            </>
        );
    }
}

export default withApolloClient(withRouter(ProductDescription));
